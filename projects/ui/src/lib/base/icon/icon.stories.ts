import type { Meta, StoryObj } from '@storybook/angular';
import { UiIconComponent, UiIconKinds } from './icon.component';

/**
 * See all icons in the [Icons page](/docs/foundations-icons--docs).
 */
const meta: Meta<UiIconComponent> = {
  component: UiIconComponent,
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'color' } },
    kind: { options: UiIconKinds, control: { type: 'select' } },
    size: { control: { type: 'text' } },
  },
  args: {
    size: '24px',
  },
};

export default meta;
type Story = StoryObj<UiIconComponent>;

export const Default: Story = {
  args: { kind: 'arrow-down' },
};
