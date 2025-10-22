# Dependencies

Documentation for managinge dependencies and keeping them up to date.

## Renovate

[Renovate](https://docs.renovatebot.com) has been set to automate dependency updates.

- Modify [config options](https://docs.renovatebot.com/configuration-options/) in the [renovate.json](/renovate.json) file.
- View the [dependency dashboard](https://github.com/cocco3/mono-angular/issues/30) to see an overview of the state of the repo's dependencies.

## Manually upgrade Angular

Follow the official [Angular upgrade guide](https://angular.dev/update-guide).

```shell
npm run angular:update
```

## Manually upgrade Storybook

Follow these steps to [upgrade Storybook](https://storybook.js.org/docs/configure/upgrading).

```shell
npm run sb:update
```

For major version upgrades, be sure to check the [custom DocsLayout](./projects/ui/.storybook/components/DocsLayout.tsx) still works as expected.
