module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    singleQuote: 0,
    trailingComma: 0,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
