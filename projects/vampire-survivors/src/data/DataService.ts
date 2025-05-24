import { Injectable } from '@angular/core';
import { baseGameEvolutions } from './base-game';
import { tidesOfFoscariEvolutions } from './tides-of-foscari';
import { legacyOfMoonspellEvolutions } from './legacy-of-moonspell';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getEvolutions(game: 'base' | 'tides' | 'moonspell') {
    if (game === 'base') {
      return baseGameEvolutions;
    } else if (game === 'tides') {
      return tidesOfFoscariEvolutions;
    } else if (game === 'moonspell') {
      return legacyOfMoonspellEvolutions;
    }

    return null;
  }
}
