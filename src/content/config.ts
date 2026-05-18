import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    category: z.enum(['Antes del vuelo', 'Los primeros días', 'Vivir ahí']),
    tags: z.array(z.string()),
    canonicalUrl: z.string().url(),
  }),
});

export const collections = { blog };
