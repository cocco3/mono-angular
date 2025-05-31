import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { UiTooltipComponent } from './tooltip.component';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import {
  UiPopoverDirective,
  type UiPopoverPlacement,
  UiPopoverPlacements,
} from './popover.directive';

type TooltipStory = UiTooltipComponent & {
  content: string;
  offset: number;
  placement: UiPopoverPlacement;
};

const meta: Meta<TooltipStory> = {
  component: UiTooltipComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiPopoverDirective] })],
  argTypes: {
    offset: {
      control: { type: 'number' },
      table: { category: 'uiPopover', type: { detail: undefined } },
    },
    placement: {
      options: Object.keys(UiPopoverPlacements),
      control: { type: 'select' },
      table: { category: 'uiPopover', type: { detail: undefined } },
    },
  },
  args: {
    content: 'The quick brown fox jumps over the lazy dog.',
    offset: 4,
    placement: 'after-center',
  },

  render: ({ content, offset, placement, ...args }) => ({
    props: args,
    template: `
      <ui-tooltip ${storybookArgsToTemplate(args)}>
        ${content}
      </ui-tooltip>
    `,
  }),
};

export default meta;
type Story = StoryObj<TooltipStory>;

export const Default: Story = {};

export const PopoverClick: Story = {
  render: ({ content, offset, placement, ...args }) => ({
    props: args,
    template: `
      <button
        #tooltipClickAnchor
        (click)="tooltip.togglePopover()"
      >
        click
      </button>
      <ui-tooltip
        ${storybookArgsToTemplate(args)}
        uiPopover
        #tooltip="uiPopover"
        [anchor]="tooltipClickAnchor"
        offset="${offset}"
        [placement]="'${placement}'"
      >
        ${content}
      </ui-tooltip>
    `,
  }),
};

export const PopoverHover: Story = {
  render: ({ content, offset, placement, ...args }) => ({
    props: args,
    template: `
      <button
        #tooltipHoverAnchor
        (mouseenter)="tooltip.showPopover()"
        (mouseleave)="tooltip.hidePopover()"
      >
        hover
      </button>
      <ui-tooltip
        ${storybookArgsToTemplate(args)}
        uiPopover
        #tooltip="uiPopover"
        [anchor]="tooltipHoverAnchor"
        offset="${offset}"
        [placement]="'${placement}'"
      >
        ${content}
      </ui-tooltip>
    `,
  }),
};
