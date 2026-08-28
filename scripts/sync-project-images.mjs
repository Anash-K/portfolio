#!/usr/bin/env node
/**
 * Scans public/projects/<slug>-images/ folders and rewrites each matching
 * project's `images` array in src/data/projects.ts to reflect what's on disk.
 *
 * Usage: node scripts/sync-project-images.js
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECTS_DIR = path.join(__dirname, "..", "public", "projects");
const DATA_FILE = path.join(__dirname, "..", "src", "data", "projects.ts");

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".avif"]);

// Filenames with spaces, commas, or other punctuation are unreliable across
// browsers/servers (e.g. literal commas 404 against this app's static file
// routing). Rename on disk to a safe "<slug>-<n>.<ext>" form before wiring.
function sanitizeFileName(originalName, slug, index) {
  const ext = path.extname(originalName).toLowerCase();
  return `${slug}-${index + 1}${ext}`;
}

function getSlugFolders() {
  return fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.endsWith("-images"))
    .map((entry) => ({
      slug: entry.name.replace(/-images$/, ""),
      dir: entry.name,
    }));
}

function getImagesForFolder(dir, slug) {
  const fullPath = path.join(PROJECTS_DIR, dir);
  const files = fs
    .readdirSync(fullPath)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const renamePlan = files.map((file, index) => ({
    from: file,
    to: sanitizeFileName(file, slug, index),
  }));

  // Two-pass rename: stage every changed file under a temp name first, so a
  // target name that's also a *source* name elsewhere in the batch can't be
  // clobbered before it's read.
  const staged = renamePlan.map(({ from, to }) => {
    if (from === to) return { from, to, staging: from };
    const staging = `.sync-tmp-${Math.random().toString(36).slice(2)}-${from}`;
    fs.renameSync(path.join(fullPath, from), path.join(fullPath, staging));
    return { from, to, staging };
  });

  return staged.map(({ from, to, staging }) => {
    if (from !== to) {
      fs.renameSync(path.join(fullPath, staging), path.join(fullPath, to));
      console.log(`Renamed "${dir}/${from}" -> "${dir}/${to}"`);
    }
    return `/projects/${dir}/${to}`;
  });
}

function toImagesArrayLiteral(images) {
  if (images.length === 0) return "images: [],";
  const lines = images.map((img) => `      "${img.replace(/"/g, '\\"')}",`);
  return ["images: [", ...lines, "    ],"].join("\n    ");
}

function syncDataFile(slugFolders) {
  let source = fs.readFileSync(DATA_FILE, "utf8");
  let changed = 0;

  for (const { slug, dir } of slugFolders) {
    const images = getImagesForFolder(dir, slug);

    const slugPattern = new RegExp(
      `(slug:\\s*"${slug}"[\\s\\S]*?)(images:\\s*\\[[\\s\\S]*?\\],)`,
      "m"
    );

    if (!slugPattern.test(source)) {
      console.warn(
        `Skipped "${slug}": no existing "images:" field found for this project in projects.ts`
      );
      continue;
    }

    const replacement = toImagesArrayLiteral(images);
    const next = source.replace(slugPattern, (_match, prefix) => prefix + replacement);

    if (next !== source) {
      source = next;
      changed++;
      console.log(`Synced "${slug}": ${images.length} image(s)`);
    }
  }

  fs.writeFileSync(DATA_FILE, source);
  return changed;
}

function main() {
  const slugFolders = getSlugFolders();
  if (slugFolders.length === 0) {
    console.log("No */-images folders found in public/projects.");
    return;
  }
  const changed = syncDataFile(slugFolders);
  console.log(changed > 0 ? `Done. Updated ${changed} project(s).` : "No changes needed.");
}

main();
