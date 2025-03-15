import { Injectable } from '@angular/core';
import { svgIconStore } from '../../icons';
import { type UiIconKind } from './icon.component';

@Injectable({
  providedIn: 'root',
})
export class UiIconService {
  getSvgForName(name: UiIconKind): string {
    return svgIconStore[name];
  }
}
