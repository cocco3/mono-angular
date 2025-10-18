import { Component, ElementRef, inject, input } from '@angular/core';

@Component({
  host: {
    '[attr.id]': 'id()',
  },
  selector: 'h2[app-section-heading]',
  styleUrl: './section-heading.css',
  template: '<ng-content />',
})
export class AppSectionHeading {
  public readonly el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);

  id = input.required<string>();
}
