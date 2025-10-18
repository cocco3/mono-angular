import { Component } from '@angular/core';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppVideosGrid } from '../videos-grid/videos-grid.component';

@Component({
  imports: [AppPageSection, AppVideosGrid],
  selector: 'app-section-videos',
  templateUrl: './section-videos.html',
})
export class AppVideosProjects {}
