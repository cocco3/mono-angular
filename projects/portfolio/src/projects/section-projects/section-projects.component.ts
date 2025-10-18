import { Component } from '@angular/core';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppSectionHeading } from '../../components/section-heading/section-heading.component';
import { AppProjectsGrid } from '../projects-grid/projects-grid.component';

@Component({
  imports: [AppPageSection, AppSectionHeading, AppProjectsGrid],
  selector: 'app-section-projects',
  templateUrl: './section-projects.html',
})
export class AppSectionProjects {}
