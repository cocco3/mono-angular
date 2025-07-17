import { type Meta, type StoryObj } from '@storybook/angular';
import { CountdownComponent, CountdownFormats } from './countdown.component';

const meta: Meta<CountdownComponent> = {
  title: 'app/countdown',
  component: CountdownComponent,
  tags: ['autodocs'],
  argTypes: {
    clicked: { control: { disable: true } },
    date: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    format: { options: CountdownFormats, control: { type: 'radio' } },
  },
  args: {
    date: '2025-09-02T19:26:55.086',
    format: 'days',
    name: '🎉 Birthday party',
  },
};

export default meta;

type Story = StoryObj<CountdownComponent>;

export const Default: Story = {};

export const Details: Story = {
  args: {
    format: 'detailed',
  },
};

export const DateOnly: Story = {
  args: {
    date: '2025-12-02',
  },
};

export const Past: Story = {
  args: {
    date: '2025-05-02T19:26:55.086',
  },
};
