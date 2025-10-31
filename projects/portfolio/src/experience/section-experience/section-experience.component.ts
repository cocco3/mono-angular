import { Component } from '@angular/core';
import {
  UiButtonComponent,
  UiIconComponent,
  UiSlotDirective,
} from '@cocco3/angular-ui';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppExperienceList } from '../experience-list/experience-list.component';
import { injectAnalytics } from '../../analytics';

@Component({
  imports: [
    AppPageSection,
    AppExperienceList,
    UiButtonComponent,
    UiIconComponent,
    UiSlotDirective,
  ],
  selector: 'app-section-experience',
  templateUrl: './section-experience.html',
})
export class AppSectionExperience {
  private readonly analytics = injectAnalytics();

  protected handleResumeClick() {
    this.analytics.trackEvent({ name: 'resume_viewed' });
  }
}
