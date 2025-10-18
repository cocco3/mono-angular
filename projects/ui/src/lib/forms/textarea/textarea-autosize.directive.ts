import {
  Directive,
  ElementRef,
  Renderer2,
  booleanAttribute,
  inject,
  input,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import { resizeObserver } from '@cocco3/utils';

/**
 * If the CSS property `field-sizing` is not supported in the browser,
 * this directive binds to the `input` event and resizes the textarea
 * as the user types.
 *
 * Once `field-sizing` is globally supported, this directive can be deleted.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing}
 */
@Directive({
  selector: 'textarea[uiAutosize]',
})
export class UiTextareaAutosizeDirective implements OnInit, OnDestroy {
  private readonly renderer = inject(Renderer2);
  private readonly el: ElementRef<HTMLTextAreaElement> = inject(
    ElementRef<HTMLTextAreaElement>
  );

  uiAutosize = input(false, { transform: booleanAttribute });

  private inputListener: (() => void) | undefined;
  private resizeObserver: ResizeObserver | undefined;

  ngOnInit() {
    if (!this.uiAutosize()) return;

    const textarea = this.el.nativeElement;

    const isFieldSizingSupported = this.doesBrowserSupportCssFieldSizing();

    if (!isFieldSizingSupported) {
      this.inputListener = this.renderer.listen(textarea, 'input', () => {
        this.adjustHeight();
      });

      this.resizeObserver = resizeObserver(textarea, () => {
        this.adjustHeight();
      });

      this.adjustHeight();
    }
  }

  ngOnDestroy() {
    this.inputListener?.();
    this.resizeObserver?.disconnect();
  }

  /**
   * https://caniuse.com/mdn-css_properties_field-sizing
   * https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing
   */
  private doesBrowserSupportCssFieldSizing() {
    return CSS.supports('field-sizing', 'content');
  }

  private calcHeight() {
    const textarea = this.el.nativeElement;

    const styles = getComputedStyle(textarea);

    const scrollHeight = textarea.scrollHeight;

    const topBorderWidth = parseFloat(
      styles.borderBlockStartWidth || styles.borderTopWidth
    );

    const bottomBorderWidth = parseFloat(
      styles.borderBlockEndWidth || styles.borderBottomWidth
    );

    const value = scrollHeight + topBorderWidth + bottomBorderWidth;

    return { value, cssValue: `${value}px` };
  }

  private adjustHeight() {
    const textarea = this.el.nativeElement;

    // reset first
    this.renderer.setStyle(textarea, 'height', 'auto');

    const newHeight = this.calcHeight();
    this.renderer.setStyle(textarea, 'height', newHeight.cssValue);
  }
}
