import { Injectable } from '@angular/core';
import type { GameId } from './types';
import { allPassives } from './passives';
import { baseGameEvolutions } from './base-game';
import { legacyOfMoonspellEvolutions } from './legacy-of-moonspell';
import { tidesOfFoscariEvolutions } from './tides-of-foscari';
import { emergencyMeetingEvolutions } from './emergency-meeting';
import { operationGunsEvolutions } from './operation-guns';
import { allGames } from './games';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getPassives() {
    return allPassives.sort((a, b) => a.name.localeCompare(b.name));
  }

  getAllGames() {
    return allGames;
  }

  getAllEvolutions() {
    return allGames.map((game) => {
      return {
        game,
        evos: this.getEvolutions(game.id),
      };
    });
  }

  private getEvolutions(game: GameId) {
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
