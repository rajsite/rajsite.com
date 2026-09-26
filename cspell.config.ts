// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cspell';

// eslint-disable-next-line import/no-default-export
export default defineConfig(
    {
        ignoreRegExpList: [
            // ignore json blocks
            /(```+)\s?json[\s\S]+?\1/g,
            // Ignore front matter
            // /^([-]{3}|[+]{3}|[.]{3})$[\s\S]+^([-]{3}|[+]{3}|[.]{3})$/gm
        ],
        language: 'en',
        words: [
            'rajsite',
            'videoid',
            'quadrotor',
            'webscale',
            'labview',
            'frontmatter',
            'astro'
        ]
    }
);
