import { Component, computed, inject } from '@angular/core';
import {
  UiItemGridComponent,
  UiCarouselComponent,
  UiCarouselItemDirective,
} from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';
import { AppProjectItemComponent } from '../project-item/project-item.component';
import { AppProjectsContext } from '../projects-context';

@Component({
  imports: [
    AppProjectItemComponent,
    UiItemGridComponent,
    UiCarouselComponent,
    UiCarouselItemDirective,
  ],
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.html',
})
export class AppProjectsGrid {
  private readonly context = inject(AppProjectsContext);
  private readonly content = inject(ContentService);
  protected projects = this.content.projects;

  view = computed(() => {
    return this.context.view();
  });
}
