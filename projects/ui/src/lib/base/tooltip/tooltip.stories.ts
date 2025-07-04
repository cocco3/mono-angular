import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { type UiFloatingPlacement, UiFloatingPlacements } from '@cocco3/utils';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';
import { UiTooltipComponent } from './tooltip.component';
import { UiTooltipDirective } from './tooltip.directive';

type TooltipStory = UiTooltipComponent & {
  content: string;
  offset: number;
  placement: UiFloatingPlacement;
};

/**
 * Use with uiTooltip directive.
 */
const meta: Meta<TooltipStory> = {
  component: UiTooltipComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiTooltipDirective] })],
  argTypes: {
    offset: {
      control: { type: 'number' },
      table: { category: 'uiTooltip', type: { detail: undefined } },
    },
    placement: {
      options: Object.keys(UiFloatingPlacements),
      control: { type: 'select' },
      table: { category: 'uiTooltip', type: { detail: undefined } },
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
        (mouseenter)="myTooltip.showTooltip()"
        (mouseleave)="myTooltip.hideTooltip()"
        (touchstart)="myTooltip.toggleTooltip()"
      >
        hover
      </button>
      <ui-tooltip
        ${storybookArgsToTemplate(args)}
        uiTooltip
        #myTooltip="uiTooltip"
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
        (click)="myTooltip.toggleTooltip()"
      >
        click
      </button>
      <ui-tooltip
        ${storybookArgsToTemplate(args)}
        uiTooltip
        #myTooltip="uiTooltip"
        [anchor]="tooltipClickAnchor"
        offset="${offset}"
        [placement]="'${placement}'"
      >
        ${content}
      </ui-tooltip>
    `,
  }),
};
