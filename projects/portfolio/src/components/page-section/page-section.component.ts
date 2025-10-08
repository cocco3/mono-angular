import { ViewportScroller } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  styleUrl: './page-section.css',
  templateUrl: './page-section.html',
})
export class AppPageSection {
  private readonly viewportScroller = inject(ViewportScroller);

  heading = input.required<string>();

  constructor() {
    /** Use this in addition to CSS scroll-margin-top */
    this.viewportScroller.setOffset([0, 72]);
  }
}
