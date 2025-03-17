import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: '@cocco3/angular-ui',
    brandUrl: 'https://github.com/cocco3/mono-angular',
    brandTarget: '_blank',
  }),
});
