import type { ImageMetadata } from "astro";

// Preserve the rounded display ratio used before Astro stopped upscaling images.
export function getContainedImageAspectRatio(
  image: Pick<ImageMetadata, "width" | "height">,
  width: number,
  height: number,
): string {
  const scale = Math.min(width / image.width, height / image.height);
  return `${Math.round(image.width * scale)} / ${Math.round(image.height * scale)}`;
}
