# @cocco3/mono-angular

An [Angular](./ANGULAR.md) monorepo.

## Apps

- [CountdownApp](./projects/countdown) - A countdown app integrated with Google Calendar ([app](https://cocco-countdown.netlify.app))
- [Vampire Survivors](./projects/vampire-survivors) - Weapon evolution chart for the video game Vampire Surivors. ([app](https://vamps-evolutions.netlify.app))

## Libraries

- [ui](./projects/ui) - Component library documented with Storybook ([docs](https://cocco3.github.io/mono-angular))
- [utils](./projects/utils) - Handful of utilities

## Setup

1. Use the required version of node defined in [.nvmrc](./.nvmrc)
   - Use a tool like [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm)
1. Run `npm install` to install dependencies
1. Run `npm run init` which does the following:
   - `npm run init:git-hooks`: Sets up a pre-commit hook for linting/formatting
   - `npm run init:env-local`: Creates local environment files that are ignored by git

## Deployment

- [CountdownApp](./projects/countdown) - Auto deployed via Netlify
- [Vampire Survivors](./projects/vampire-survivors) - Auto deployed via Netlify
- [ui](./projects/ui) - Auto deployed to GitHub pages via GitHub actions

## Contributing

### Upgrade Angular

Follow the official [upgrade guide](https://angular.dev/update-guide).

```shell
ng update @angular/core@20 @angular/cli@20
```

### Upgrade Storybook

Follow these steps to [upgrade Storybook](https://storybook.js.org/docs/configure/upgrading).

```shell
npm run sb:update
```

For major version upgrades, be sure to check the [custom DocsLayout](./projects/ui/.storybook/components/DocsLayout.tsx) still works as expected.
