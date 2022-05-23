module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
  ],
  plugins: [
    '@babel',
    'promise',
    'import',
  ],
  parserOptions: {
    'ecmaVersion': 2020
  },
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
    'import/no-cycle': 'error',
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
    'indent': ['error', 2],
    'function-paren-newline': ['error', 'consistent'],
    quotes: ['error', 'single'],
    'max-len': ['error', { 'code': 120, tabWidth: 2, ignoreUrls: true }],
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
    'space-before-function-paren': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']}
    ]
  },
}
