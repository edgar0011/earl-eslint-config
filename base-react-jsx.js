module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'babel',
    'react',
    'react-hooks',
    'promise',
    'eslint-plugin-import-order',
    'eslint-plugin-import-order-alphabetical',
    'import'
  ],
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    describe: true,
    test: true,
    expect: true,
    it: true,
    SyntheticEvent: true,
    SyntheticKeyboardEvent: true,
    SyntheticMouseEvent: true,
    SyntheticTouchEvent: true,
    HTMLInputElement: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    "import/no-cycle": "error",
    'import-order-alphabetical/order': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'error',
    'no-constant-condition': 'off',
    'no-useless-constructor': 'warn',
    'no-multi-spaces': 'error',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    quotes: ['error', 'single'],
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'max-len': [
      'error',
      120,
      2,
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'warn',
    'react/prop-types': 'warn',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    semi: [
      'error',
      'never',
    ],
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: false,
        allowArrowFunctions: false,
        allowBind: false,
      },
    ],
    'react/jsx-wrap-multilines': ['error', { prop: 'parens-new-line' }],
    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
}
