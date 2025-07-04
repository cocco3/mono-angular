import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { type UiPopoverPlacement, UiPopoverPlacements } from '@cocco3/utils';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiTooltipComponent } from './tooltip.component';
import { UiPopoverDirective } from '../popover.directive';

type TooltipStory = UiTooltipComponent & {
  content: string;
  offset: number;
  placement: UiPopoverPlacement;
};

/**
 * Use with uiPopover directive.
 */
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

export const ShowOnHover: Story = {
  render: ({ content, offset, placement, ...args }) => ({
    props: args,
    template: `
      <button
        #tooltipHoverAnchor
        (mouseenter)="myTooltip1.show()"
        (mouseleave)="myTooltip1.hide()"
        (touchstart)="myTooltip1.toggle()"
      >
        hover
      </button>
      <ui-tooltip
        ${storybookArgsToTemplate(args)}
        uiPopover="tooltip"
        #myTooltip1="uiPopover"
        [anchor]="tooltipHoverAnchor"
        offset="${offset}"
        [placement]="'${placement}'"
      >
        ${content}
      </ui-tooltip>
    `,
  }),
};

export const ToggleOnClick: Story = {
  render: ({ content, offset, placement, ...args }) => ({
    props: args,
    template: `
      <button
        #tooltipClickAnchor
        (click)="myTooltip2.toggle()"
      >
        click
      </button>
      <ui-tooltip
        ${storybookArgsToTemplate(args)}
        uiPopover="tooltip"
        #myTooltip2="uiPopover"
        [anchor]="tooltipClickAnchor"
        offset="${offset}"
        [placement]="'${placement}'"
      >
        ${content}
      </ui-tooltip>
    `,
  }),
};
