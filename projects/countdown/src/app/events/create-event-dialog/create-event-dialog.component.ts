import { Component, inject, output, viewChild } from '@angular/core';
import {
  type FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { z } from 'zod';
import {
  UiAlertComponent,
  UiButtonComponent,
  UiDialogComponent,
  UiFormFieldComponent,
  UiInputComponent,
} from '@cocco3/angular-ui';
import { createDateTimeZoned, getToday } from '@cocco3/utils';
import { GoogleCalendarService } from '../../services/GoogleCalendarService';
import { UserSettingsService } from '../../services/UserSettingsService';
import { LoggerService } from '../../services/LoggerService';

type FormFields = {
  name: string;
  startDate: string;
  startTime?: string;
  endDate: string;
  endTime?: string;
};

@Component({
  imports: [
    ReactiveFormsModule,
    UiAlertComponent,
    UiButtonComponent,
    UiDialogComponent,
    UiFormFieldComponent,
    UiInputComponent,
  ],
  selector: 'app-create-event-dialog',
  styleUrls: ['./create-event-dialog.css'],
  templateUrl: './create-event-dialog.html',
})
export class CreateEventDialogComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  private calendarService = inject(GoogleCalendarService);
  private settings = inject(UserSettingsService);
  private logger = inject(LoggerService);
  private dialog = viewChild<UiDialogComponent>('dialog');

  readonly success = output();

  protected error = '';
  protected isSaving = false;
  protected createEventForm: FormGroup;
  protected formErrors: Partial<FormFields> = {};

  private formSchema = z
    .object({
      name: z
        .string()
        .trim()
        .refine((value) => value.trim().length > 0, {
          message: 'Event name is required',
        }),
      startDate: z
        .string()
        .trim()
        .refine((value) => value.trim().length > 0, {
          message: 'Start date is required',
        }),
      startTime: z.string().optional(),
      endDate: z
        .string()
        .trim()
        .refine((value) => value.trim().length > 0, {
          message: 'End date is required',
        }),
      endTime: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      // validate times
      if (data.startTime && !data.endTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Provide an endTime with startTime',
          path: ['endTime'],
        });
      } else if (!data.startTime && data.endTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Provide a startTime with endTime',
          path: ['startTime'],
        });
      } else if (
        data.startDate &&
        data.startTime &&
        data.endDate &&
        data.endTime
      ) {
        const start = createDateTimeZoned(
          data.startDate,
          data.startTime,
          this.settings.timeZone
        );
        const end = createDateTimeZoned(
          data.endDate,
          data.endTime,
          this.settings.timeZone
        );

        if (end < start) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'End time must be on or after start',
            path: ['endTime'],
          });
        }
      }
    })
    .superRefine((data, ctx) => {
      // validate dates
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return;
      }

      if (end < start) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'End date must be on or after start date',
          path: ['endDate'],
        });
      }
    });

  constructor() {
    const defaultDate = getToday();

    this.createEventForm = this.formBuilder.group({
      name: '',
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
    const validationResult = this.formSchema.safeParse(formData);

    if (validationResult.success) {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      this.formErrors = {};
      this.error = '';
      this.isSaving = true;

      this.calendarService
        .createEvent({
          calendarId: this.settings.defaultCalendarId,
          query: this.settings.query,
          summary: validationResult.data.name,
          startDate: validationResult.data.startDate,
          startTime: validationResult.data.startTime,
          endDate: validationResult.data.endDate,
          endTime: validationResult.data.endTime,
          timeZone,
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
      this.formErrors = validationResult.error.errors.reduce(
        (acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        },
        {} as Record<string, string>
      );
    }
  }
}
