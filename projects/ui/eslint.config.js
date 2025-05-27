// @ts-check
const tseslint = require('typescript-eslint');
const rootConfig = require('../../eslint.config.js');

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: ['attribute', 'element'],
          prefix: ['ui', 'lib', 'sb'],
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: ['attribute', 'element'],
          prefix: ['ui', 'lib', 'sb'],
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  }
);
