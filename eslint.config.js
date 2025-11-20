import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
    js.configs.recommended,

    ...vue.configs['flat/recommended'],

    prettierConfig,

    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser, // Добавить все глобальные объекты браузера
                ...globals.node, // Добавить глобальные объекты Node.js
            },
        },
    },

    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        },
    },

    {
        files: ['**/*.vue'],
        plugins: {
            vue,
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'vue/require-default-prop': 'off',
            'vue/require-explicit-emits': 'error',
            'vue/component-name-in-template-casing': [
                'error',
                'PascalCase',
                {
                    registeredComponentsOnly: false,
                },
            ],
        },
    },

    {
        ignores: ['node_modules/**', 'dist/**', 'build/**', '*.min.js', 'coverage/**', '.vite/**'],
    },
]
