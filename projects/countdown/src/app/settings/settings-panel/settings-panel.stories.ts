import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { SettingsPanelComponent } from './settings-panel.component';

type StoryArgs = SettingsPanelComponent & {
  content: string;
};

const meta: Meta<StoryArgs> = {
  title: 'app/settings-panel',
  component: SettingsPanelComponent,
  tags: ['autodocs'],
  args: {
    heading: 'Settings',
    content: 'Content goes here!',
  },
  render: ({ content, ...args }) => ({
    props: args,
    template: `
      <app-settings-panel ${storybookArgsToTemplate(args)}>
        ${content}
      </app-settings-panel>
    `,
  }),
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {};
