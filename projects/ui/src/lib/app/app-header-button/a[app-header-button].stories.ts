import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiAppHeaderAnchorComponent } from './app-header-button.component';
import { UiSlotDirective } from '../../layout/slot.directive';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../../base/icon/icon.component';

type AppHeaderAnchorStory = UiAppHeaderAnchorComponent & {
  content: string;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<AppHeaderAnchorStory> = {
  title: 'app/app-header/a[ui-app-header-button]',
  component: UiAppHeaderAnchorComponent,
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
    props: {
      ...args,
      click: action('click'),
    },
    template: `
      <a ui-app-header-button ${storybookArgsToTemplate(args)} href="/" target="_blank">
        ${start ? `<ui-icon kind="${start}" size="20px" uiSlot='start' />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" size="20px" uiSlot='end' />` : ''}
      </a>
    `,
  }),
};

export default meta;
type Story = StoryObj<AppHeaderAnchorStory>;

export const Default: Story = {
  args: { start: 'countdown', content: 'CountdownApp' },
};
