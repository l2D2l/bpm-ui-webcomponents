module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'simple-import-sort'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:jest/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@stencil/recommended',
    ],
    rules: {
        // jest
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        // simple-import-sort
        'simple-import-sort/sort': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        // stenciljs
        '@stencil/async-methods': 'error',
        '@stencil/ban-prefix': ['error', ['stencil', 'stnl', 'st']],
        '@stencil/decorators-context': 'error',
        '@stencil/decorators-style': [
            'error',
            {
                prop: 'inline',
                state: 'inline',
                element: 'inline',
                event: 'inline',
                method: 'multiline',
                watch: 'multiline',
                listen: 'multiline',
            },
        ],
        '@stencil/element-type': 'error',
        '@stencil/host-data-deprecated': 'error',
        '@stencil/methods-must-be-public': 'error',
        '@stencil/no-unused-watch': 'error',
        '@stencil/own-methods-must-be-private': 'error',
        '@stencil/own-props-must-be-private': 'error',
        '@stencil/prefer-vdom-listener': 'error',
        '@stencil/props-must-be-public': 'error',
        '@stencil/props-must-be-readonly': 'error',
        '@stencil/render-returns-host': 'error',
        '@stencil/required-jsdoc': 'off',
        '@stencil/reserved-member-names': 'error',
        '@stencil/single-export': 'error',
        '@stencil/strict-mutable': 'warn',
        '@stencil/strict-boolean-conditions': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: 'h|Host' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react/jsx-no-bind': 'off',
    },
    env: {
        'jest/globals': true,
        es6: true,
        browser: true,
    },
    settings: {
        'import/extensions': ['.js', '.jsx', '.tsx', 'ts'],
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },
};