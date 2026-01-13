import { defineConfig, globalIgnores } from 'eslint/config';
import { javascriptConfig, importNodeEsmConfig } from '@ni/eslint-config-javascript';
import { typescriptConfig } from '@ni/eslint-config-typescript';
import eslintPluginAstro from 'eslint-plugin-astro';

export default defineConfig([
    globalIgnores(['**/dist/']),
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs['jsx-a11y-strict'],
    {
        files: ['eslint.config.js'],
        extends: [javascriptConfig, importNodeEsmConfig],
    },
    {
        files: ['*.ts'],
        extends: typescriptConfig,
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        }
    },
]);
