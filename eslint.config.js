import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          ignoreRestArgs: true,
        },
      ],
      "react/jsx-key": [
        "warn",
        {
          checkFragmentShorthand: true,
        },
      ],
      "no-console": [
        "warn",
        {
          allow: ["warn", "error", "info"],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              message: "Please use import { method } from `lodash-es` instead.",
              name: "lodash",
            },
            {
              importNames: ["chain"],
              message:
                "Avoid using chain since it is non tree-shakable. Try out flow instead.",
              name: "lodash-es",
            },
            {
              importNames: ["default"],
              message:
                "Instead of default import, please use import { method } from `lodash-es` instead.",
              name: "lodash-es",
            },
            {
              message:
                "Avoid using chain since it is non tree-shakable. Try out flow instead.",
              name: "lodash-es/chain",
            },
          ],
          patterns: [
            "shared/*/*",
            "*/**/shared/*",
            "utils/*/*",
            "*/**/utils/*",
            "modules/*/*/*",
            "*/**/modules/*/*",
            "lodash/**",
            "lodash/fp/**",
            "react-router-dom",
            "dayjs",
          ],
        },
      ],
    },
  },
];
