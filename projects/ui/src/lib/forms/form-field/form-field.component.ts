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

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'ui-form-field',
  styleUrls: ['./form-field.css'],
  templateUrl: './form-field.html',
})
export class UiFormFieldComponent implements AfterContentInit {
  label = input.required<string>();

  /**
   * Optionally add a custom ID for the input, otherwise a random ID will be used.
   */
  inputId = input<string>();

  /**
   * Display a description or helper text. Not shown if an error is supplied.
   */
  description = input<string>();

  /**
   * Error overrides description and will be displayed instead.
   */
  error = input<string>();

  protected resolvedInputId = computed(() => this.inputId() || uniqueId());
  protected descriptionId = computed(() =>
    this.description() || this.error() ? uniqueId() : undefined
  );
  protected showDescription = computed(
    () => !!this.description() && !this.error()
  );
  protected showError = computed(() => !!this.error());
  protected inline = false;

  private formFieldChild = contentChild(UiFormFieldDirective);

  private setErrorProperties() {
    const formField = this.formFieldChild();
    formField?.setHasError(this.showError());
    formField?.setAreaDescribedById(this.descriptionId());
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
      formField.setId(this.resolvedInputId());
    }
  }

  protected cssClass = computed(() => ({
    inline: this.inline,
  }));
}
