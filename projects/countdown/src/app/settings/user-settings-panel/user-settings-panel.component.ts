import { Component, computed, inject } from '@angular/core';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
  UiSelectComponent,
} from '@cocco3/angular-ui';
import {
  type UserSettings,
  UserSettingsService,
} from '../../services/UserSettingsService';
import {
  type FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  UserSettingFormats,
  UserSettingThemes,
} from '../../services/LocalStorageService';

@Component({
  imports: [
    ReactiveFormsModule,
    UiButtonComponent,
    UiFormFieldComponent,
    UiInputComponent,
    UiSelectComponent,
  ],
  selector: 'app-user-settings-panel',
  styleUrl: './user-settings-panel.css',
  templateUrl: './user-settings-panel.html',
})
export class UserSettingsPanelComponent {
  private readonly userSettingsService = inject(UserSettingsService);
  private readonly userSettings = computed(() =>
    this.userSettingsService.settings()
  );

  private readonly formBuilder = inject(NonNullableFormBuilder);

  protected themeOptions = UserSettingThemes.map((value) => {
    const text = {
      light: 'Light',
      dark: 'Dark',
      auto: 'Auto',
    }[value];
    return { value, text };
  });

  protected formatOptions = UserSettingFormats.map((value) => {
    const text = {
      detailed: 'Detailed',
      days: 'Days',
    }[value];
    return { value, text };
  });

  protected isSaving = false;

  protected readonly form: FormGroup = this.formBuilder.group({
    timeZone: this.formBuilder.control(this.userSettings().timeZone, {
      validators: [Validators.required],
    }),
    query: this.formBuilder.control(this.userSettings().query, {
      validators: [Validators.required],
    }),
    defaultCalendarId: this.formBuilder.control(
      this.userSettings().defaultCalendarId,
      {
        validators: [Validators.required],
      }
    ),
    defaultFormat: this.formBuilder.control(this.userSettings().defaultFormat, {
      validators: [Validators.required],
    }),
    theme: this.formBuilder.control(this.userSettings().theme, {
      validators: [Validators.required],
    }),
  });

  protected async save(): Promise<void> {
    this.isSaving = true;
    const values = this.form.value as UserSettings; /* TODO: fix this */

    if (this.form.valid) {
      await this.userSettingsService.save({
        defaultCalendarId: values.defaultCalendarId!,
        query: values.query!,
        theme: values.theme!,
        timeZone: values.timeZone!,
        defaultFormat: values.defaultFormat!,
      });
      this.form.markAsPristine();
      this.isSaving = false;
    }
  }
}
