import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiRadioComponent } from './radio.component';

type RadioStory = UiRadioComponent & {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
};

/**
 * Use with [form-field](/story/forms-form-field--radio) component
 */
const meta: Meta<RadioStory> = {
  component: UiRadioComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=1097-63652&t=zIQCmerxWCcvw2xE-0',
    },
  },

  render: (args) => ({
    props: args,
    template: `
      <input ui-radio ${storybookArgsToTemplate(args)} />
    `,
  }),
};

export default meta;

type Story = StoryObj<RadioStory>;

export const Default: Story = {
  args: { value: 'Hello world', name: 'rb-default' },
};

export const Checked: Story = {
  args: { value: 'Hello world', checked: true, name: 'rb-checked' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true, name: 'rb-disabled' },
};

export const CheckedDisabled: Story = {
  args: {
    value: 'Hello world',
    checked: true,
    disabled: true,
    name: 'rb-checked-disabled',
  },
};
