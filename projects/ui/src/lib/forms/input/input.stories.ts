import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiInputComponent, UiInputTypes } from './input.component';

type InputStory = UiInputComponent & {
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  type?: string;
  value?: string;

  autocapitalize?: string;
  inputmode?: string;
  maxlength?: string;
};

/**
 * Use with [form-field](/story/forms-form-field--input) component
 */
const meta: Meta<InputStory> = {
  component: UiInputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: { options: UiInputTypes, control: { type: 'radio' } },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
    autocapitalize: { control: { type: 'text' } },
    inputmode: { control: { type: 'text' } },
    maxlength: { control: { type: 'text' } },
    el: {
      control: { disable: true },
      table: {
        type: { summary: 'ElementRef<HTMLInputElement>' },
        defaultValue: { summary: '-' },
      },
    },
  },
  args: {
    type: 'text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=1090-57817&t=zIQCmerxWCcvw2xE-0',
    },
  },
  render: ({ inputmode, maxlength, ...args }) => ({
    props: args,
    template: `
      <input
        ui-input
        ${storybookArgsToTemplate(args)}
        ${inputmode ? `[attr.inputmode]="'${inputmode}'"` : ''}
        ${maxlength ? `[attr.maxlength]="'${maxlength}'"` : ''}
      />
    `,
  }),
};

export default meta;

type Story = StoryObj<InputStory>;

export const Default: Story = {
  args: { value: 'Hello world' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true },
};

export const Readonly: Story = {
  args: { value: 'Hello world', readonly: true },
};

export const Invalid: Story = {
  args: { value: 'Hello world', invalid: true },
};

export const Password: Story = {
  args: { value: 'Hello world', type: 'password' },
};

export const Email: Story = {
  args: {
    value: 'hello@world.com',
    type: 'email',
    autocapitalize: 'off',
    inputmode: 'email',
  },
};

/**
 * Uses the default browser date picker.
 */
export const Date: Story = {
  args: { value: '2025-01-19', type: 'date' },
};

/**
 * Uses the default browser time picker.
 */
export const Time: Story = {
  args: { value: '10:23', type: 'time' },
};

/**
 * Example numeric code. Consider using the [one-time-code](/docs/forms-one-time-code--docs)
 * component for MFA and one time passcodes.
 */
export const Code: Story = {
  args: {
    value: '123456',
    type: 'text',
    maxlength: '6',
    inputmode: 'numeric',
  },
};
