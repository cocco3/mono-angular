import { Component, computed, contentChild, input } from '@angular/core';
import { SectionScrollSpyDirective } from '../../scroll-spy/section-scroll-spy.directive';
import { AppSectionHeading } from '../section-heading/section-heading.component';

/**
 * A section of a page, with a heading and content.
 * Also integrates with the scroll spy to highlight the corresponding nav item.
 */
@Component({
  host: {
    '[attr.id]': 'sectionId()',
    '[attr.aria-labelledby]': 'headingId()',
  },
  hostDirectives: [
    {
      directive: SectionScrollSpyDirective,
      inputs: ['appSectionScrollSpy: sectionId'],
    },
  ],
  selector: 'section[app-page-section]',
  styleUrl: './page-section.css',
  template: '<ng-content />',
})
export class AppPageSection {
  private readonly heading = contentChild(AppSectionHeading);

  sectionId = input.required<string>();

  protected headingId = computed(() => this.heading()?.el.nativeElement.id);
}
