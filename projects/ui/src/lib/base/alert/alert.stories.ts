import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiAlertComponent, UiAlertKinds } from './alert.component';

type AlertStory = UiAlertComponent & {
  content: string;
};

const meta: Meta<AlertStory> = {
  component: UiAlertComponent,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: UiAlertKinds, control: { type: 'radio' } },
  },
  args: {
    content: 'The quick brown fox jumps over the lazy dog.',
  },
  render: ({ content, ...args }) => ({
    props: args,
    template: `
      <ui-alert ${storybookArgsToTemplate(args)}>
        ${content}
      </ui-alert>
    `,
  }),
};

export default meta;
type Story = StoryObj<AlertStory>;

export const Neutral: Story = {
  args: { kind: 'neutral' },
};

export const Error: Story = {
  args: { kind: 'error' },
};

export const Warning: Story = {
  args: { kind: 'warning' },
};

export const Success: Story = {
  args: { kind: 'success' },
};

export const Info: Story = {
  args: { kind: 'info' },
};
