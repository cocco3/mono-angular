import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import {
  UiOneTimeCodeComponent,
  UiOneTimeCodeKinds,
  UiOneTimeCodeTransforms,
} from './one-time-code.component';

const meta: Meta<UiOneTimeCodeComponent> = {
  component: UiOneTimeCodeComponent,
  tags: ['autodocs'],
  argTypes: {
    charCount: { control: 'number' },
    kind: { options: UiOneTimeCodeKinds, control: { type: 'radio' } },
    transform: { options: UiOneTimeCodeTransforms, control: { type: 'radio' } },
  },
  args: {
    kind: 'alphanumeric',
    charCount: 6,
    transform: 'none',
  },
  render: (args) => ({
    props: args,
    template: `<input ui-code ${storybookArgsToTemplate(args)} />`,
  }),
};

export default meta;

type Story = StoryObj<UiOneTimeCodeComponent>;

export const Default: Story = {};
