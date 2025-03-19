import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiSelectComponent } from './select.component';

type SelectStory = UiSelectComponent & {
  disabled?: boolean;
  name?: string;
  value?: string;
};

/**
 * Use with [form-field](/story/forms-form-field--select) component
 */
const meta: Meta<SelectStory> = {
  component: UiSelectComponent,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=3281-377673&t=zIQCmerxWCcvw2xE-0',
    },
  },

  render: (args) => ({
    props: args,
    template: `
      <select ui-select ${storybookArgsToTemplate(args)}>
        <option>Hello world</option>
        <option selected>Lorem ipsum</option>
        <option>Foo bar</option>
      </select>
    `,
  }),
};

export default meta;

type Story = StoryObj<SelectStory>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
