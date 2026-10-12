import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string().optional(),
      // Categories like "philosophy", "neuroscience", "history-of-science"
      tags: z.array(z.string()).default([]),
      // Optional hero image relative to /images/
      image: z.string().optional(),
      // Set to true so the post appears at the top of the list
      pinned: z.boolean().default(false),
    }),
  }),
};
