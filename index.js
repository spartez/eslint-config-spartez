module.exports = {
    rules: {
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn', {
            'before': false,
            'after': true
        }],
        'eqeqeq': 'warn',
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['warn', 'unix'],
        'max-len': ['warn', 120, 4, { 'ignoreUrls': true }],
        'no-undef': ['warn'],
        'no-unused-vars': ['warn'],
        'object-curly-spacing': ['warn', 'always'],
        'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
        'semi': ['warn', 'always']
    },
    env: {
        'es6': true,
        'node': true,
        'browser': true
    },
    parser: 'babel-eslint'
};
