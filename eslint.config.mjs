import eslint from '@eslint/js';
import * as tseslint from 'typescript-eslint';
import * as angular from 'angular-eslint';
import storybook from 'eslint-plugin-storybook';

export default tseslint.config(
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'object-shorthand': ['error', 'always'],
      'no-duplicate-imports': 'error',
      'no-useless-rename': ['error'],

      // '@angular-eslint/prefer-inject': 'error',
      // '@angular-eslint/sort-keys-in-type-decorator': 'error',
      // '@angular-eslint/no-uncalled-signals': 'error',

      '@angular-eslint/prefer-output-emitter-ref': 'error',
      '@angular-eslint/prefer-output-readonly': 'error',
      '@angular-eslint/prefer-standalone': 'error',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
      '@angular-eslint/template/prefer-template-literal': ['error'],

      // disable this until it works better with signals
      // '@angular-eslint/template/no-call-expression': ['warn'],
    },
  },
  {
    ignores: ['**/dist/', '**/.angular/'],
  }
);
