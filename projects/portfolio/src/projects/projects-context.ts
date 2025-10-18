import { Injectable, signal } from '@angular/core';

export type ProjectsViewKinds = 'grid' | 'carousel';

@Injectable()
export class AppProjectsContext {
  view = signal<ProjectsViewKinds>('grid');
}
