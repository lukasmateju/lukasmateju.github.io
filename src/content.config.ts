import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    rank: z.number(),
    timeline: z.string().optional(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    showOnHome: z.boolean().optional(),
    showInArchive: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.url().optional(),
        demo: z.url().optional(),
        external: z.url().optional()
      })
      .optional()
  })
});

export const collections = { projects };