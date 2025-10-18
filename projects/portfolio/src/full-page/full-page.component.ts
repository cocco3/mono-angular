import { Component } from '@angular/core';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppSectionAbout } from '../about/section-about/section-about.component';
import { AppSectionProjects } from '../projects/section-projects/section-projects.component';
import { AppVideosProjects } from '../videos/section-videos/section-videos.component';
import { AppSectionExperience } from '../experience/section-experience/section-experience.component';

@Component({
  selector: 'app-full-page',
  imports: [
    AppHeaderComponent,
    AppSectionAbout,
    AppSectionExperience,
    AppSectionProjects,
    AppVideosProjects,
  ],
  templateUrl: './full-page.html',
})
export class FullPageComponent {}
