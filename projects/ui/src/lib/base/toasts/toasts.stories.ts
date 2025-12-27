import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { storybookArgsToTemplate, asMilliseconds } from '@cocco3/utils';
import { UiToastsComponent, UiToastPlacements } from './toasts.component';
import { SbToastsDemoComponent } from './sb-toasts-demo';
import { type UiAlertComponent, UiAlertKinds } from '../alert/alert.component';

type StoryArgs = UiToastsComponent &
  UiAlertComponent & {
    duration?: number;
  };

const meta: Meta<StoryArgs> = {
  component: UiToastsComponent,
  tags: ['docspage'],
  decorators: [moduleMetadata({ imports: [SbToastsDemoComponent] })],
  argTypes: {
    placement: { options: UiToastPlacements, control: 'radio' },
    dismissible: {
      control: { type: 'boolean' },
      table: { category: 'Demo - Alert', type: { detail: undefined } },
      description: '`boolean`',
    },
    duration: {
      control: { type: 'number' },
      table: { category: 'Demo - Alert', type: { detail: undefined } },
      description: '`Milliseconds`',
    },
    heading: {
      control: { type: 'text' },
      table: { category: 'Demo - Alert', type: { detail: undefined } },
      description: '`string`',
    },
    kind: {
      options: UiAlertKinds,
      control: { type: 'radio' },
      table: { category: 'Demo - Alert', type: { detail: undefined } },
      description: '`UiAlertKind`',
    },
  },
  args: {
    placement: 'top-center',
    dismissible: false,
    heading: 'Heading',
    kind: 'info',
    offset: '3rem',
  },
  render: ({ dismissible, duration, heading, kind, ...args }) => ({
    props: args,
    template: `
      <ui-toasts ${storybookArgsToTemplate(args)} />

      <sb-toasts-demo ${storybookArgsToTemplate({ dismissible, duration, heading, kind })} />
    `,
  }),
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const Dismissible: Story = {
  args: { dismissible: true },
};

export const Placement: Story = {
  args: { placement: 'bottom-end' },
};

export const Duration: Story = {
  args: { duration: asMilliseconds(3000) },
};
