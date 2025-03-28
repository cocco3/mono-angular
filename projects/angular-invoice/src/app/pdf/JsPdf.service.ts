import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import type { FormProps } from '../types';

const START_X = 88;

@Injectable({
  providedIn: 'root',
})
export class JsPdfService {
  generate(_values: FormProps) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
      hotfixes: ['px_scaling'],
    });

    doc.setProperties({
      title: 'AJPaving-Invoice',
    });

    const pageWidth = doc.internal.pageSize.width;

    doc.setFontSize(22);
    doc.text('Hello world!', START_X, 88);

    doc.setFontSize(14);
    doc.text(_values.date, START_X, 100);

    doc.setFontSize(16);
    doc.setTextColor('#666666');
    doc.text('From', START_X, 200);
    doc.text('For', START_X + 400, 200);

    doc.setFontSize(18);
    doc.setTextColor('#000000');
    doc.text('A & J Paving, Inc.', START_X, 230);
    doc.text(_values.clientName, START_X + 400, 230);

    doc.setFontSize(14);
    doc.text('1911 N Sayre Ave.', START_X, 260);
    doc.text(_values.clientAddress, START_X + 400, 260);

    doc.setDrawColor('#666666');
    doc.line(START_X, 400, pageWidth - START_X, 400);

    return doc.output('datauristring');
  }
}
