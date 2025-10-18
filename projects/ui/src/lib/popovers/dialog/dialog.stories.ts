import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { storybookArgsToTemplate } from '@cocco3/utils';
import { SbDialogDemoComponent } from './sb-dialog-demo';
import { UiDialogComponent } from './dialog.component';
import {
  UiButtonComponent,
  UiButtonKinds,
  type UiButtonKind,
} from '../../base/button/button.component';
import { UiSlotDirective } from '../../layout/slot/slot.directive';
import { UiDialogButtonComponent } from './dialog-button.component';

type DialogStory = UiDialogComponent & {
  content?: string | undefined;
  primaryButtonKind: UiButtonKind;
};

const meta: Meta<DialogStory> = {
  component: UiDialogComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        SbDialogDemoComponent,
        UiButtonComponent,
        UiDialogButtonComponent,
        UiSlotDirective,
      ],
    }),
  ],
  argTypes: {
    close: { control: { disable: true } },
    show: { control: { disable: true } },
    showModal: { control: { disable: true } },
    afterClose: { control: { disable: true } },
    primaryButtonKind: { options: UiButtonKinds, control: { type: 'radio' } },
    el: {
      control: { disable: true },
      table: {
        type: { summary: 'ElementRef<HTMLDialogElement>' },
        defaultValue: { summary: '-' },
      },
    },
  },
  args: {
    primaryButtonKind: 'primary',
  },
  parameters: {
    layout: 'fullscreen',
  },

  render: ({ content, primaryButtonKind, ...args }) => ({
    props: args,
    template: `
      <sb-dialog-demo
        (showDialogClicked)="dialog.show()"
        (showModalClicked)="dialog.showModal()"
      >
        <dialog #dialog ui-dialog ${storybookArgsToTemplate(args)}>
          ${content || ''}
          <button ui-dialog-button="cancel" uiSlot="cancel">
            Cancel
          </button>
          <button ui-dialog-button="submit" uiSlot="submit" type="submit" kind="${primaryButtonKind}">
            Save
          </button>
        </dialog>
      </sb-dialog-demo>
    `,
  }),
};

export default meta;

type Story = StoryObj<DialogStory>;

export const Default: Story = {
  args: {
    heading: 'Confirm sign up',
    description: 'You will not be charged.',
    content:
      '<div>This section can include anything including <a href="https://google.com">links</a>.</div>',
  },
};

export const Destructive: Story = {
  args: {
    heading: 'Delete item',
    description:
      'Are you sure you want to delete this item? This action cannot be undone.',
    primaryButtonKind: 'destructive',
  },
};

export const LongContent: Story = {
  args: {
    heading: 'Confirm sign up',
    description: 'You will not be charged.',
    content: `<div style="min-height: 110vh; background: light-dark(lightblue, darkslateblue);">
        Long content. Dialog will scroll.
      </div>`,
  },
};

export const CustomButtons: Story = {
  render: ({ content, primaryButtonKind, ...args }) => ({
    props: args,
    styles: [
      `
      .btn {
        background: light-dark(lightblue, steelblue);
        border: none;
        padding: 8px;
      }
      `,
    ],
    template: `
      <sb-dialog-demo
        (showDialogClicked)="dialog.show()"
        (showModalClicked)="dialog.showModal()"
      >
        <dialog #dialog ui-dialog ${storybookArgsToTemplate(args)}>
          ${content || ''}
          <button (click)="dialog.close()" class="btn">
            Close the dialog
          </button>
        </dialog>
      </sb-dialog-demo>
    `,
  }),
};
