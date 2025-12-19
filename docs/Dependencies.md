# Dependencies

Documentation for managinge dependencies and keeping them up to date.

## Renovate

[Renovate](https://docs.renovatebot.com) has been set to automate dependency updates.

- Modify [config options](https://docs.renovatebot.com/configuration-options/) in the [renovate.json](/renovate.json) file.
- View the [dependency dashboard](https://github.com/cocco3/mono-angular/issues/30) to see an overview of the state of the repo's dependencies.

## Manually upgrade Angular

Run the following command to run the [update-angular.ts](../build/update-angular.ts) script.

```shell
npm run angular:update
```

Read more at the [official Angular upgrade guide](https://angular.dev/update-guide).

## Manually upgrade Storybook

Run the following command to run the [update-storybook.ts](../build/update-storybook.ts) script.

```shell
npm run sb:update <'major' | 'minor' | 'patch' | 'latest'>
```

Read more at the [upgrading Storybook official docs](https://storybook.js.org/docs/configure/upgrading).

For major version upgrades, be sure to check the [custom DocsLayout](./projects/ui/.storybook/components/DocsLayout.tsx) still works as expected.
