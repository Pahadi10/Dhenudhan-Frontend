const prettierConfiguration = require('./.prettierrc')

module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  plugins: ['react', 'prettier', 'jsx-a11y', 'react-hooks'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/internal-regex': '^(_|@lib|@packages)',
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'object-shorthand': ['error', 'always'],
    'no-multiple-empty-lines': [
      'off',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', prettierConfiguration],
    'react/prop-types': 'error',
    'import/no-anonymous-default-export': 'off',
  },
}
