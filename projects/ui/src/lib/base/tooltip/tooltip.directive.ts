import {
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  Renderer2,
  type OnDestroy,
  type OnInit,
} from '@angular/core';
import { uniqueId } from '@cocco3/utils';
import { UiFloating, type UiFloatingPlacement } from './UiFloating';

@Directive({
  exportAs: 'uiTooltip',
  host: {
    popover: 'manual',
    role: 'tooltip',
  },
  selector: '[uiTooltip]',
})
export class UiTooltipDirective implements OnDestroy, OnInit {
  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private floating!: UiFloating;

  anchor = input.required<HTMLElement>();
  placement = input.required<UiFloatingPlacement>();
  offset = input(0, { transform: numberAttribute });

  private cleanup?: () => void;

  private updatePosition() {
    this.cleanup = this.floating.calcPosition((x, y) => {
      this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
    });
  }

  public showTooltip() {
    this.el.nativeElement.showPopover?.();
    this.updatePosition();
  }

  public hideTooltip() {
    this.el.nativeElement.hidePopover?.();
  }

  public toggleTooltip() {
    const popoverEl = this.el.nativeElement;
    const isOpen = popoverEl.matches(':popover-open');

    if (isOpen) {
      this.hideTooltip();
    } else {
      this.showTooltip();
    }
  }

  private initAria() {
    let tooltipId = this.el.nativeElement.id;

    if (!tooltipId) {
      tooltipId = uniqueId();
      this.el.nativeElement.id = tooltipId;
    }

    this.renderer.setAttribute(this.anchor(), 'aria-describedby', tooltipId);
  }

  ngOnInit() {
    this.initAria();

    this.floating = new UiFloating(this.el.nativeElement, this.anchor(), {
      offset: this.offset(),
      placement: this.placement(),
      edgePadding: 8,
    });
  }

  ngOnDestroy() {
    this.cleanup?.();
  }
}
