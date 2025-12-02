# Linting

The following tools are used for linting and formatting code.

| Package                                  | Description                                                        | IDE Integrations                                                       | config                                  |
| ---------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------------------------------------- |
| [EditorConfig](https://editorconfig.org) | Maintain consistent coding styles across various editors and IDEs. | [EditorConfig integrations](https://editorconfig.org/#download)        | [.editorconfig](/.editorconfig)         |
| [eslint](https://eslint.org)             | Linter that enforces code quality in JS and TS.                    | [eslint integrations](https://eslint.org/docs/latest/use/integrations) | [eslint.config.mjs](/eslint.config.mjs) |
| [Prettier](https://prettier.io)          | Opinionated formatter that works across many languages.            | [prettier integrations](https://prettier.io/docs/en/editors)           | [.prettierrc](/.prettierrc)             |

## Pre-commit

These tools will automatically run on staged files via a pre-commit git hook using [nano-staged](https://github.com/usmanyunusov/nano-staged) and [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).

Set up the pre-commit hooks by running the following. This only has to be done once.

```shell
npm run init:git-hooks
```

This initializes the repo to run the [pre-commit.sh](../pre-commit.sh) script which loads node and runs `nano-staged`.

With this setup, during a commit it auto-fixes what it can. All remaining issues must be resolved manually before the commit can succeed.

## Auto format on save

For VS Code, be sure to have these settings:

- "editor.formatOnSave": true
- "editor.defaultFormatter": "esbenp.prettier-vscode"
- "eslint.useFlatConfig": true
