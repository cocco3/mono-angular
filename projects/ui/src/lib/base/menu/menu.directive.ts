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
import {
  UiFloating,
  type UiFloatingPlacement,
  //  uniqueId,
} from '@cocco3/utils';

@Directive({
  exportAs: 'uiMenu',
  host: {
    popover: 'manual',
  },
  selector: '[uiMenu]',
})
export class UiMenuDirective implements OnDestroy, OnInit {
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

  public showMenu() {
    this.el.nativeElement.showPopover?.();
    this.updatePosition();
  }

  public hideMenu() {
    this.el.nativeElement.hidePopover?.();
  }

  public toggleMenu() {
    const popoverEl = this.el.nativeElement;
    const isOpen = popoverEl.matches(':popover-open');

    if (isOpen) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  private initAria() {
    //todo: https://css-tricks.com/clarifying-the-relationship-between-popovers-and-dialogs/
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
