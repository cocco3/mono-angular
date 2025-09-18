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
 * For an individual radio button, use with [form-field](/story/forms-form-field--radio) component.
 *
 * For a group of radio buttons, use [selection-group](/story/forms-selection-group--radio) component.
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
  args: {
    value: 'Hello world',
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
  args: { name: 'rb-default' },
};

export const Checked: Story = {
  args: { checked: true, name: 'rb-checked' },
};

export const Disabled: Story = {
  args: { disabled: true, name: 'rb-disabled' },
};

export const Invalid: Story = {
  args: { invalid: true, name: 'rb-invalid' },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    name: 'rb-checked-disabled',
  },
};
