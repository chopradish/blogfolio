import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const career = defineCollection({
  loader: glob({ base: "./src/content/career", pattern: "**/*.mdx" }),
  schema: z.object({
    order: z.number().int().positive(),
    org: z.string(),
    position: z.string(),
    time: z.string(),
    loc: z.string(),
  }),
});

export const collections = { blog, career };
