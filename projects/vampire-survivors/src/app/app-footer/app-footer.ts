import { Component, inject } from '@angular/core';
import { formatIsoDate } from '@cocco3/utils';
import { EnvironmentService } from '../EnvironmentService';
import { injectAnalytics } from '../analytics';

@Component({
  selector: 'app-footer',
  styleUrl: './app-footer.css',
  templateUrl: './app-footer.html',
})
export class AppFooterComponent {
  private readonly env = inject(EnvironmentService);
  private readonly analytics = injectAnalytics();

  protected links = [
    {
      label: 'Report Issue',
      url: 'https://github.com/cocco3/mono-angular/issues/new?labels=vampire-survivors',
      click: () => this.handleIssuesClick(),
    },
    {
      label: 'PNG Guide',
      url: 'https://www.reddit.com/r/VampireSurvivors/comments/1jwv0bd/weapon_evolution_guide_incl_dlc_as_of_update_113/',
      click: () => this.handleGuideClick(),
    },
    {
      label: 'Build Planner',
      url: 'https://danmer.github.io/vs-build-planner/',
      click: () => this.handlePlannerClick(),
    },
  ] as const;

  private formattedDate = formatIsoDate(this.env.config.buildDate, {
    date: 'long',
  });
  protected lastUpdatedDate = `Last updated: ${this.formattedDate}`;

  private handleIssuesClick() {
    this.analytics.trackEvent({ name: 'issues_clicked' });
  }

  private handleGuideClick() {
    this.analytics.trackEvent({ name: 'guide_clicked' });
  }

  private handlePlannerClick() {
    this.analytics.trackEvent({ name: 'planner_clicked' });
  }
}
