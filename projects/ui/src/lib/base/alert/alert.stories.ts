import {
  type Meta,
  type StoryObj,
  componentWrapperDecorator,
} from '@storybook/angular';
import { storybookArgsToTemplate, asMilliseconds } from '@cocco3/utils';
import { UiAlertComponent, UiAlertKinds } from './alert.component';

type AlertStory = UiAlertComponent & {
  content: string;
};

const meta: Meta<AlertStory> = {
  component: UiAlertComponent,
  tags: ['autodocs'],
  argTypes: {
    dismissClicked: { control: { disable: true } },
    duration: { control: { type: 'number' } },
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
    content: `The file could not be uploaded. Please try again.`,
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

/**
 * Show a progress bar coundtdown for the duration (in ms).
 * You are still responsible to take some action after the duration ends. It will not auto-dismiss.
 */
export const Duration: Story = {
  args: {
    kind: 'positive',
    heading: 'Profile updated',
    content: 'Your changes have been saved successfully.',
    duration: asMilliseconds(5000),
  },
};

export const MaxHeight: Story = {
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="max-width: 360px;">${story}</div>`
    ),
  ],
  args: {
    kind: 'positive',
    heading: 'Profile updated',
    content:
      'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
  },
  render: ({ content, ...args }) => ({
    props: args,
    template: `
      <ui-alert ${storybookArgsToTemplate(args)} [style.max-height.px]="150">
        ${content}
      </ui-alert>
    `,
  }),
};
