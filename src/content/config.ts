import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    rank: z.number(),
    timeline: z.string().optional(),
    featured: z.boolean().default(false),
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
