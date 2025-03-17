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
  standalone: true,
})
export class UiTextareaAutosizeDirective implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);
  private textareaRef = inject(ElementRef<HTMLTextAreaElement>);

  uiAutosize = input(false, { transform: booleanAttribute });

  private inputListener: (() => void) | undefined;

  ngOnInit() {
    if (!this.uiAutosize()) return;

    const textarea = this.textareaRef.nativeElement;

    if (!CSS.supports('field-sizing', 'content')) {
      this.inputListener = this.renderer.listen(textarea, 'input', () => {
        this.adjustHeight(textarea);
      });

      this.adjustHeight(textarea);
    }
  }

  ngOnDestroy() {
    this.inputListener?.();
  }

  private adjustHeight(textarea: HTMLTextAreaElement) {
    // reset first
    this.renderer.setStyle(textarea, 'height', 'auto');

    // set height to scrollHeight + borders
    const newHeight = `${textarea.scrollHeight + 2}px`;
    this.renderer.setStyle(textarea, 'height', newHeight);
  }
}
