import yml from "eslint-plugin-yml";

export default [
  {
    ignores: ["node_modules/**"],
  },
  ...yml.configs["flat/recommended"],
  ...yml.configs["flat/prettier"],
  {
    rules: {
      // GitHub Actions workflow syntax relies on empty mapping values,
      // e.g. `workflow_dispatch:` or `push:` with no nested keys.
      "yml/no-empty-mapping-value": "off",
    },
  },
];
