import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
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
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
        external: z.string().url().optional()
      })
      .optional()
  })
});

export const collections = { projects };
