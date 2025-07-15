import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'Countdown app',
    brandUrl:
      'https://github.com/cocco3/mono-angular/tree/main/projects/countdown',
    brandTarget: '_blank',
  }),
});
