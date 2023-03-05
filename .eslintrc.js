module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    singleQuote: 0,
    trailingComma: 0,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
