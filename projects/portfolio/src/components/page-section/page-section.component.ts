import { Component, computed, input } from '@angular/core';
import { SectionScrollSpyDirective } from '../../scroll-spy/section-scroll-spy.directive';

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
  templateUrl: './page-section.html',
})
export class AppPageSection {
  sectionId = input.required<string>();
  heading = input.required<string>();

  protected headingId = computed(() => `heading-${this.heading()}`);
}
