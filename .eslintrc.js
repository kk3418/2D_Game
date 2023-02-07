module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  rules: {
    singleQuote: false,
    trailingComma: "es5",
    printWidth: 120,
    tabWidth: 2,
  },
};
