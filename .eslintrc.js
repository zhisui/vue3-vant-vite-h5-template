/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:vue-scoped-css/vue3-recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],

    rules: {
        'vue-scoped-css/no-unused-selector': 'error',
        'vue-scoped-css/no-parsing-error': 'error',
        // 缩进必须为 2 个空格 https://eslint.org/docs/latest/rules/indent#rule-details
        indent: ['error', 4],
        // 禁止所有 tab https://eslint.org/docs/latest/rules/no-tabs#rule-details
        'no-tabs': 'error',
        'no-console': "warn",
    },

    parserOptions: {
        ecmaVersion: 'latest'
    }
}
