import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiMenuItemButtonComponent } from './menuitem.component';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../../base/icon/icon.component';
import { UiSlotDirective } from '../../layout/slot.directive';

type MenuItemStory = UiMenuItemButtonComponent & {
  content: string;
  disabled?: boolean;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<MenuItemStory> = {
  title: 'popovers/menu/button[menuitem]',
  component: UiMenuItemButtonComponent,
  subcomponents: { UiIconComponent },
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiIconComponent, UiSlotDirective] })],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    start: {
      options: UiIconKinds,
      control: { type: 'select' },
      table: { category: 'Slots', type: { detail: undefined } },
      description: `uiSlot='start'`,
    },
    end: {
      options: UiIconKinds,
      control: { type: 'select' },
      table: { category: 'Slots', type: { detail: undefined } },
      description: `uiSlot='end'`,
    },
  },

  render: ({ content, start, end, ...args }) => ({
    props: {
      ...args,
      click: action('click'),
    },
    template: `
      <button ui-menuitem ${storybookArgsToTemplate(args)} (click)="click($event)">
        ${start ? `<ui-icon kind="${start}" uiSlot="start" />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" uiSlot="end" />` : ''}
      </button>
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

export const Disabled: Story = {
  args: {
    description: 'The quick brown fox jumps over the lazy dog.',
    content: 'Hello World',
    start: 'user',
    end: 'chevron-right',
    disabled: true,
  },
};
