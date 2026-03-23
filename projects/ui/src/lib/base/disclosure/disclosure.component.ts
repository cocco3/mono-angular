import {
  type AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  NgZone,
  type OnDestroy,
  ViewChild,
} from '@angular/core';
import { DisclosureGroupService } from './disclosure-group.service';

const ANIMATION_DURATION = 200;
const ANIMATION_EASING = 'ease-out';

/**
 * An unstyled, accessible disclosure primitive built on top of the native
 * `<details>` and `<summary>` elements.
 *
 * Enhances the native behavior with smooth height animations while preserving
 * built-in accessibility, keyboard interaction, and browser semantics.
 *
 * Usage:
 * - Apply `ui-disclosure` to a `<details>` element.
 * - Use a `<summary ui-disclosure-title>` as the trigger, or provide a custom summary.
 *
 * Composition:
 * - Multiple disclosures can be grouped by sharing the same `name` attribute,
 *   enabling accordion behavior where only one item is open at a time.
 *
 * Notes:
 * - This is a headless (unstyled) primitive intended for composition.
 * - Consumers are responsible for layout, spacing, and visual styling.
 */
@Component({
  selector: 'details[ui-disclosure]',
  styleUrl: './disclosure.css',
  templateUrl: './disclosure.html',
})
export class UiDisclosureComponent implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLDetailsElement>);
  private readonly ngZone = inject(NgZone);
  private readonly groupService = inject(DisclosureGroupService);

  @ViewChild('content') private contentRef!: ElementRef<HTMLDivElement>;

  private readonly useJsFallback = !CSS.supports(
    'interpolate-size',
    'allow-keywords'
  );
  private currentAnimation: Animation | null = null;
  private groupName: string | null = null;
  private summaryClickHandler?: (e: Event) => void;

  ngAfterViewInit(): void {
    if (!this.useJsFallback) return;

    const details = this.el.nativeElement;

    const name = details.getAttribute('name');
    if (name) {
      this.groupName = name;
      details.removeAttribute('name');
      this.groupService.register(this, name);
    }

    const summary = details.querySelector('summary');
    if (!summary) return;

    this.summaryClickHandler = (e: Event) => {
      e.preventDefault();
      if (details.open) {
        this.collapse();
      } else {
        this.expand();
      }
    };

    this.ngZone.runOutsideAngular(() => {
      summary.addEventListener('click', this.summaryClickHandler!);
    });
  }

  ngOnDestroy() {
    if (this.summaryClickHandler) {
      const summary = this.el.nativeElement.querySelector('summary');
      summary?.removeEventListener('click', this.summaryClickHandler);
    }
    if (this.groupName) {
      this.groupService.unregister(this, this.groupName);
    }
  }

  public expand() {
    if (this.useJsFallback) {
      if (this.groupName) {
        this.groupService.closeOthers(this, this.groupName);
      }
      this.animate(true);
      return;
    }
    this.el.nativeElement.open = true;
  }

  public collapse() {
    if (this.useJsFallback) {
      this.animate(false);
      return;
    }
    this.el.nativeElement.open = false;
  }

  private animate(opening: boolean) {
    const details = this.el.nativeElement;
    const content = this.contentRef.nativeElement;

    const currentHeight = content.offsetHeight;
    this.currentAnimation?.cancel();
    content.style.height = `${currentHeight}px`;
    content.style.overflow = 'hidden';

    if (opening) {
      details.open = true;
      const targetHeight = content.scrollHeight;

      this.currentAnimation = content.animate(
        [{ height: `${currentHeight}px` }, { height: `${targetHeight}px` }],
        {
          duration: ANIMATION_DURATION,
          easing: ANIMATION_EASING,
          fill: 'forwards',
        }
      );
      this.currentAnimation.onfinish = () => {
        content.style.height = '';
        content.style.overflow = '';
        this.currentAnimation?.cancel();
        this.currentAnimation = null;
      };
    } else {
      details.classList.add('is-closing');

      this.currentAnimation = content.animate(
        [{ height: `${currentHeight}px` }, { height: '0px' }],
        {
          duration: ANIMATION_DURATION,
          easing: ANIMATION_EASING,
          fill: 'forwards',
        }
      );
      this.currentAnimation.onfinish = () => {
        details.open = false;
        details.classList.remove('is-closing');
        content.style.height = '';
        content.style.overflow = '';
        this.currentAnimation = null;
      };
    }
  }

  protected isOpen = computed(() => {
    return this.el.nativeElement.open;
  });
}
