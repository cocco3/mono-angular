import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UiWrapperComponent } from '@cocco3/angular-ui';
import { AppFormComponent } from '../app-form/app-form.component';
import { AppIframeComponent } from '../app-pdf/app-iframe.component';
import type { FormProps } from '../../types';
import { PdfMakeService } from '../../pdf/PdfMake.service';
import { JsPdfService } from '../../pdf/JsPdf.service';
// import { PdfKitService } from '../../pdf/PdfKit.service';

@Component({
  imports: [AppFormComponent, AppIframeComponent, UiWrapperComponent],
  providers: [DatePipe],
  selector: 'app-main',
  styleUrl: './app-main.css',
  templateUrl: './app-main.html',
})
export class AppMainComponent {
  private datePipe = inject(DatePipe);
  private pdfMakeService = inject(PdfMakeService);
  private jsPdfService = inject(JsPdfService);
  // private pdfKitService = inject(PdfKitService);
  protected pdfSrc = '';

  private tool: 'pdfkit' | 'jspdf' | 'pdfmake' = 'pdfmake';

  private transformData(values: FormProps) {
    return {
      amount: values.amount,
      body: values.body,
      clientAddress: values.clientAddress,
      clientName: values.clientName,
      clientPhone: values.clientPhone,
      date: this.datePipe.transform(values.date, 'longDate') || '',
      docType: values.docType,
      location: values.location,
    };
  }

  private updateSrc = async (values: FormProps) => {
    const data = this.transformData(values);
    if (this.tool === 'jspdf') {
      this.pdfSrc = this.jsPdfService.generate(data);
    } else if (this.tool === 'pdfmake') {
      this.pdfSrc = await this.pdfMakeService.generate(data);
    }
    // else if (this.tool === 'pdfkit') {
    //   this.pdfKitService.generate(data);
    // }
  };

  protected async handleChange(newValues: FormProps) {
    this.updateSrc(newValues);
  }
}
