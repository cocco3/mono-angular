import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  host: {
    '[attr.aria-label]': 'label()',
  },
  imports: [DatePipe],
  selector: 'app-date-range',
  styleUrl: './date-range.css',
  templateUrl: './date-range.html',
})
export class DateRangeComponent {
  /**
   * Any valid {@link https://angular.dev/api/common/DatePipe#usage-notes DatePipe format}
   */
  format = input<string>('MMM y');

  /**
   * Start date in ISO 8601 format (e.g. `2020-01` or `2020-09-24`).
   */
  start = input.required<string>();

  /**
   * (Optional) End date in ISO 8601 format (e.g. `2020-01` or `2020-09-24`).
   *
   * If no end date is provided, "Present" will be displayed.
   */
  end = input<string>();

  /**
   * Label to be used to identify the date range for screen readers.
   */
  label = input.required<string>();
}
