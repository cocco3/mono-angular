import { type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import {
  UiItemGridComponent,
  UiItemGridRepeatOptions,
} from './item-grid.component';

type ItemGridStory = UiItemGridComponent & {
  itemCount: number;
};

const meta: Meta<ItemGridStory> = {
  component: UiItemGridComponent,
  tags: ['autodocs'],
  argTypes: {
    itemCount: { control: { type: 'number', min: 1 } },
    repeatCount: {
      options: UiItemGridRepeatOptions,
      control: { type: 'radio' },
    },
  },
  args: {
    itemCount: 2,
    repeatCount: 'auto-fill',
  },
  render: ({ itemCount, ...args }) => {
    const items = Array.from({ length: itemCount }, (_, i) => ({
      id: i,
      label: `Hello world ${i}`,
    }));

    return {
      props: { items, args },
      template: `
        <ui-item-grid ${storybookArgsToTemplate(args)}>
          @for(item of items; track item.id) {
            <div style="background: var(--bg-brand-secondary); padding: 20px;">
              {{ item.label }}
            </div>
          }
        </ui-item-grid>
      `,
    };
  },
};

export default meta;

type Story = StoryObj<ItemGridStory>;

export const AutoFill: Story = {
  args: { gap: '12px', minItemWidth: '140px' },
};

export const AutoFit: Story = {
  args: { gap: '12px', minItemWidth: '140px', repeatCount: 'auto-fit' },
};
