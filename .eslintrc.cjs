module.exports = {
  root: true,
  env: { browser: true, es2023: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react-refresh"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react-refresh/recommended", "prettier"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
  }
};
