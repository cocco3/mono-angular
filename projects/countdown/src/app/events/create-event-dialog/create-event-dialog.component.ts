import { Component, computed, inject, output, viewChild } from '@angular/core';
import {
  type FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  UiAlertComponent,
  UiButtonComponent,
  UiDialogComponent,
  UiFormFieldComponent,
  UiInputComponent,
  UiTextareaComponent,
  Logger,
} from '@cocco3/angular-ui';
import { getToday } from '@cocco3/utils';
import { GoogleCalendarService } from '../../services/GoogleCalendarService';
import { UserSettingsService } from '../../services/UserSettingsService';
import {
  createEventSchema,
  type CreateEventModel,
} from './create-event-schema';

@Component({
  imports: [
    ReactiveFormsModule,
    UiAlertComponent,
    UiButtonComponent,
    UiDialogComponent,
    UiFormFieldComponent,
    UiInputComponent,
    UiTextareaComponent,
  ],
  selector: 'app-create-event-dialog',
  styleUrl: './create-event-dialog.css',
  templateUrl: './create-event-dialog.html',
})
export class CreateEventDialogComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly calendarService = inject(GoogleCalendarService);
  private readonly logger = inject(Logger);

  private readonly userSettingsService = inject(UserSettingsService);
  private readonly userSettings = computed(() =>
    this.userSettingsService.settings()
  );

  private dialog = viewChild<UiDialogComponent>('dialog');

  readonly success = output();

  protected error = '';
  protected isSaving = false;
  protected createEventForm: FormGroup;
  protected formErrors: Partial<CreateEventModel> = {};

  private formSchema = computed(() =>
    createEventSchema({
      query: this.userSettings().query,
      timeZone: this.userSettings().timeZone,
    })
  );

  constructor() {
    const defaultDate = getToday();

    this.createEventForm = this.formBuilder.group({
      name: '',
      description: this.userSettings().query,
      startDate: defaultDate,
      startTime: '',
      endDate: defaultDate,
      endTime: '',
    });

    // update endDate to be on or after startDate
    this.createEventForm
      .get('startDate')
      ?.valueChanges.subscribe((startDate) => {
        const endDateControl = this.createEventForm.get('endDate');
        if (endDateControl) {
          const endDate = endDateControl.value;

          if (endDate && new Date(endDate) < new Date(startDate)) {
            endDateControl.setValue(startDate);
          }

          endDateControl.updateValueAndValidity();
        }
      });
  }

  public showDialog() {
    this.dialog()?.showModal();
  }

  protected resetForm() {
    this.createEventForm.reset();
    this.formErrors = {};
    this.error = '';
  }

  protected handleSubmit() {
    const formData = this.createEventForm.value;
    const validationResult = this.formSchema().safeParse(formData);

    if (validationResult.success) {
      this.formErrors = {};
      this.error = '';
      this.isSaving = true;

      this.calendarService
        .createEvent({
          calendarId: this.userSettings().defaultCalendarId,
          summary: validationResult.data.name,
          description: validationResult.data.description,
          startDate: validationResult.data.startDate,
          startTime: validationResult.data.startTime,
          endDate: validationResult.data.endDate,
          endTime: validationResult.data.endTime,
          timeZone: this.userSettings().timeZone,
        })
        .subscribe({
          next: (_response) => {
            this.isSaving = false;
            this.success.emit();
            this.dialog()?.close();
          },
          error: (error) => {
            this.isSaving = false;
            this.error =
              'There was an error creating the event. Please try again.';
            this.logger.error('Error creating event', error as Error);
          },
        });
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
