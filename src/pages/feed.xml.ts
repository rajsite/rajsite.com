import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { site } from '../site';

export const GET: APIRoute = async (_context) => {
    const blog = await getCollection('blog');
    return rss({
        stylesheet: '/assets/pretty-feed-v3.xsl',
        title: site.name,
        description: site.description,
        site: site.url,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: post.id,
        })),
    });
};
