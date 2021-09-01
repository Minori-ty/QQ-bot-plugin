module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['prettier'],
    extends: ['eslint:recommended'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true,
                semi: false,
            },
        ],
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
    },
}
