import { Component } from '@angular/core';
import { AppPageSection } from '../../components/page-section/page-section.component';
import { AppProjectsGrid } from '../projects-grid/projects-grid.component';
import { AppProjectsContext } from '../projects-context';
import { GradientService } from '../gradient-service';
import { AppProjectsControls } from '../projects-controls/projects-controls.component';

@Component({
  imports: [AppPageSection, AppProjectsGrid, AppProjectsControls],
  providers: [AppProjectsContext, GradientService],
  selector: 'app-section-projects',
  styleUrl: './section-projects.css',
  templateUrl: './section-projects.html',
})
export class AppSectionProjects {}
