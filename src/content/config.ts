import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};