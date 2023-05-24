module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
      typescript: true,
    },
  },
  ignorePatterns: ["**/report/*.js"],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-arrow-callback": "off",
    quotes: ["error", "single", { avoidEscape: true }],
    // TO BE REMOVED later
    "no-multiple-empty-lines": "off",
    "react/jsx-props-no-spreading": "off",
    "react/static-property-placement": "off",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "no-useless-constructor": "off",
    semi: ["error", "always"],
    "max-len": ["error", { code: 120, tabWidth: 2, ignoreUrls: true, ignoreStrings: false, ignorePattern: "d=.*" }],

    // https://github.com/typescript-eslint/typescript-eslint/issues/455
    "@typescript-eslint/indent": "off",

    // exceptions for Styled components
    "react/no-unknown-property": ["error", { ignore: ["css"] }],

    // exception for react functional arrow components
    "react/function-component-definition": ["error", {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    }],
  },
}
