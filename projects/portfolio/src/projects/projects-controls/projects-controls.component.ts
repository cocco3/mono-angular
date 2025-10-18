import { Component, inject } from '@angular/core';
import { UiIconComponent } from '@cocco3/angular-ui';
import {
  AppProjectsContext,
  type ProjectsViewKinds,
} from '../projects-context';
import { GradientService } from '../gradient-service';

@Component({
  imports: [UiIconComponent],
  selector: 'app-projects-controls',
  styleUrl: './projects-controls.css',
  templateUrl: './projects-controls.html',
})
export class AppProjectsControls {
  private readonly context = inject(AppProjectsContext);
  private readonly gradients = inject(GradientService);

  protected view = this.context.view;

  handleViewChange(value: ProjectsViewKinds) {
    this.context.view.set(value);
    this.gradients.reset();
  }
}
