import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { action } from 'storybook/actions';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { UiDisclosureComponent } from './disclosure.component';
import { UiDisclosureTriggerComponent } from './disclosure-trigger.component';

type DisclosureStory = UiDisclosureComponent & {
  content: string;
  summary: string;
  name?: string;
  open?: boolean;
};

const meta: Meta<DisclosureStory> = {
  component: UiDisclosureComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [UiDisclosureTriggerComponent] })],
  argTypes: {
    name: {
      control: { type: 'text' },
      table: { category: 'DOM Attributes', type: { detail: undefined } },
      description:
        'Connect multiple `<details>` elements. Only one can be open at a time.',
    },
    open: {
      control: { type: 'boolean' },
      table: { category: 'DOM Attributes', type: { detail: undefined } },
      description: 'Are contents currently visible.',
    },
    expand: { control: { disable: true } },
    collapse: { control: { disable: true } },
  },
  args: {
    summary: 'Hello world foo bar',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  render: ({ content, summary, ...args }) => ({
    props: {
      ...args,
      triggerClick: action('trigger-click'),
    },
    template: `
      <details ui-disclosure ${storybookArgsToTemplate(args)}>
        <summary ui-disclosure-trigger (click)="triggerClick($event)">
          ${summary}
        </summary>
        ${content}
      </details>
    `,
  }),
};

export default meta;
type Story = StoryObj<DisclosureStory>;

/**
 * An unstyled disclosure using an opinionated `<summary ui-disclosure-trigger />`.
 * If you don't like the arrow, you can always supply your own.
 */
export const Default: Story = {};

export const Open: Story = {
  args: { open: true },
};

export const LongSummary: Story = {
  args: {
    summary:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
  },
};

export const Styled: Story = {
  render: ({ content, summary, ...args }) => ({
    props: {
      ...args,
      triggerClick: action('trigger-click'),
    },
    template: `
      <style>
        .demo_details {
          border: 1px solid var(--border-primary);
          border-radius: 8px;
        }
        .demo_summary {
          font: 500 var(--type-display-xs);
          padding: 4px 8px;
        }
        .demo_content {
          border-top: 1px solid var(--border-secondary);
          font: 400 var(--type-text-md);
          padding: 8px 12px;
          text-wrap: pretty;
        }
      </style>

      <details
        class="demo_details"
        ui-disclosure
        ${storybookArgsToTemplate(args)}
      >
        <summary
          class="demo_summary"
          ui-disclosure-trigger
           (click)="triggerClick($event)"
        >
          ${summary}
        </summary>
        <div class="demo_content">
          ${content}
        </div>
      </details>
    `,
  }),
};

export const CustomSummary: Story = {
  render: ({ content, summary, ...args }) => ({
    props: {
      ...args,
      triggerClick: action('trigger-click'),
    },
    template: `
      <style>
        .demo_summary {
          font: 500 var(--type-display-xs);
          list-style: none;
          padding: 4px 8px;
          user-select: none;

          &::before {
            content: '+';
            display: inline-block;
            width: 16px;
          }

          details[open] &::before {
            content: '-';
          }
        }
      </style>

      <details ui-disclosure ${storybookArgsToTemplate(args)}>
        <summary class="demo_summary" (click)="triggerClick($event)">
          ${summary}
        </summary>
        ${content}
      </details>
    `,
  }),
};
