import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/blog',
        generateId: ({ data }) => data.permalink as string,
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string().optional(),
        permalink: z.string(),
    }),
});

export const collections = {
    blog: blogCollection,
};