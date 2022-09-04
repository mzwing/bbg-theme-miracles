module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin"
  ],
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:yml/standard",
    "plugin:markdown/recommended",
  ],
  ignorePatterns: [
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    type: "module"
  },
  overrides: [
    {
      files: ["*.json", "*.json5"],
      parser: "jsonc-eslint-parser",
      rules: {
        quotes: ["warn", "double"],
        "quote-props": ["warn", "consistent-as-needed"],
        "comma-dangle": ["warn", "always"],
      },
    },
    {
      files: ["package.json"],
      parser: "jsonc-eslint-parser",
      rules: {
        "jsonc/sort-keys": [
          "warn",
          {
            pathPattern: "^$",
            order: [
              "name",
              "type",
              "version",
              "private",
              "packageManager",
              "description",
              "keywords",
              "license",
              "author",
              "repository",
              "funding",
              "main",
              "module",
              "types",
              "unpkg",
              "jsdelivr",
              "exports",
              "files",
              "bin",
              "sideEffects",
              "scripts",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "optionalDependencies",
              "devDependencies",
              "husky",
              "lint-staged",
              "eslintConfig",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" },
          },
        ],
      },
    },
    {
      files: ["*.*js"],
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-eval": "warn",
        "no-empty": "warn",
        "no-extra-semi": "warn",
      },
    },
    {
      // Code blocks in markdown file
      files: ["**/*.md/*.*"],
      rules: {
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
      },
    },
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
