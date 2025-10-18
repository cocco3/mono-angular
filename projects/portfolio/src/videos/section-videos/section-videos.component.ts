import { Component } from '@angular/core';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppSectionHeading } from '../../components/section-heading/section-heading.component';
import { AppVideosGrid } from '../videos-grid/videos-grid.component';

@Component({
  imports: [AppPageSection, AppSectionHeading, AppVideosGrid],
  selector: 'app-section-videos',
  templateUrl: './section-videos.html',
})
export class AppVideosProjects {}
