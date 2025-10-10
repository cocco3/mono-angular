import { Component } from '@angular/core';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppPageSection } from '../components/page-section/page-section.component';
import { AppAboutSection } from '../about/about-section/about-section.component';
import { AppExperienceList } from '../experience/experience-list/experience-list.component';
import { AppProjectsGrid } from '../projects/projects-grid/projects-grid.component';
import { AppVideosGrid } from '../videos/videos-grid/videos-grid.component';
import { SectionScrollSpyDirective } from '../scroll-spy/section-scroll-spy.directive';

@Component({
  selector: 'app-full-page',
  imports: [
    AppHeaderComponent,
    AppPageSection,
    AppAboutSection,
    AppExperienceList,
    AppProjectsGrid,
    AppVideosGrid,
    SectionScrollSpyDirective,
  ],
  templateUrl: './full-page.html',
})
export class FullPageComponent {}
