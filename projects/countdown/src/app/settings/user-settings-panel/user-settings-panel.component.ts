import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
  UiSelectComponent,
} from '@cocco3/angular-ui';
import { UserSettingsService } from '../../services/UserSettingsService';
import {
  userSettingsSchema,
  type UserSettingsModel,
} from './user-settings-schema';
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
  private readonly formBuilder = inject(NonNullableFormBuilder);

  private readonly userSettingsService = inject(UserSettingsService);
  private readonly userSettings = computed(() =>
    this.userSettingsService.settings()
  );

  protected isSaving = false;
  protected formErrors: Partial<UserSettingsModel> = {};

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

  protected form = this.formBuilder.group({
    timeZone: this.userSettings().timeZone,
    query: this.userSettings().query,
    defaultCalendarId: this.userSettings().defaultCalendarId,
    defaultFormat: this.userSettings().defaultFormat,
    theme: this.userSettings().theme,
  });

  protected async handleSubmit() {
    const formData = this.form.value;
    const validationResult = userSettingsSchema.safeParse(formData);

    if (validationResult.success) {
      this.formErrors = {};
      this.isSaving = true;

      await this.userSettingsService.save({
        defaultCalendarId: validationResult.data.defaultCalendarId,
        query: validationResult.data.query,
        theme: validationResult.data.theme,
        timeZone: validationResult.data.timeZone,
        defaultFormat: validationResult.data.defaultFormat,
      });
      this.form.markAsPristine();
      this.isSaving = false;
    } else {
      this.formErrors = validationResult.error.issues.reduce(
        (acc, error) => {
          acc[error.path[0].toString()] = error.message;
          return acc;
        },
        {} as Record<string, string>
      );
    }
  }
}
