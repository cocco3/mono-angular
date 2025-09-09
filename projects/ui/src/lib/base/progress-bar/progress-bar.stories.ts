import { type Meta, type StoryObj } from '@storybook/angular';
import {
  UiProgressBarComponent,
  UiProgressBarKinds,
  UiProgressBarCorners,
  UiProgressBarSizes,
} from './progress-bar.component';

const meta: Meta<UiProgressBarComponent> = {
  component: UiProgressBarComponent,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: UiProgressBarKinds, control: { type: 'radio' } },
    corners: { options: UiProgressBarCorners, control: { type: 'radio' } },
    size: { options: UiProgressBarSizes, control: { type: 'radio' } },
    segments: { control: { type: 'number', min: 1 } },
    max: { control: { type: 'number', min: 1 } },
    value: { control: { type: 'number' } },
  },
  args: {
    kind: 'neutral',
    corners: 'rounded',
    size: 'medium',
    segments: 1,
    max: 100,
    value: 52,
  },
};

export default meta;

type Story = StoryObj<UiProgressBarComponent>;

export const Default: Story = {};

export const Kind: Story = {
  args: { kind: 'positive' },
};

/** Optionally change the maximum to fit your use case. */
export const Max: Story = {
  args: { max: 20, value: 7 },
};

export const Corners: Story = {
  args: { corners: 'sharp' },
};

export const Size: Story = {
  args: { size: 'large' },
};

export const Segments: Story = {
  args: { segments: 5 },
};

export const Indeterminate: Story = {
  args: { value: undefined },
};

/**
 * Set segments and max to the same value for a progress stepper.
 */
export const Stepper: Story = {
  args: { segments: 10, max: 10, value: 7 },
};
