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
    dismissClicked: { control: { disable: true } },
    kind: { options: UiAlertKinds, control: { type: 'radio' } },
  },
  args: {
    content: 'The quick brown fox jumps over the lazy dog.',
    dismissible: true,
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
  args: {
    kind: 'neutral',
    heading: 'Sync complete',
    content: 'All items are now up to date.',
  },
};

export const Negative: Story = {
  args: {
    kind: 'negative',
    heading: 'Upload failed',
    content: `The file could not be uploaded. Please try again.'`,
  },
};

export const Warning: Story = {
  args: {
    kind: 'warning',
    heading: 'Unsaved changes',
    content: 'You have unsaved edits. Leaving now will discard them.',
  },
};

export const Positive: Story = {
  args: {
    kind: 'positive',
    heading: 'Profile updated',
    content: 'Your changes have been saved successfully.',
  },
};

export const Info: Story = {
  args: {
    kind: 'info',
    heading: 'New feature',
    content: 'Try our updated dashboard with enhanced filtering.',
  },
};
