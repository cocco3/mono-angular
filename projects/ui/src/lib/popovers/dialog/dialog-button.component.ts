import {
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';
import {
  type UiButtonShape,
  type UiButtonKind,
  type UiButtonWeight,
} from '../../base/button/button.component';
import { DialogContext } from './dialog-context';

export const UiDialogButtonVariants = ['cancel', 'submit'] as const;
export type UiDialogButtonVariant = (typeof UiDialogButtonVariants)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
    '[attr.type]': 'attrType()',
    '(click)': 'handleClick()',
  },
  selector: 'button[ui-dialog-button]',
  styleUrl: '../../base/button/button.css',
  templateUrl: '../../base/button/button.html',
})
export class UiDialogButtonComponent {
  private readonly context = inject(DialogContext);
  private readonly el: ElementRef<HTMLButtonElement> = inject(
    ElementRef<HTMLButtonElement>
  );

  variant = input.required<UiDialogButtonVariant>({
    alias: 'ui-dialog-button',
  });

  /** only valid for variant="submit" */
  kind = input<UiButtonKind>('primary');
  loading = input<boolean>(false);

  /** default type to 'button' */
  protected attrType = computed(() => {
    return this.el.nativeElement.getAttribute('type') || 'button';
  });

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);

  protected shape = signal<UiButtonShape>('normal');

  private kindComputed = computed(() => {
    if (this.variant() === 'cancel') {
      return 'secondary';
    }
    return this.kind();
  });

  private weight = computed((): UiButtonWeight => {
    if (this.variant() === 'cancel') {
      return 'outline';
    }
    return 'solid';
  });

  protected cssClass = computed(() => ({
    [`kind-${this.kindComputed()}`]: !!this.kindComputed(),
    [`shape-${this.shape()}`]: true,
    [`size-medium`]: true,
    [`weight-${this.weight()}`]: !!this.weight(),
  }));

  protected handleClick() {
    if (this.variant() === 'cancel') {
      this.context.close();
    }
  }
}
