import { type Meta, type StoryObj } from '@storybook/angular';
import {
  UiLoadingComponent,
  UiLoadingSizes,
  UiLoadingDirections,
} from './loading.component';

const meta: Meta<UiLoadingComponent> = {
  component: UiLoadingComponent,
  tags: ['autodocs'],
  argTypes: {
    dir: { options: UiLoadingDirections, control: { type: 'radio' } },
    size: { options: UiLoadingSizes, control: { type: 'radio' } },
  },
  args: {
    dir: 'column',
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<UiLoadingComponent>;

export const Default: Story = {};

export const Label: Story = {
  args: { label: 'Loading' },
};

export const Direction: Story = {
  args: { label: 'Loading', dir: 'row' },
};
