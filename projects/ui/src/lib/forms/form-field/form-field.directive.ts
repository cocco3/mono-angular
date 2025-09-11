import {
  Directive,
  ElementRef,
  inject,
  Input,
  type OnInit,
  Renderer2,
} from '@angular/core';
import { uniqueId } from '@cocco3/utils';

@Directive({
  host: {
    '[class.invalid]': 'invalid',
    '[attr.id]': 'inputId',
  },
  selector: 'input[uiFormField], select[uiFormField], textarea[uiFormField]',
})
export class UiFormFieldDirective implements OnInit {
  private renderer = inject(Renderer2);
  public elementRef = inject(ElementRef<HTMLElement>);

  private _invalid = false;
  @Input()
  get invalid() {
    return this._invalid;
  }
  set invalid(value: boolean) {
    this._invalid = value;
  }

  private _inline = false;
  public get inline() {
    return this._inline;
  }

  private _inputId = '';
  public get inputId() {
    return this._inputId;
  }

  private setInline() {
    const element = this.elementRef.nativeElement;
    this._inline = ['checkbox', 'radio'].includes(element.type.toLowerCase());
  }

  private setId() {
    const element = this.elementRef.nativeElement;
    this._inputId = element.id || uniqueId();
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
    this._invalid = value;
  }
}
