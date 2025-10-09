import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  styleUrl: './page-section.css',
  templateUrl: './page-section.html',
})
export class AppPageSection {
  heading = input.required<string>();
}
