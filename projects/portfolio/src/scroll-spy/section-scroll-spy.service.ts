import { Injectable, signal } from '@angular/core';

/**
 * Keep track of the active section id.
 */
@Injectable({
  providedIn: 'root',
})
export class SectionScrollSpyService {
  activeId = signal<string | null | undefined>(null);
}
