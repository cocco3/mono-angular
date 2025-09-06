import { type Meta, type StoryObj, moduleMetadata } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import {
  UiBadgeComponent,
  UiBadgeKinds,
  UiBadgeCorners,
} from './badge.component';
import {
  UiIconComponent,
  UiIconKinds,
  type UiIconKind,
} from '../icon/icon.component';
import { UiSlotDirective } from '../../layout/slot.directive';

type BadgeStory = UiBadgeComponent & {
  content: string;
  start?: UiIconKind;
  end?: UiIconKind;
};

const meta: Meta<BadgeStory> = {
  component: UiBadgeComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiIconComponent, UiSlotDirective] })],
  argTypes: {
    corners: { options: UiBadgeCorners, control: { type: 'radio' } },
    kind: { options: UiBadgeKinds, control: { type: 'radio' } },
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
    content: 'Label',
    corners: 'rounded',
    kind: 'neutral',
  },
  render: ({ content, start, end, ...args }) => ({
    props: args,
    template: `
      <ui-badge ${storybookArgsToTemplate(args)}>
        ${start ? `<ui-icon kind="${start}" uiSlot='start' />` : ''}
        ${content}
        ${end ? `<ui-icon kind="${end}" uiSlot='end' />` : ''}
      </ui-badge>
    `,
  }),
};

export default meta;

type Story = StoryObj<BadgeStory>;

export const Neutral: Story = {
  args: { kind: 'neutral', content: 'Not started' },
};

export const Negative: Story = {
  args: { kind: 'negative', content: 'Overdue' },
};

export const Warning: Story = {
  args: { kind: 'warning', content: 'Due soon' },
};

export const Positive: Story = {
  args: { kind: 'positive', content: 'Completed' },
};

export const Info: Story = {
  args: { kind: 'info', content: 'Ready' },
};

export const Icons: Story = {
  args: {
    kind: 'neutral',
    content: '2025-Aug-31',
    start: 'calendar',
    end: 'check',
  },
};
