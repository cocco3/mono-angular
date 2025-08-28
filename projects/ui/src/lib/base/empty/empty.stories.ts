import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiEmptyComponent } from './empty.component';
import { UiSlotDirective } from '../../layout/slot.directive';
import {
  UiIconComponent,
  type UiIconKind,
  UiIconKinds,
} from '../icon/icon.component';
import { UiButtonComponent } from '../button/button.component';

type EmptyStory = UiEmptyComponent & {
  content?: string;
  image?: UiIconKind;
};

const meta: Meta<EmptyStory> = {
  component: UiEmptyComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [UiIconComponent, UiButtonComponent, UiSlotDirective],
    }),
  ],
  argTypes: {
    image: {
      options: UiIconKinds,
      control: { type: 'select' },
      table: { category: 'Slots', type: { detail: undefined } },
      description: 'Add `[uiSlot="image"]` on any additional image.',
    },
    content: {
      control: { type: 'text' },
      table: { category: 'Slots', type: { detail: undefined } },
      description: 'Add `[uiSlot="content"]` on any additional content.',
    },
  },
  args: {
    title: 'Nothing to see here',
    description: `After you have taken some action, this area will be populated with data.`,
  },
  render: ({ content, image, ...args }) => ({
    props: args,
    template: `
      <ui-empty ${storybookArgsToTemplate(args)}>
        ${
          image
            ? `<ui-icon uiSlot="image" kind="${image}" size="80px" color="var(--text-tertiary)" />`
            : ''
        }
        ${content ? `<div uiSlot="content">${content}</div>` : ''}
      </ui-empty>
    `,
  }),
};

export default meta;
type Story = StoryObj<EmptyStory>;

export const Default: Story = {};

export const WithImage: Story = {
  args: { image: 'calendar' },
};

export const AdditionalContent: Story = {
  args: {
    content:
      '<p><b>Hello world</b> The <i>quick</i> brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p><button ui-button kind="primary" size="large" weight="solid" shape="normal">Add item</button>',
  },
};
