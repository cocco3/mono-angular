import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, Validators, type FormGroup } from '@angular/forms';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
} from '@cocco3/angular-ui';
import {
  type UserSettings,
  UserSettingsService,
} from '../../services/UserSettingsService';

@Component({
  imports: [UiButtonComponent, UiFormFieldComponent, UiInputComponent],
  selector: 'app-user-settings-panel',
  styleUrl: './user-settings-panel.css',
  templateUrl: './user-settings-panel.html',
})
export class UserSettingsPanelComponent {
  private readonly settingsService = inject(UserSettingsService);
  private readonly formBuilder = inject(FormBuilder);

  readonly initialSettings = signal<UserSettings>(this.settingsService.get());

  readonly form: FormGroup = this.formBuilder.group({
    query: [this.initialSettings().query, Validators.required],
    timezone: [this.initialSettings().timezone, Validators.required],
    theme: [this.initialSettings().theme, Validators.required],
    defaultCalendarId: [
      this.initialSettings().defaultCalendarId,
      Validators.required,
    ],
    defaultFormat: [this.initialSettings().defaultFormat, Validators.required],
  });

  readonly isDirty = computed(() => this.form.dirty);

  save(): void {
    if (this.form.valid) {
      this.settingsService.set(this.form.value as UserSettings);
      this.form.markAsPristine();
    }
  }
}
