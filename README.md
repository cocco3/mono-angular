# @cocco3/mono-angular

An [Angular](./ANGULAR.md) monorepo.

## Apps

- [countdown](./projects/countdown) - A countdown app integrated with Google Calendar ([app](https://cocco-countdown.netlify.app))
- [angular-invoice](./projects/angular-invoice) - A simple web form for creating invoices and proposals for my dad's business

## Libraries

- [ui](./projects/ui) - Component library documented with Storybook ([docs](https://cocco3.github.io/mono-angular))
- [utils](./projects/utils) - Handful of utilities

## Setup

1. Install packages `npm install`

   - Also runs `init:hooks` which sets up a pre-commit git hook for linting and formatting

1. Create local environment files `npm run init:env-local`

## Contributing

### Upgrade Storybook

Follow these steps to [upgrade Storybook](https://storybook.js.org/docs/configure/upgrading).

```shell
npx storybook@latest upgrade --config-dir="projects/ui/.storybook"
```
