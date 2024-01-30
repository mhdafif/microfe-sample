/* eslint-disable no-undef */
module.exports = {
  ignorePatterns: ["**/newrelic/*.js"],
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:security/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "security",
    "react-hooks",
    "unused-imports",
  ],
  rules: {
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': 'error',
    "@typescript-eslint/no-explicit-any": "off",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".tsx", ".js", ".jsx"] },
    ],
    // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    // "no-console": "warn",
    // "sort-imports": "warn",
    // "sort-imports": [
    //   "warn",
    //   {
    //     // ignoreCase: false,
    //     // ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     // memberSyntaxSortOrder: ["none"],
    //     // allowSeparatedGroups: false,
    //   },
    // ],
    // "sort-imports": ["error", { "ignoreMemberSort": true }],

    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn",

    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
