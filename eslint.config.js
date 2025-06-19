import reactPlugin from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ["@babel/preset-react"]
                }
            },
            ecmaVersion: 2021,
            sourceType: 'module'
        },
        plugins: {
            react: reactPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            'react/prop-types': 'off'
        },
        settings: {
            react: {
                version: 'detect'
            }
        }
    }
];