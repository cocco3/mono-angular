import { Component, computed, signal, inject } from '@angular/core';
import {
  FormBuilder,
  type FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  UserSettingsService,
  type UserSettings,
} from '../../services/UserSettingsService';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="save()">
      <label>
        Timezone:
        <input formControlName="timezone" />
      </label>

      <label>
        Keyword:
        <input formControlName="keyword" />
      </label>

      <label>
        Theme:
        <select formControlName="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </label>

      <button type="submit" [disabled]="form.invalid">Save</button>
    </form>
  `,
})
export class SettingsComponent {
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
