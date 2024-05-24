// @ts-check

import 'eslint-plugin-only-warn';
import tseslint from 'typescript-eslint';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import jsdocPlugin from 'eslint-plugin-jsdoc';



export default tseslint.config(
    tseslint.configs.base,

    jsdocPlugin.configs['flat/recommended'],
    jsdocPlugin.configs['flat/recommended-typescript'],

    {
        plugins: {
            tsdoc: tsdocPlugin,
        },
        rules: {
            'tsdoc/syntax': 'warn',
        },
    },

    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/coverage/**',
            '**/build/**',
            '**/*.generated.*',
        ],
    },

    {
        extends: [tseslint.configs.disableTypeChecked],
        files: ['**/*.js', '**/*.jsx'],
    },
);
