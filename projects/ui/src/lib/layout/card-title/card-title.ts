import { Component, ElementRef, forwardRef, inject } from '@angular/core';

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
  public readonly elementRef = inject(ElementRef<HTMLButtonElement>);

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
  public readonly elementRef = inject(ElementRef<HTMLAnchorElement>);

  override isClickable() {
    return !!this.elementRef.nativeElement.href;
  }
}
