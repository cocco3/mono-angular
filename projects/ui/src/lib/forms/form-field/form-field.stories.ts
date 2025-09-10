import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiFormFieldComponent } from './form-field.component';
import { UiInputComponent } from '../input/input.component';
import { UiTextareaComponent } from '../textarea/textarea.component';
import { UiSelectComponent } from '../select/select.component';
import { UiCheckboxComponent } from '../checkbox/checkbox.component';
import { UiRadioComponent } from '../radio/radio.component';

const meta: Meta<UiFormFieldComponent> = {
  component: UiFormFieldComponent,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=1090-57817&t=pEQqSBVrX0oSsXkd-0',
    },
  },
};

export default meta;

type Story = StoryObj<UiFormFieldComponent>;

/**
 * Use with [input](/docs/forms-input--docs) component
 */
export const Input: Story = {
  decorators: [moduleMetadata({ imports: [UiInputComponent] })],
  args: {
    label: 'Email',
    description: 'Some description or hint to help the user.',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-form-field ${storybookArgsToTemplate(args)}>
        <input ui-input type="text" />
      </ui-form-field>
    `,
  }),
};

/**
 * Use with [textarea](/docs/forms-textarea--docs) component
 */
export const Textarea: Story = {
  decorators: [moduleMetadata({ imports: [UiTextareaComponent] })],
  args: {
    label: 'Feedback',
    description: 'Feedback is shared anonymously.',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-form-field ${storybookArgsToTemplate(args)}>
        <textarea ui-textarea autosize></textarea>
      </ui-form-field>
    `,
  }),
};

/**
 * Use with [select](/docs/forms-select--docs) component
 */
export const Select: Story = {
  decorators: [moduleMetadata({ imports: [UiSelectComponent] })],
  args: {
    label: 'Color',
    description: 'Some description or hint to help the user.',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-form-field ${storybookArgsToTemplate(args)}>
        <select ui-select>
          <option>FireBrick</option>
          <option selected>DeepSkyBlue</option>
          <option>MediumSeaGreen</option>
        </select>
      </ui-form-field>
    `,
  }),
};

/**
 * Use with [checkbox](/docs/forms-checkbox--docs) component
 */
export const Checkbox: Story = {
  decorators: [moduleMetadata({ imports: [UiCheckboxComponent] })],
  args: {
    label: 'Remember me',
    description: 'Save my login details for next time.',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-form-field ${storybookArgsToTemplate(args)}>
        <input ui-checkbox />
      </ui-form-field>
    `,
  }),
};

/**
 * Use with [radio](/docs/forms-radio--docs) component
 */
export const Radio: Story = {
  decorators: [moduleMetadata({ imports: [UiRadioComponent] })],
  args: {
    label: 'Remember me',
    description: 'Save my login details for next time.',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-form-field ${storybookArgsToTemplate(args)}>
        <input ui-radio />
      </ui-form-field>
    `,
  }),
};

export const Error: Story = {
  decorators: [moduleMetadata({ imports: [UiInputComponent] })],
  args: {
    label: 'Email',
    description: 'Some description or hint to help the user.',
    error: 'Email is required.',
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-form-field ${storybookArgsToTemplate(args)}>
        <input ui-input type="text" />
      </ui-form-field>
    `,
  }),
};
