import { z, defineCollection } from 'astro:content';
import { amp_src_elements } from '../site';

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    amp_include: z.array(z.enum(
      amp_src_elements
    ))
  }),
});

export const collections = {
  'blog': blogCollection,
};
