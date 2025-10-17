import { Injectable, signal } from '@angular/core';

@Injectable()
export class UiCarouselContext {
  forceStop = signal<boolean>(false);
}
