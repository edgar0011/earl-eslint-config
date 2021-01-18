module.exports = {
  'parser': '@typescript-eslint/parser',
  'extends': [
    'plugin:@typescript-eslint/recommended',
  ],
  'plugins': ['@typescript-eslint', 'import'],
  'parserOptions': {
    'sourceType': 'module',
  },
  'env': {
    'es6': true,
    'node': true,
  },
  'rules': {
    'generator-star-spacing': ['error', 'after'],
    'max-len': ['error', { 'code': 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'operator-linebreak': ['error', 'before'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', { 'multiline': { 'delimiter': 'none' } }],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/interface-name-prefix': 'off',
    // already used via esling plugin, this ignores JSX usage...
    // https://github.com/typescript-eslint/typescript-eslint/issues/868
    '@typescript-eslint/no-unused-vars': 'error',
    "import/no-cycle": "error",
    'import/named': 'warn',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'space-before-function-paren': 0,
  },
  'globals': {
    'describe': true,
    'test': true,
    'expect': true,
    'it': true,
    'cy': true,
    'beforeEach': true,
    'context': true,
    'jest': true,
    'fetch': true,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
}
