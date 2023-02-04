export default [
  {
    extends: ["eslint:recommended", "prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "es5",
          printWidth: 120,
          tabWidth: 2,
        },
      ],
    },
  },
];
