import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withThemeByClassName } from '@storybook/addon-themes';
import { formatAngularCode } from '@cocco3/utils';

import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      defaultTheme: 'light',
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
      },
    }),
  ],

  parameters: {
    backgrounds: { disable: true },

    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      sort: 'requiredFirst',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    docs: {
      canvas: { sourceState: 'shown' },
      codePanel: true,
      source: {
        transform: async (code: string) => {
          return await formatAngularCode(code);
        },
      },
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: ['intro', 'app', '*'],
      },
    },
  },
};

export default preview;
