import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionScrollSpyService {
  activeId = signal<string | null | undefined>(null);
}
