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
import { UiFieldDescriptionComponent } from '../field-description/field-description.component';

@Component({
  host: {
    '[class.inline]': 'inline',
  },
  imports: [UiFieldDescriptionComponent],
  selector: 'ui-form-field',
  styleUrl: './form-field.css',
  templateUrl: './form-field.html',
})
export class UiFormFieldComponent implements AfterContentInit {
  private readonly formFieldChild = contentChild(UiFormFieldDirective);
  protected descriptionId = uniqueId();

  /** Label to display for the form field. */
  label = input.required<string>();

  /** Display a description or helper text. Not shown if an error is supplied. */
  description = input<string>();

  /** Error overrides description and will be displayed instead. */
  error = input<string>();

  protected hasDescription = computed(
    () => !!this.description() || !!this.error()
  );
  protected invalid = computed(() => !!this.error());

  protected inline = false;
  protected inputId = '';
  protected isRequired = false;

  private setErrorProperties() {
    const formField = this.formFieldChild();
    formField?.setInvalid(this.invalid());
    formField?.setAriaDescribedById(
      this.hasDescription() ? this.descriptionId : undefined
    );
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
      this.inputId = formField.inputId;
      this.isRequired = formField.isRequired;
    } else {
      console.error('No form field child found.');
    }
  }
}
