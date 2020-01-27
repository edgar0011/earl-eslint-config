module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  plugins: [
    'babel',
    'promise',
    'eslint-plugin-import-order',
    'eslint-plugin-import-order-alphabetical',
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
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'implicit-arrow-linebreak': ['error', 'beside'],
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
    'max-len': [
      'error',
      120,
      2,
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    semi: [
      'error',
      'never',
    ],

    'object-curly-newline': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
}
