import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';
import { site } from './src/site';

// https://astro.build/config
// eslint-disable-next-line import/no-default-export
export default defineConfig({
    site: site.url,
    compressHTML: false,
    integrations: [sitemap(), mdx()],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
        },
    },
});
