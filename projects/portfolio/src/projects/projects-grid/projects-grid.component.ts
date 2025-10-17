import { Component, inject } from '@angular/core';
import { UiItemGridComponent } from '@cocco3/angular-ui';
import { ContentService } from '../../content/ContentService';
import { AppProjectItemComponent } from '../project-item/project-item.component';
import { GradientService } from '../gradient-service';

@Component({
  imports: [UiItemGridComponent, AppProjectItemComponent],
  providers: [GradientService],
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.html',
})
export class AppProjectsGrid {
  private readonly content = inject(ContentService);
  protected projects = this.content.projects;
}
