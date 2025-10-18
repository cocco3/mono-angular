import { Component } from '@angular/core';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppSectionHeading } from '../../components/section-heading/section-heading.component';
import { AppExperienceList } from '../experience-list/experience-list.component';

@Component({
  imports: [AppPageSection, AppSectionHeading, AppExperienceList],
  selector: 'app-section-experience',
  templateUrl: './section-experience.html',
})
export class AppSectionExperience {}
