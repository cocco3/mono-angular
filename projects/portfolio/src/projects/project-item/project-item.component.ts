import { Component, computed, input } from '@angular/core';
import { UiIconComponent } from '@cocco3/angular-ui';
import { uniqueId } from '@cocco3/utils';
import { AppTagComponent } from '../../components/tag/tag.component';

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
  name = input.required<string>();
  tech = input.required<string[]>();
  description = input.required<string>();
  githubUrl = input.required<string>();
  projectUrl = input.required<string>();
  background = input.required<string>();

  protected githubLinkLabel = computed(() => {
    return `GitHub link for ${this.name()}`;
  });

  protected headingId = uniqueId();
}
