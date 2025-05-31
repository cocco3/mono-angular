import {
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  Renderer2,
  type OnDestroy,
} from '@angular/core';

import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';

export const UiPopoverPlacements = {
  'above-start': 'top-start',
  'above-center': 'top',
  'above-end': 'top-end',

  'after-start': 'right-start',
  'after-center': 'right',
  'after-end': 'right-end',

  'below-start': 'bottom-start',
  'below-center': 'bottom',
  'below-end': 'bottom-end',

  'before-start': 'left-start',
  'before-center': 'left',
  'before-end': 'left-end',
} as const;
export type UiPopoverPlacement = keyof typeof UiPopoverPlacements;

@Directive({
  exportAs: 'uiPopover',
  host: { popover: 'manual' },
  selector: '[uiPopover]',
})
export class UiPopoverDirective implements OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  anchor = input.required<HTMLElement>();
  placement = input<UiPopoverPlacement>('after-center');
  offset = input(0, { transform: numberAttribute });

  private cleanup?: () => void;

  private updatePosition() {
    const popoverEl = this.el.nativeElement;
    const anchorEl = this.anchor();

    if (!anchorEl) {
      console.error('uiPopover: Must provie an anchor element.');
      return;
    }

    this.cleanup = autoUpdate(anchorEl, popoverEl, () => {
      computePosition(anchorEl, popoverEl, {
        middleware: [offset(this.offset()), flip(), shift({ padding: 8 })],
        placement: UiPopoverPlacements[this.placement()],
      }).then(({ x, y }) => {
        this.renderer.setStyle(popoverEl, 'left', `${x}px`);
        this.renderer.setStyle(popoverEl, 'top', `${y}px`);
      });
    });
  }

  public showPopover() {
    this.el.nativeElement.showPopover?.();
    this.updatePosition();
  }

  public hidePopover() {
    this.el.nativeElement.hidePopover?.();
  }

  public togglePopover() {
    const popoverEl = this.el.nativeElement;
    const isOpen = popoverEl.matches(':popover-open');

    if (isOpen) {
      this.hidePopover();
    } else {
      this.showPopover();
    }
  }

  ngOnDestroy() {
    this.cleanup?.();
  }
}
