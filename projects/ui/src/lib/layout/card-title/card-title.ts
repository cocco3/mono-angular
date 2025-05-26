import { Component, ElementRef, forwardRef, Inject } from '@angular/core';

export abstract class UiCardTitleBase {
  abstract isClickable(): boolean;
}

@Component({
  exportAs: 'uiCardTitleButton',
  providers: [
    {
      provide: UiCardTitleBase,
      useExisting: forwardRef(() => UiCardTitleButtonComponent),
    },
  ],
  selector: 'button[ui-card-title]',
  styleUrl: './card-title.css',
  template: '<ng-content/>',
})
export class UiCardTitleButtonComponent extends UiCardTitleBase {
  constructor(
    @Inject(ElementRef)
    public readonly elementRef: ElementRef<HTMLButtonElement>
  ) {
    super();
  }

  override isClickable() {
    return !this.elementRef.nativeElement.disabled;
  }
}

@Component({
  exportAs: 'uiCardTitleAnchor',
  providers: [
    {
      provide: UiCardTitleBase,
      useExisting: forwardRef(() => UiCardTitleAnchorComponent),
    },
  ],
  selector: 'a[ui-card-title]',
  styleUrl: './card-title.css',
  template: '<ng-content/>',
})
export class UiCardTitleAnchorComponent extends UiCardTitleBase {
  constructor(
    @Inject(ElementRef)
    public readonly elementRef: ElementRef<HTMLAnchorElement>
  ) {
    super();
  }

  override isClickable() {
    return !!this.elementRef.nativeElement.href;
  }
}
