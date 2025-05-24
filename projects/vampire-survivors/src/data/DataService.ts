import { Injectable } from '@angular/core';
import { baseGameEvolutions } from './base-game';
import { tidesOfFoscariEvolutions } from './tides-of-foscari';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getEvolutions(game: 'base' | 'tides') {
    if (game === 'base') {
      return baseGameEvolutions;
    } else if (game === 'tides') {
      return tidesOfFoscariEvolutions;
    }

    return null;
  }
}
