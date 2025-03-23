import { Component, inject, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
  UiSelectComponent,
  UiTextareaComponent,
} from '@cocco3/angular-ui';

export type PdfFormValues = {
  docType?: 'invoice' | 'proposal';
  date?: string;
  to?: string;
  address?: string;
  phone?: string;
  location?: string;
  amount?: string;
  body?: string;
};

@Component({
  imports: [
    ReactiveFormsModule,
    UiButtonComponent,
    UiFormFieldComponent,
    UiInputComponent,
    UiSelectComponent,
    UiTextareaComponent,
  ],
  selector: 'app-form',
  styleUrl: './app-form.css',
  templateUrl: './app-form.html',
})
export class AppFormComponent {
  private formBuilder = inject(NonNullableFormBuilder);

  readonly valuesChange = output<PdfFormValues>();

  protected pdfForm = this.formBuilder.group<PdfFormValues>({
    docType: 'invoice' as const,
    date: new Date().toISOString().split('T')[0],
    to: '',
    address: '',
    phone: '',
    location: '',
    amount: '',
    body: '',
  });

  protected handleSubmit() {
    if (this.pdfForm.valid) {
      this.valuesChange.emit(this.pdfForm.value);
    }
  }
}
