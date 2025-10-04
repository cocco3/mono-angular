import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiMenuItemAnchorComponent } from './menuitem.component';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../../base/icon/icon.component';
import { UiSlotDirective } from '../../layout/slot.directive';

type MenuItemStory = UiMenuItemAnchorComponent & {
  content: string;
  disabled?: boolean;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<MenuItemStory> = {
  title: 'popovers/menu/a[menuitem]',
  component: UiMenuItemAnchorComponent,
  subcomponents: { UiIconComponent },
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiIconComponent, UiSlotDirective] })],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
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
      <a ui-menuitem ${storybookArgsToTemplate(args)} href="/" target="_blank">
        ${start ? `<ui-icon kind="${start}" uiSlot="start" />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" uiSlot="end" />` : ''}
      </a>
    `,
  }),
};

export default meta;

type Story = StoryObj<MenuItemStory>;

export const Default: Story = {
  args: {
    content: 'Hello World',
  },
};

export const Description: Story = {
  args: {
    description: 'The quick brown fox jumps over the lazy dog.',
    content: 'Hello World',
  },
};

export const Icons: Story = {
  args: {
    description: 'The quick brown fox jumps over the lazy dog.',
    content: 'Hello World',
    start: 'user',
    end: 'chevron-right',
  },
};
