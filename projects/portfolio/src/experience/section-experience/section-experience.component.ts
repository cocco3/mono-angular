import { Component } from '@angular/core';
import {
  UiButtonComponent,
  UiIconComponent,
  UiSlotDirective,
} from '@cocco3/angular-ui';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppExperienceList } from '../experience-list/experience-list.component';

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
export class AppSectionExperience {}
