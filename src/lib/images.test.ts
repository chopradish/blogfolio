import assert from "node:assert/strict";
import { test } from "node:test";
import { getContainedImageAspectRatio } from "./images.ts";

test("preserves rounded hero and thumbnail ratios when images are not upscaled", () => {
  const image = { width: 694, height: 265 };
  assert.equal(getContainedImageAspectRatio(image, 1020, 510), "1020 / 389");
  assert.equal(getContainedImageAspectRatio(image, 720, 360), "720 / 275");
});

test("contains portrait images and preserves downscaled ratios", () => {
  assert.equal(
    getContainedImageAspectRatio({ width: 600, height: 900 }, 720, 360),
    "240 / 360",
  );
  assert.equal(
    getContainedImageAspectRatio({ width: 2048, height: 1024 }, 720, 360),
    "720 / 360",
  );
});
