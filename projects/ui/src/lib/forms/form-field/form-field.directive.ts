import {
  Directive,
  ElementRef,
  inject,
  type OnInit,
  Renderer2,
} from '@angular/core';
import { uniqueId } from '@cocco3/utils';

@Directive({
  host: {
    '[class.invalid]': 'invalid',
    '[attr.id]': 'id',
  },
})
export class UiFormFieldDirective<T extends HTMLElement> implements OnInit {
  private renderer = inject(Renderer2);
  public elementRef = inject(ElementRef<T>);

  private _inline = false;
  public get inline() {
    return this._inline;
  }

  private _id = '';
  public get id() {
    return this._id;
  }

  protected invalid = false;

  private setInline() {
    const element = this.elementRef.nativeElement;
    this._inline = ['checkbox', 'radio'].includes(element.type.toLowerCase());
  }

  private setId() {
    const element = this.elementRef.nativeElement;
    this._id = element.id || uniqueId();
  }

  ngOnInit() {
    this.setId();
    this.setInline();
  }

  setAriaDescribedById(id: string | undefined) {
    if (id) {
      this.renderer.setAttribute(
        this.elementRef.nativeElement,
        'aria-describedby',
        id
      );
    } else {
      this.renderer.removeAttribute(
        this.elementRef.nativeElement,
        'aria-describedby'
      );
    }
  }

  setInvalid(value: boolean) {
    this.invalid = value;
  }
}
