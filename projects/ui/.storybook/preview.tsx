import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withThemeByClassName } from '@storybook/addon-themes';
import { formatAngularCode } from '@cocco3/utils';

import docJson from '../documentation.json';
setCompodocJson(docJson);

// react layout
import { DocsLayout } from './components/DocsLayout';

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
      page: () => <DocsLayout />,
      source: {
        transform: async (code: string) => {
          return await formatAngularCode(code);
        },
      },
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'intro',
          'foundations',
          ['Colors', 'Theme', 'Typography', 'Icons', '*'],
          'base',
          'popovers',
          'forms',
          ['form-field', '*'],
          'layout',
        ],
      },
    },
  },
};

export default preview;
