import { type Meta, type StoryObj } from '@storybook/angular';
import {
  UiProgressBarComponent,
  UiProgressBarKinds,
  UiProgressBarShapes,
  UiProgressBarSizes,
} from './progress-bar.component';

const meta: Meta<UiProgressBarComponent> = {
  component: UiProgressBarComponent,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: UiProgressBarKinds, control: { type: 'radio' } },
    shape: { options: UiProgressBarShapes, control: { type: 'radio' } },
    size: { options: UiProgressBarSizes, control: { type: 'radio' } },
    segments: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    value: { control: { type: 'number' } },
  },
  args: {
    kind: 'neutral',
    shape: 'round',
    size: 'medium',
    segments: 1,
    max: 100,
    value: 52,
  },
};

export default meta;

type Story = StoryObj<UiProgressBarComponent>;

export const Default: Story = {};

export const Segments: Story = {
  args: { segments: 5 },
};

export const Kind: Story = {
  args: { kind: 'success' },
};

/** Optionally change the maximum to fit your use case. */
export const Max: Story = {
  args: { max: 20, value: 7 },
};

export const Shape: Story = {
  args: { shape: 'square' },
};

export const Size: Story = {
  args: { size: 'large' },
};
