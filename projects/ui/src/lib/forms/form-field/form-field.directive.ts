import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  host: {
    '[class.error]': 'hasError',
  },
})
export class UiFormFieldDirective<T extends HTMLElement> {
  private renderer = inject(Renderer2);
  public elementRef = inject(ElementRef<T>);

  private _inline = false;
  public get inline() {
    return this._inline;
  }
  private set inline(value) {
    this._inline = value;
  }

  protected hasError = false;

  constructor({ inline }: { inline: boolean }) {
    this.inline = inline;
  }

  setId(id: string) {
    if (this.elementRef.nativeElement.id) {
      console.warn(
        `Input already has ID ${this.elementRef.nativeElement.id}. Input ID and <qai-field inputId="" /> cannot be used together.`
      );
    } else {
      this.renderer.setAttribute(this.elementRef.nativeElement, 'id', id);
    }
  }

  setAreaDescribedById(id: string) {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-describedby',
      id
    );
  }

  setHasError(value: boolean) {
    this.hasError = value;
  }
}
