import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiLinkComponent } from './link.component';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../icon/icon.component';
import { UiSlotDirective } from '../../layout/slot/slot.directive';

type StoryArgs = UiLinkComponent & {
  content: string;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<StoryArgs> = {
  component: UiLinkComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiIconComponent, UiSlotDirective] })],
  argTypes: {
    start: {
      options: UiIconKinds,
      control: { type: 'select' },
      table: { category: 'Slots', type: { detail: undefined } },
      description: 'Add `[uiSlot="start"]` on any start element.',
    },
    end: {
      options: UiIconKinds,
      control: { type: 'select' },
      table: { category: 'Slots', type: { detail: undefined } },
      description: 'Add `[uiSlot="end"]` on any end element.',
    },
  },
  render: ({ content, start, end, ...args }) => ({
    props: args,
    template: `
      <a ui-link ${storybookArgsToTemplate(args)} href="#">
        ${start ? `<ui-icon kind="${start}" uiSlot="start" />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" uiSlot="end" />` : ''}
      </a>
    `,
  }),
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  args: { content: 'Link text' },
};

export const Icons: Story = {
  args: {
    content: 'Support',
    start: 'help-circle',
    end: 'chevron-right',
  },
};
