import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiCheckboxComponent } from './checkbox.component';

type CheckboxStory = UiCheckboxComponent & {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
};

/**
 * For an individual checkbox, use with [form-field](/story/forms-form-field--checkbox) component.
 *
 * For a group of checkboxes, use [selection-group](/story/forms-selection-group--checkbox) component.
 */
const meta: Meta<CheckboxStory> = {
  component: UiCheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    elementRef: {
      control: { disable: true },
      table: {
        type: { summary: 'ElementRef<HTMLInputElement>' },
        defaultValue: { summary: '-' },
      },
    },
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
      <input ui-checkbox ${storybookArgsToTemplate(args)} />
    `,
  }),
};

export default meta;

type Story = StoryObj<CheckboxStory>;

export const Default: Story = {
  args: { name: 'cb-default' },
};

export const Checked: Story = {
  args: { checked: true, name: 'cb-checked' },
};

export const Disabled: Story = {
  args: { disabled: true, name: 'cb-disabled' },
};

export const Invalid: Story = {
  args: { invalid: true, name: 'cb-invalid' },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    name: 'cb-checked-disabled',
  },
};
