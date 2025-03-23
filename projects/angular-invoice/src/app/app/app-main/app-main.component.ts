import { Component, signal } from '@angular/core';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import {
  AppFormComponent,
  type PdfFormValues,
} from '../app-form/app-form.component';
import { AppPdfComponent } from '../app-pdf/app-pdf';

@Component({
  imports: [AppFormComponent, AppPdfComponent, UiWrapperComponent],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent {
  values = signal<PdfFormValues>({});

  protected handleChange(value: PdfFormValues) {
    this.values.set(value);
  }
}
