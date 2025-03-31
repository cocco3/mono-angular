import { Component, inject, type OnInit, output } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  UiButtonComponent,
  UiFormFieldComponent,
  UiInputComponent,
  UiSelectComponent,
  UiTextareaComponent,
} from '@cocco3/angular-ui';
import type { DocType, FormProps } from '../../types';

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
export class AppFormComponent implements OnInit {
  private formBuilder = inject(NonNullableFormBuilder);

  readonly valuesChange = output<FormProps>();

  protected pdfForm = this.formBuilder.group<Partial<FormProps>>({
    docType: 'invoice' as DocType,
    date: new Date().toISOString().split('T')[0],
    clientName: 'Jane Smith',
    clientAddress: '1234 Main St\nNew Town, CA 91919',
    clientPhone: '(999) 888-7777',
    location: '456 Park Blvd',
    amount: '234.56',
    body: '',
  });

  protected handleSubmit() {
    if (this.pdfForm.valid) {
      this.valuesChange.emit({
        docType: this.pdfForm.value.docType || 'invoice',
        amount: this.pdfForm.value.amount || '0',
        body: this.pdfForm.value.body || '',
        clientAddress: this.pdfForm.value.clientAddress || '',
        clientName: this.pdfForm.value.clientName || '',
        clientPhone: this.pdfForm.value.clientPhone || '',
        date: this.pdfForm.value.date || '',
        location: this.pdfForm.value.location || '',
      });
    }
  }

  ngOnInit() {
    this.handleSubmit();
  }
}
