import { z, defineCollection } from 'astro:content';
import { ampImportNames } from '../site';

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string().optional(),
        ampImportNames: z.array(z.enum(
            ampImportNames
        ))
    }),
});

export const collections = {
    blog: blogCollection,
};
