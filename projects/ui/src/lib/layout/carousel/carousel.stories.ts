import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiCarouselComponent } from './carousel.component';
import { UiCarouselItemDirective } from './carousel-item.directive';

type StoryArgs = UiCarouselComponent & {
  itemCount: number;
};

const meta: Meta<StoryArgs> = {
  component: UiCarouselComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [UiCarouselItemDirective],
    }),
  ],
  argTypes: {
    itemCount: { control: { type: 'number', min: 1 } },
  },
  args: {
    itemCount: 16,
    gap: '12px',
    minItemWidth: '140px',
  },
  render: ({ itemCount, ...args }) => {
    const items = Array.from({ length: itemCount }, (_, i) => ({
      id: i,
      label: `Hello world ${i}`,
    }));

    return {
      props: { items, args },
      styles: [
        `
        .item {
          background: light-dark(lightblue, steelblue);
          padding: 20px;
        }
      `,
      ],
      template: `
        <ui-carousel ${storybookArgsToTemplate(args)}>
          @for(item of items; track item.id) {
            <div uiCarouselItem class="item">
              {{ item.label }}
            </div>
          }
        </ui-carousel>
      `,
    };
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Default: Story = {};

export const ForceStop: Story = {
  args: { forceStop: true },
};
