import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
// eslint-disable-next-line import/no-default-export
export default defineConfig({
    compressHTML: false,
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
        },
    },
});
