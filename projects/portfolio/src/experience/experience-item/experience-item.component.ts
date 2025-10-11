import { Component, input } from '@angular/core';
import { uniqueId } from '@cocco3/utils';
import { DateRangeComponent } from '../date-range/date-range.component';

type Company = {
  name: string;
  start: string;
  end?: string;
};

type Position = {
  title: string;
  location: string;
  start?: string;
  end?: string;
  points: string[];
  tech?: string[];
};

@Component({
  imports: [DateRangeComponent],
  host: {
    '[attr.aria-labelledby]': 'headingId',
  },
  selector: 'article[app-experience-item]',
  styleUrl: './experience-item.css',
  templateUrl: './experience-item.html',
})
export class AppExperienceItemComponent {
  company = input.required<Company>();
  positions = input.required<Position[]>();

  protected headingId = uniqueId();
}
