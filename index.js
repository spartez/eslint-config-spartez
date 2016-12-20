module.exports = {
    "rules": {
        "indent": ["warn", 4, { "SwitchCase": 1 }],
        "quotes": ["warn", "single", { "allowTemplateLiterals": true }],
        "linebreak-style": ["warn", "unix"],
        "semi": ["warn", "always"],
        "eqeqeq": "warn",
        "max-len": ["warn", 120, 4, { "ignoreUrls": true }],
        "comma-dangle": ["warn", "never"],
        "no-unused-vars": ["warn"],
        "no-undef": ["warn"]
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "parser": "babel-eslint"
}
