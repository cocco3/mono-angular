import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import type { FormProps } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PdfMakeService {
  generate(_values: FormProps) {
    const docDefinition = this.createPdfDefinition(_values);

    const promise = new Promise<string>((resolve, _reject) => {
      const pdfDoc = pdfMake.createPdf(
        docDefinition,
        undefined,
        undefined,
        pdfFonts.vfs
      );

      pdfDoc.getDataUrl((dataUrl) => {
        resolve(dataUrl);
      });
    });

    return promise;
  }

  private createPdfDefinition(values: FormProps) {
    const docDefinition: TDocumentDefinitions = {
      content: [
        {
          text: 'Invoice',
          style: { fontSize: 28 },
        },
        {
          text: values.date,
          style: { marginBottom: 40 },
        },
        {
          columns: [
            [
              { text: 'From', style: 'subtitle' },
              { text: 'A & J Paving, Inc.', style: 'title' },
              { text: '1911 N Sayre Ave' },
              { text: 'Chicago, IL 60707' },
              { text: '(773) 398-9244' },
              { text: 'coccoaj@gmail.com' },
            ],
            [
              { text: 'For', style: 'subtitle' },
              { text: values.clientName, style: 'title' },
              values.clientAddress,
              values.clientPhone,
            ],
          ],
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 40,
              y1: 60,
              x2: 260,
              y2: 60,
              lineWidth: 1,
            },
          ],
        },
        {
          text: [
            { text: 'A&J', style: {} },
            { text: 'Items', style: { alignment: 'right' } },
          ],
          style: 'footer',
        },
      ],
      styles: {
        title: {
          fontSize: 16,
          bold: true,
        },
        subtitle: {
          color: '#666666',
          fontSize: 14,
        },
        footer: {
          decoration: 'overline',
          fontSize: 8,
          marginTop: 40,
        },
      },
      defaultStyle: {
        columnGap: 20,
        fontSize: 12,
      },
    };

    return docDefinition;
  }
}
