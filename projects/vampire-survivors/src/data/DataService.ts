import { Injectable } from '@angular/core';
import type { Game } from './types';
import { baseGameEvolutions } from './base-game';
import { legacyOfMoonspellEvolutions } from './legacy-of-moonspell';
import { tidesOfFoscariEvolutions } from './tides-of-foscari';
import { emergencyMeetingEvolutions } from './emergency-meeting';
import { operationGunsEvolutions } from './operation-guns';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getEvolutions(game: Game) {
    switch (game) {
      case 'base':
        return baseGameEvolutions;
      case 'foscari':
        return tidesOfFoscariEvolutions;
      case 'moonspell':
        return legacyOfMoonspellEvolutions;
      case 'emergency-meeting':
        return emergencyMeetingEvolutions;
      case 'operation-guns':
        return operationGunsEvolutions;
      default:
        return [];
    }
  }
}
