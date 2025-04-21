import { Component, inject, output, viewChild } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { z } from 'zod';
import {
  UiButtonComponent,
  UiDialogComponent,
  UiFormFieldComponent,
  UiInputComponent,
} from '@cocco3/angular-ui';
import { GoogleCalendarService } from '../app-event-list/GoogleCalendarService';
import { UserSettingsService } from '../services/UserSettingsService';

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
    UiButtonComponent,
    UiDialogComponent,
    UiFormFieldComponent,
    UiInputComponent,
  ],
  selector: 'app-create-event-dialog',
  styleUrls: ['./app-create-event-dialog.css'],
  templateUrl: './app-create-event-dialog.html',
})
export class AppCreateEventDialogComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  private calendarService = inject(GoogleCalendarService);
  private settings = inject(UserSettingsService);
  private dialog = viewChild<UiDialogComponent>('dialog');
  protected isSaving = false;

  protected formErrors: Partial<FormFields> = {};

  readonly success = output();

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

  private get defaultDate() {
    return new Date().toISOString().split('T')[0];
  }

  protected createEventForm = this.formBuilder.group({
    name: '',
    startDate: this.defaultDate,
    startTime: '',
    endDate: this.defaultDate,
    endTime: '',
  });

  public showDialog() {
    this.dialog()?.showModal();
  }

  protected resetForm() {
    this.createEventForm.reset();
    this.formErrors = {};
  }

  protected handleSubmit() {
    const formData = this.createEventForm.value;
    const validationResult = this.formSchema.safeParse(formData);

    if (validationResult.success) {
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
        })
        .subscribe({
          next: (_response) => {
            this.isSaving = false;
            this.success.emit();
            this.dialog()?.close();
          },
          error: (error) => {
            this.isSaving = false;
            console.error('Error creating event:', error);
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
