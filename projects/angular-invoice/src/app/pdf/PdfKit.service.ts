import { Injectable } from '@angular/core';
import PDFDocument from 'pdfkit';
import blobStream from 'blob-stream';
import type { FormProps } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PdfKitService {
  //https://pdfkit.org/examples/browserify/browser.html

  generate(_values: FormProps) {
    const promise = new Promise<string>((resolve, _reject) => {
      const doc = new PDFDocument();
      const stream = doc.pipe(blobStream());

      doc.fontSize(25).text('Hello, PDFKit in Angular!', 100, 100);

      doc.end();

      stream.on('finish', () => {
        const url = stream.toBlobURL('application/pdf');
        resolve(url);
      });
    });

    return promise;
  }
}
