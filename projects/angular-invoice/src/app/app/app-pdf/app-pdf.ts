import { Component, computed, input } from '@angular/core';
import { type PdfFormValues } from '../app-form/app-form.component';

@Component({
  selector: 'app-pdf',
  templateUrl: './app-pdf.html',
})
export class AppPdfComponent {
  values = input<PdfFormValues>({});

  stringValues = computed(() => JSON.stringify(this.values()));
}
