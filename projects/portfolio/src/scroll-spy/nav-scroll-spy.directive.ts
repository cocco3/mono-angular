import { Directive, inject, input } from '@angular/core';
import { SectionScrollSpyService } from './section-scroll-spy.service';
import { WindowScrollSpyService } from './window-scroll-spy.service';

@Directive({
  host: {
    '(click)': 'handleClick()',
  },
  selector: '[appNavScrollSpy]',
})
export class NavScrollSpyDirective {
  protected readonly sectionScrollSpy = inject(SectionScrollSpyService);
  protected readonly windowScrollSpy = inject(WindowScrollSpyService);

  sectionId = input.required<string>({ alias: 'appNavScrollSpy' });

  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  protected handleClick() {
    this.windowScrollSpy.disabled.set(true);
    this.sectionScrollSpy.activeId.set(this.sectionId());

    if (this.timeoutId !== null) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.windowScrollSpy.disabled.set(false);
      this.timeoutId = null;
    }, 500);
  }
}
