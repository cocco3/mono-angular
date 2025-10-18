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
import { UiPopover, type UiPopoverPlacement, uniqueId } from '@cocco3/utils';

@Directive({
  exportAs: 'uiPopover',
  host: {
    popover: 'manual',
    '[role]': 'role()',
  },
  selector: '[uiPopover]',
})
export class UiPopoverDirective implements OnDestroy, OnInit {
  private readonly el: ElementRef<HTMLElement> = inject(
    ElementRef<HTMLElement>
  );
  private readonly renderer = inject(Renderer2);
  private floating!: UiPopover;

  role = input.required<'tooltip' | 'menu'>({ alias: 'uiPopover' });
  anchor = input.required<HTMLElement>();
  placement = input.required<UiPopoverPlacement>();
  offset = input(0, { transform: numberAttribute });

  private cleanup?: () => void;

  private updatePosition() {
    this.cleanup = this.floating.calcPosition((x, y) => {
      this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
      this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
    });
  }

  public show() {
    this.el.nativeElement.showPopover?.();
    this.updatePosition();
  }

  public hide() {
    this.el.nativeElement.hidePopover?.();
  }

  public toggle() {
    const popoverEl = this.el.nativeElement;
    const isOpen = popoverEl.matches(':popover-open');

    if (isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }

  private initAriaTooltip() {
    let tooltipId = this.el.nativeElement.id;

    if (!tooltipId) {
      tooltipId = uniqueId();
      this.el.nativeElement.id = tooltipId;
    }

    this.renderer.setAttribute(this.anchor(), 'aria-describedby', tooltipId);
  }

  private initAriaMenu() {
    this.renderer.setAttribute(this.anchor(), 'aria-haspopup', 'menu');
  }

  private initAria() {
    if (this.role() === 'menu') {
      this.initAriaMenu();
    } else if (this.role() === 'tooltip') {
      this.initAriaTooltip();
    }
  }

  ngOnInit() {
    this.initAria();

    this.floating = new UiPopover(this.el.nativeElement, this.anchor(), {
      offset: this.offset(),
      placement: this.placement(),
      edgePadding: 8,
    });
  }

  ngOnDestroy() {
    this.cleanup?.();
  }
}
