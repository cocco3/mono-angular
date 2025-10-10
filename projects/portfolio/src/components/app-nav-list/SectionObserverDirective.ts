import {
  Directive,
  ElementRef,
  type OnInit,
  type OnDestroy,
  input,
  inject,
} from '@angular/core';
import { SectionObserverService } from './SectionObserverService';

@Directive({
  selector: '[appObserveSection]',
  standalone: true,
})
export class ObserveSectionDirective implements OnInit, OnDestroy {
  private readonly sectionObserver = inject(SectionObserverService);
  private readonly el: ElementRef<HTMLElement> = inject(
    ElementRef<HTMLElement>
  );

  sectionId = input.required<string>({ alias: 'appObserveSection' });

  ngOnInit() {
    this.sectionObserver.observe(this.sectionId(), this.el.nativeElement);
  }

  ngOnDestroy() {
    this.sectionObserver.unobserve(this.sectionId());
  }
}
