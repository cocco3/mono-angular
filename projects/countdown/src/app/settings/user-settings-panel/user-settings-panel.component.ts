import { Component, computed, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
  UiSelectionGroupComponent,
  UiToastService,
} from '@cocco3/angular-ui';
import { UserSettingsService } from '../../services/UserSettingsService';
import {
  userSettingsSchema,
  type UserSettingsModel,
} from './user-settings-schema';
import {
  type UserSettingFormat,
  UserSettingFormats,
  type UserSettingTheme,
  UserSettingThemes,
} from '../../services/LocalStorageService';

@Component({
  imports: [
    ReactiveFormsModule,
    UiButtonComponent,
    UiFormFieldComponent,
    UiInputComponent,
    UiSelectionGroupComponent,
  ],
  selector: 'app-user-settings-panel',
  styleUrl: './user-settings-panel.css',
  templateUrl: './user-settings-panel.html',
})
export class UserSettingsPanelComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly toastService = inject(UiToastService);

  private readonly userSettingsService = inject(UserSettingsService);
  private readonly userSettings = computed(() =>
    this.userSettingsService.settings()
  );

  protected isSaving = false;
  protected formErrors: Partial<UserSettingsModel> = {};

  private _themeMap = {
    auto: 'Auto',
    light: 'Light',
    dark: 'Dark',
  } as const satisfies Record<UserSettingTheme, string>;

  protected themeOptions = UserSettingThemes.map((value) => {
    const label = this._themeMap[value];
    return { value, label };
  });

  private _formatMap = {
    detailed: {
      label: 'Detailed',
      description: 'Show countdown as years/months/days',
    },
    days: {
      label: 'Days',
      description: 'Show countdown as total days',
    },
  } as const satisfies Record<
    UserSettingFormat,
    { label: string; description: string }
  >;

  protected formatOptions = UserSettingFormats.map((value) => {
    const item = this._formatMap[value];
    return { value, label: item.label, description: item.description };
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

      this.toastService.showMessage(
        'Your changes have been saved successfully.',
        {
          kind: 'positive',
          heading: 'Settings updated',
        }
      );
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
