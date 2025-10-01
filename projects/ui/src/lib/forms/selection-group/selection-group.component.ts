import { Component, computed, forwardRef, Input, input } from '@angular/core';
import { type ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { uniqueId } from '@cocco3/utils';
import { UiRadioComponent } from '../radio/radio.component';
import { UiFormFieldComponent } from '../form-field/form-field.component';
import { UiCheckboxComponent } from '../checkbox/checkbox.component';
import { UiFieldDescriptionComponent } from '../field-description/field-description.component';

type SelectionGroupOption = {
  label: string;
  value: string;
  description?: string;
};

export const UiSelectionGroupDirections = ['column', 'row'] as const;
export type UiSelectionGroupDirection =
  (typeof UiSelectionGroupDirections)[number];

@Component({
  host: {
    '[class]': 'cssClass()',
  },
  imports: [
    UiCheckboxComponent,
    UiRadioComponent,
    UiFormFieldComponent,
    UiFieldDescriptionComponent,
  ],
  selector: 'ui-selection-group',
  styleUrl: './selection-group.css',
  templateUrl: './selection-group.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiSelectionGroupComponent),
      multi: true,
    },
  ],
})
export class UiSelectionGroupComponent implements ControlValueAccessor {
  protected descriptionId = uniqueId();

  direction = input<UiSelectionGroupDirection>('column');
  kind = input.required<'radio' | 'checkbox'>();
  groupName = input.required<string>();

  /** Label to display for the group. */
  label = input.required<string>();

  /** Show a required indidcator. */
  required = input<boolean>(false);

  /** Display a description or helper text. Not shown if an error is supplied. */
  description = input<string>();

  /** Error overrides description and will be displayed instead. */
  error = input<string>();

  options = input.required<SelectionGroupOption[]>();

  @Input() disabled = false;

  protected hasDescription = computed(
    () => !!this.description() || !!this.error()
  );
  protected invalid = computed(() => !!this.error());

  private _value: string | string[] = '';
  private _onChange: (value: unknown) => void = () => undefined;
  private _onTouched: () => void = () => undefined;

  get value(): string | string[] {
    return this._value;
  }

  set value(val: string | string[]) {
    this._value = val;
    this._onChange(val);
    this._onTouched();
  }

  writeValue(value: string | string[]) {
    this._value = value;
  }

  registerOnChange(fn: (value: unknown) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  protected onRadioChange(optionValue: string) {
    this.value = optionValue;
  }

  protected onCheckboxChange(optionValue: string, checked: boolean) {
    let current = Array.isArray(this._value) ? [...this._value] : [];
    if (checked) {
      if (!current.includes(optionValue)) current.push(optionValue);
    } else {
      current = current.filter((v) => v !== optionValue);
    }
    this.value = current;
  }

  protected isChecked(optionValue: string) {
    if (this.kind() === 'checkbox') {
      return Array.isArray(this._value) && this._value.includes(optionValue);
    } else {
      return this._value === optionValue;
    }
  }

  protected cssClass = computed(() => ({
    [`dir-${this.direction()}`]: !!this.direction(),
  }));
}
