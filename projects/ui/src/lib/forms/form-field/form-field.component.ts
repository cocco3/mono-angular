import {
  type AfterContentInit,
  Component,
  input,
  computed,
  contentChild,
} from '@angular/core';
import { UiFormFieldDirective } from './form-field.directive';
import { uniqueId } from '../../utils/utils';

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  selector: 'ui-form-field',
  standalone: true,
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

  ngAfterContentInit() {
    const formField = this.formFieldChild();
    if (formField) {
      this.inline = formField.inline;
      formField.setId(this.resolvedInputId());
      formField.setHasError(this.showError());

      if (this.descriptionId()) {
        formField.setAreaDescribedById(this.descriptionId()!);
      }
    }
  }

  protected cssClass = computed(() => ({
    inline: this.inline,
  }));
}
