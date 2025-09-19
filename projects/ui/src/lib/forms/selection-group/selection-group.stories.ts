import { type Meta, type StoryObj } from '@storybook/angular';
import {
  UiSelectionGroupComponent,
  UiSelectionGroupDirections,
} from './selection-group.component';

/**
 * A group of [radio buttons](/docs/forms-radio--docs)
 * or [checkboxes](/docs/forms-checkbox--docs),
 * used to select one or more options from a list.
 */
const meta: Meta<UiSelectionGroupComponent> = {
  component: UiSelectionGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    direction: { options: UiSelectionGroupDirections, control: 'radio' },
    registerOnChange: { table: { disable: true } },
    registerOnTouched: { table: { disable: true } },
    setDisabledState: { table: { disable: true } },
    writeValue: { table: { disable: true } },
  },
  args: {
    direction: 'column',
  },
};

export default meta;

type Story = StoryObj<UiSelectionGroupComponent>;

export const Checkbox: Story = {
  args: {
    kind: 'checkbox',
    groupName: 'newsletter-topics',
    label: 'Subscribe to topics',
    options: [
      {
        label: 'Product Updates',
        value: 'product',
        description: 'Get the latest news about product features and releases.',
      },
      {
        label: 'Events & Webinars',
        value: 'events',
        description: 'Be notified about upcoming events and webinars.',
      },
      {
        label: 'Promotions',
        value: 'promotions',
        description: 'Receive special offers and discounts.',
      },
    ],
  },
};

export const Radio: Story = {
  args: {
    kind: 'radio',
    groupName: 'shipping-method',
    label: 'Select a shipping method',
    description: 'Your total shipping cost will be calculated at checkout.',
    options: [
      {
        label: 'Standard Shipping',
        value: 'standard',
        description: 'Delivery in 5-7 business days',
      },
      {
        label: 'Express Shipping',
        value: 'express',
        description: 'Delivery in 2-3 business days',
      },
      {
        label: 'Overnight Shipping',
        value: 'overnight',
        description: 'Next business day delivery',
      },
    ],
  },
};

export const Error: Story = {
  args: {
    ...Radio.args,
    error: 'Please select a shipping method.',
  },
};

export const Direction: Story = {
  args: {
    kind: 'radio',
    groupName: 'theme',
    label: 'Select a theme',
    direction: 'row',
    options: [
      {
        label: 'Auto',
        value: 'auto',
      },
      {
        label: 'Light',
        value: 'light',
      },
      {
        label: 'Dark',
        value: 'dark',
      },
    ],
  },
};
