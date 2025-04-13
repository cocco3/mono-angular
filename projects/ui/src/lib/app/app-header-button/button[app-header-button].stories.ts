import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiAppHeaderButtonComponent } from './app-header-button.component';
import { UiSlotDirective } from '../../layout/slot.directive';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../../base/icon/icon.component';

type AppHeaderButtonStory = UiAppHeaderButtonComponent & {
  content: string;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<AppHeaderButtonStory> = {
  title: 'app/app-header/button[ui-app-header-button]',
  component: UiAppHeaderButtonComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiIconComponent, UiSlotDirective] })],
  argTypes: {
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
      <button ui-app-header-button ${storybookArgsToTemplate(args)} (click)="click($event)">
        ${start ? `<ui-icon kind="${start}" size="20px" uiSlot='start' />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" size="20px" uiSlot='end' />` : ''}
      </button>
    `,
  }),
};

export default meta;
type Story = StoryObj<AppHeaderButtonStory>;

export const Default: Story = {
  args: { start: 'countdown', content: 'CountdownApp' },
};
