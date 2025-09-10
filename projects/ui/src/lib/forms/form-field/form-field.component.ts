import {
  type AfterContentInit,
  Component,
  effect,
  input,
  computed,
  contentChild,
} from '@angular/core';
import { uniqueId } from '@cocco3/utils';
import { UiFormFieldDirective } from './form-field.directive';
import { UiIconComponent } from '../../base/icon/icon.component';

@Component({
  host: {
    '[class.inline]': 'inline',
  },
  imports: [UiIconComponent],
  selector: 'ui-form-field',
  styleUrls: ['./form-field.css'],
  templateUrl: './form-field.html',
})
export class UiFormFieldComponent implements AfterContentInit {
  private readonly formFieldChild = contentChild(UiFormFieldDirective);

  /** Label to display for the form field. */
  label = input.required<string>();

  /** Display a description or helper text. Not shown if an error is supplied. */
  description = input<string>();

  /** Error overrides description and will be displayed instead. */
  error = input<string>();

  protected descriptionId = computed(() =>
    this.description() || this.error() ? uniqueId() : undefined
  );
  protected showDescription = computed(
    () => !!this.description() || !!this.error()
  );
  protected invalid = computed(() => !!this.error());

  protected inline = false;
  protected inputId = '';

  private setErrorProperties() {
    const formField = this.formFieldChild();
    formField?.setInvalid(this.invalid());
    formField?.setAriaDescribedById(this.descriptionId());
  }

  constructor() {
    effect(() => {
      this.setErrorProperties();
    });
  }

  ngAfterContentInit() {
    const formField = this.formFieldChild();
    if (formField) {
      this.inline = formField.inline;
      this.inputId = formField.id;
    } else {
      console.error('No form field child found.');
    }
  }
}
