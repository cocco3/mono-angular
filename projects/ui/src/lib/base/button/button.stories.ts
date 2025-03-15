import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import {
  UiButtonComponent,
  UiButtonKinds,
  UiButtonSizes,
} from './button.component';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../icon/icon.component';
import { UiSlotDirective } from '../../layout/slot.directive';

type ButtonStory = UiButtonComponent & {
  content: string;
  disabled?: boolean;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<ButtonStory> = {
  component: UiButtonComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiIconComponent, UiSlotDirective] })],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    kind: { options: UiButtonKinds, control: { type: 'radio' } },
    size: { options: UiButtonSizes, control: { type: 'radio' } },
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
  args: {
    size: 'medium',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/T06aUcOseXpSG6HzgjrlLP/%E2%9D%96-PREVIEW-%E2%9D%96-Untitled-UI-%E2%80%93-PRO-VARIABLES-(v6.0)?node-id=3287-427074&t=0o1DVAmevCvWHWdL-0',
    },
  },
  render: ({ content, start, end, ...args }) => ({
    props: {
      ...args,
      click: action('click'),
    },
    template: `
      <button ui-button ${storybookArgsToTemplate(args)} (click)="click($event)">
        ${start ? `<ui-icon kind="${start}" uiSlot='start' />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" uiSlot='end' />` : ''}
      </button>
    `,
  }),
};

export default meta;
type Story = StoryObj<ButtonStory>;

export const Primary: Story = {
  args: { kind: 'primary', size: 'medium', content: 'Save' },
};

export const Secondary: Story = {
  args: { kind: 'secondary', size: 'medium', content: 'View item' },
};

export const Tertiary: Story = {
  args: { kind: 'tertiary', size: 'medium', content: 'Cancel' },
};

export const Destructive: Story = {
  args: { kind: 'destructive', size: 'medium', content: 'Delete' },
};

export const Disabled: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    disabled: true,
    content: 'Save',
  },
};

export const Icons: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'Support',
    start: 'help-circle',
    end: 'link-external',
  },
};
