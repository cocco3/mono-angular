import { Component, input } from '@angular/core';

type Company = {
  name: string;
  dates: string;
};

type Position = {
  title: string;
  location: string;
  dates?: string;
  points: string[];
  tech?: string[];
};

@Component({
  selector: 'app-experience-item',
  styleUrl: './experience-item.css',
  templateUrl: './experience-item.html',
})
export class AppExperienceItemComponent {
  company = input.required<Company>();
  positions = input.required<Position[]>();
}
