// @ts-check

import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { satteriMath } from "./src/lib/markdown-math.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://chopradish.pages.dev",
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
  // Keep output compact; math and MDX are compiled entirely at build time.
  compressHTML: true,
  markdown: {
    // These authored fence labels intentionally retain plaintext rendering.
    shikiConfig: { langAlias: { ":SARSA": "text", ":Q-Learning": "text" } },
    processor: satteri({
      features: { math: true },
      hastPlugins: [satteriMath],
    }),
  },

  output: "static",
});
