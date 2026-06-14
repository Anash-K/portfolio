export const PROJECT_IMAGE_PLACEHOLDER = "/projects/placeholder.svg";

export function hasProjectImage(image?: string | null): boolean {
  return Boolean(image?.trim());
}

export function resolveProjectImage(image?: string | null): string {
  const trimmed = image?.trim();
  return trimmed || PROJECT_IMAGE_PLACEHOLDER;
}
