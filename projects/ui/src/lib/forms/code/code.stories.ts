import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import {
  UiCodeComponent,
  UiCodeKinds,
  UiCodeTransforms,
} from './code.component';

const meta: Meta<UiCodeComponent> = {
  component: UiCodeComponent,
  tags: ['autodocs'],
  argTypes: {
    charCount: { control: 'number' },
    kind: { options: UiCodeKinds, control: { type: 'radio' } },
    transform: { options: UiCodeTransforms, control: { type: 'radio' } },
  },
  args: {
    kind: 'alphanumeric',
    charCount: 6,
  },
  render: (args) => ({
    props: args,
    template: `<input ui-code ${storybookArgsToTemplate(args)} />`,
  }),
};

export default meta;

type Story = StoryObj<UiCodeComponent>;

export const Default: Story = {};
