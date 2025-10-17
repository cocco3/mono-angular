import { Component } from '@angular/core';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppExperienceList } from '../experience-list/experience-list.component';

@Component({
  imports: [AppPageSection, AppExperienceList],
  selector: 'app-section-experience',
  templateUrl: './section-experience.html',
})
export class AppSectionExperience {}
