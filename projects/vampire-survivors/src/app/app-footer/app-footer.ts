import { Component, inject } from '@angular/core';
import { formatIsoDate } from '@cocco3/utils';
import { EnvironmentService } from '../EnvironmentService';

@Component({
  host: {
    class: 'theme-dark',
  },
  selector: 'app-footer',
  styleUrl: './app-footer.css',
  templateUrl: './app-footer.html',
})
export class AppFooterComponent {
  private readonly env = inject(EnvironmentService);

  protected issuesUrl =
    'https://github.com/cocco3/mono-angular/issues/new?labels=vampire-survivors';

  protected posterUrl =
    'https://www.reddit.com/r/VampireSurvivors/comments/1jwv0bd/weapon_evolution_guide_incl_dlc_as_of_update_113/';

  private formattedDate = formatIsoDate(this.env.config.buildDate, {
    date: 'long',
  });
  protected lastUpdatedDate = `Last updated: ${this.formattedDate}`;
}
