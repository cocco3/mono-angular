import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiTextareaComponent } from './textarea.component';

type TextareaStory = UiTextareaComponent & {
  disabled?: boolean;
  name?: string;
  value?: string;
};

/**
 * Use with [form-field](/story/forms-form-field--textarea) component
 */
const meta: Meta<TextareaStory> = {
  component: UiTextareaComponent,
  tags: ['autodocs'],
  argTypes: {
    autosize: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  args: {
    value: `More it show yet arrange now, the for afforded everything than many acknowledge his plan objects including tones at on because for function.`,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/YbdR1kLiOU262EEicORFYh/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v7.0)?node-id=1238-278&t=zIQCmerxWCcvw2xE-0',
    },
  },

  render: (args) => ({
    props: args,
    template: `<textarea ui-textarea ${storybookArgsToTemplate(args)}></textarea>`,
  }),
};

export default meta;

type Story = StoryObj<TextareaStory>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

/**
 * Uses CSS `field-sizing` in browsers that support it.
 * If not, uses input event handler to set the height.
 */
export const AutoSize: Story = {
  args: { autosize: true },
};
