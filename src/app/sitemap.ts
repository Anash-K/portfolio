import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/site";
import { NAV_LINKS } from "@/constants/navigation";
import { PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = NAV_LINKS.map((link) => ({
    url: `${SITE_CONFIG.url}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: link.href === "/" ? 1 : 0.8,
  }));

  const projectUrls = PROJECTS.map((project) => ({
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectUrls];
}
