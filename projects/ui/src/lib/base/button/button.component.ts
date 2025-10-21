import {
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { UiSlotDirective, useSlots } from '../../layout/slot/slot.directive';

export const UiButtonKinds = ['primary', 'secondary', 'destructive'] as const;
export type UiButtonKind = (typeof UiButtonKinds)[number];

export const UiButtonSizes = ['small', 'medium', 'large'] as const;
export type UiButtonSize = (typeof UiButtonSizes)[number];

export const UiButtonShapes = ['normal', 'pill', 'circle', 'square'] as const;
export type UiButtonShape = (typeof UiButtonShapes)[number];

export const UiButtonWeights = ['solid', 'outline', 'ghost'] as const;
export type UiButtonWeight = (typeof UiButtonWeights)[number];

/**
 * Usage: Add `ui-button` to any `<button>` or `<a>` element.
 */
@Component({
  host: {
    '[class]': 'cssClass()',
    '[attr.type]': 'attrType()',
  },
  selector: 'button[ui-button], a[ui-button]',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class UiButtonComponent {
  private readonly el: ElementRef<HTMLButtonElement | HTMLAnchorElement> =
    inject(ElementRef<HTMLButtonElement | HTMLAnchorElement>);

  kind = input.required<UiButtonKind>();
  /** Use `shape = 'circle' | 'square'` for an icon only button. */
  shape = input<UiButtonShape>('normal');
  size = input.required<UiButtonSize>();
  weight = input<UiButtonWeight>('solid');
  loading = input<boolean>(false);

  private slots = contentChildren(UiSlotDirective);
  protected hasSlots = useSlots(this.slots, ['start', 'end']);

  /** for buttons, default the type to 'button' */
  protected attrType = computed(() => {
    const nativeEl = this.el.nativeElement;
    return nativeEl.tagName === 'BUTTON'
      ? nativeEl.getAttribute('type') || 'button'
      : null;
  });

  protected cssClass = computed(() => ({
    [`kind-${this.kind()}`]: !!this.kind(),
    ['icon-only']: ['circle', 'square'].includes(this.shape()),
    [`shape-${this.shape()}`]: !!this.shape(),
    [`size-${this.size()}`]: !!this.size(),
    [`weight-${this.weight()}`]: !!this.weight(),
  }));
}
