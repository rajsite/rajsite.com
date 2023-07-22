module.exports = {
    root: true,
    extends: [
        '@ni/eslint-config-typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:astro/recommended',
    ],
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
            rules: {
                // override/add rules settings here, such as:
                // 'astro/no-set-html-directive': 'error'
            },
        },
    ],
};
