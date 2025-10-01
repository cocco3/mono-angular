import {
  Directive,
  ElementRef,
  inject,
  Input,
  type OnInit,
} from '@angular/core';
import { uniqueId } from '@cocco3/utils';

@Directive({
  host: {
    '[class.invalid]': 'invalid',
    '[attr.id]': 'inputId',
    '[attr.aria-describedby]': 'descriptionId || undefined',
    '[attr.aria-invalid]': 'invalid || undefined',
  },
  selector: 'input[uiFormField], select[uiFormField], textarea[uiFormField]',
})
export class UiFormFieldDirective implements OnInit {
  public elementRef = inject(ElementRef<HTMLElement>);

  protected descriptionId: string | undefined;

  @Input() invalid = false;

  private _inline = false;
  public get inline() {
    return this._inline;
  }

  private _inputId = '';
  public get inputId() {
    return this._inputId;
  }

  private _isRequired = false;
  public get isRequired() {
    return this._isRequired;
  }

  private setInline() {
    const element = this.elementRef.nativeElement;
    this._inline = ['checkbox', 'radio'].includes(element.type.toLowerCase());
  }

  private setInputId() {
    const element = this.elementRef.nativeElement;
    this._inputId = element.id || uniqueId();
  }

  private setIsRequired() {
    const element = this.elementRef.nativeElement;
    this._isRequired = !!element.required || false;
  }

  ngOnInit() {
    this.setInline();
    this.setInputId();
    this.setIsRequired();
  }

  setAriaDescribedById(id: string | undefined) {
    this.descriptionId = id;
  }

  setInvalid(value: boolean) {
    this.invalid = value;
  }
}
