import { type Meta, type StoryObj } from '@storybook/angular';
import { UiLoadingComponent, UiLoadingSizes } from './loading.component';

const meta: Meta<UiLoadingComponent> = {
  component: UiLoadingComponent,
  tags: ['autodocs'],
  argTypes: {
    size: { options: UiLoadingSizes, control: { type: 'radio' } },
  },
  args: {
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<UiLoadingComponent>;

export const Default: Story = {};

export const Label: Story = {
  args: { label: 'Loading…' },
};
