import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.mdx',
    '../src/lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-themes',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['./static'],
  refs: (_config, { configType }) => ({
    countdown: {
      title: 'Countdown',
      url:
        configType === 'DEVELOPMENT'
          ? 'http://localhost:6016'
          : 'https://cocco3.github.io/mono-angular/countdown',
    },
  }),
};

export default config;
