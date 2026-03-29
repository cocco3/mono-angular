import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiDisclosureComponent } from './disclosure.component';
import { UiDisclosureTriggerComponent } from './disclosure-trigger.component';

const styles = `
  .demo_container {
    border: 1px solid var(--border-primary);
    border-radius: 8px;
    overflow: hidden;
  }

  .demo_details {
    & + & {
      border-top: 1px solid var(--border-primary);
    }
  }

  .demo_summary {
    font: 500 var(--type-display-xs);
    padding: 8px 12px;
    cursor: pointer;
  }

  .demo_content {
    border-top: 1px solid var(--border-secondary);
    font: 400 var(--type-text-md);
    padding: 12px;
    text-wrap: pretty;
  }
`;

type Story = StoryObj & {
  name?: string;
};

/**
 * Compose multiple disclosures together, and use the `name` attribute for
 * accordion behavior.
 */
export default {
  title: 'base/disclosure/multiple',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [UiDisclosureComponent, UiDisclosureTriggerComponent],
    }),
  ],
  argTypes: {
    name: {
      control: { type: 'text' },
      table: { category: 'DOM Attributes', type: { detail: undefined } },
      description:
        'Connect multiple `<details>` elements. Only one can be open at a time.',
    },
  },
  render: ({ name }) => ({
    props: {
      triggerClick: action('trigger-click'),
    },
    template: `
      <style>${styles}</style>

      <div class="demo_container">
        <details class="demo_details" ui-disclosure ${storybookArgsToTemplate({ name })}>
          <summary class="demo_summary" ui-disclosure-trigger>Item 1</summary>
          <div class="demo_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </details>

        <details class="demo_details" ui-disclosure ${storybookArgsToTemplate({ name })}>
          <summary class="demo_summary" ui-disclosure-trigger>Item 2</summary>
          <div class="demo_content">
            Phasellus euismod dictum mauris a efficitur.
          </div>
        </details>

        <details class="demo_details" ui-disclosure ${storybookArgsToTemplate({ name })}>
          <summary class="demo_summary" ui-disclosure-trigger>Item 3</summary>
          <div class="demo_content">
            Ut sit amet purus quis metus mattis pharetra.
          </div>
        </details>
      </div>
    `,
  }),
} as Meta;

/**
 * You have complete control over the styles so you can group
 * multiple disclosures together.
 */
export const Multiple: Story = {};

/**
 * Accordion behavior is achieved by composing multiple `ui-disclosure`
 * instances with the same `name` attribute.
 *
 * Only one disclosure can be open at a time within the same group.
 */
export const Accordion: Story = {
  args: { name: 'accordion' },
};

/**
 * When grouping with a `name`, only one disclosure will be open at a time.
 *
 * You can set the `open` attribute on any disclosure to have it open by default.
 */
export const DefaultOpen: Story = {
  args: {
    name: 'accordion-default-open',
  },
  render: ({ name }) => ({
    template: `
      <style>${styles}</style>

      <div class="demo_container">
        <details class="demo_details" ui-disclosure name="${name}">
          <summary class="demo_summary" ui-disclosure-trigger>Item 1</summary>
          <div class="demo_content">
            Closed by default.
          </div>
        </details>

        <details class="demo_details" ui-disclosure name="${name}" open>
          <summary class="demo_summary" ui-disclosure-trigger>Item 2 (default open)</summary>
          <div class="demo_content">
            This item is open by default.
          </div>
        </details>

        <details class="demo_details" ui-disclosure name="${name}">
          <summary class="demo_summary" ui-disclosure-trigger>Item 3</summary>
          <div class="demo_content">
            Closed by default.
          </div>
        </details>
      </div>
    `,
  }),
};
