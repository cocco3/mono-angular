# @cocco3/mono-angular

An [Angular](./ANGULAR.md) monorepo.

## Apps

- [countdown](./projects/countdown) - A countdown app integrated with Google Calendar ([app](https://cocco-countdown.netlify.app))

## Libraries

- [ui](./projects/ui) - Component library documented with Storybook ([docs](https://cocco3.github.io/mono-angular))
- [utils](./projects/utils) - Handful of utilities

## Setup

1. Run `npm install` to install dependencies
1. Run `npm run init` which does the following:
   - `npm run init:git-hooks`: Sets up a pre-commit hook for linting/formatting
   - `npm run init:env-local`: Creates local environment files that are ignored by git

## Contributing

### Upgrade Storybook

Follow these steps to [upgrade Storybook](https://storybook.js.org/docs/configure/upgrading).

```shell
npx storybook@latest upgrade --config-dir="projects/ui/.storybook"
```

For major version upgrades, be sure to check the [custom DocsLayout](./projects/ui/.storybook/components/DocsLayout.tsx) still works as expected.
