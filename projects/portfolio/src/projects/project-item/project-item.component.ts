import { Component, computed, inject, input } from '@angular/core';
import { UiIconComponent } from '@cocco3/angular-ui';
import { uniqueId } from '@cocco3/utils';
import { AppTagComponent } from '../../components/tag/tag.component';
import { GradientService } from '../gradient-service';

@Component({
  host: {
    '[attr.aria-labelledby]': 'headingId',
  },
  imports: [AppTagComponent, UiIconComponent],
  selector: 'article[app-project-item]',
  styleUrl: './project-item.css',
  templateUrl: './project-item.html',
})
export class AppProjectItemComponent {
  private readonly gradients = inject(GradientService);

  name = input.required<string>();
  tech = input.required<string[]>();
  description = input.required<string>();
  githubUrl = input.required<string>();
  projectUrl = input.required<string>();
  bannerSrc = input<string>();
  background = this.gradients.next();

  protected githubLinkLabel = computed(() => {
    return `GitHub link for ${this.name()}`;
  });

  protected headingId = uniqueId();
}
