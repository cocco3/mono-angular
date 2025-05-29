import { type Meta, type StoryObj } from '@storybook/angular';
import { UiTooltipComponent } from './tooltip.component';
import { storybookArgsToTemplate } from '../../utils/storybookArgsToTemplate';

type TooltipStory = UiTooltipComponent & {
  content: string;
};

const meta: Meta<TooltipStory> = {
  component: UiTooltipComponent,
  tags: ['autodocs'],

  render: ({ content, ...args }) => ({
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

export const Default: Story = {
  args: { content: 'The quick brown fox jumps over the lazy dog.' },
};
