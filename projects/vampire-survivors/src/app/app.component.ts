import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { GameId } from '../data/games';
import { DataService } from '../data/DataService';
import { EvolutionListComponent } from './evo-list/evo-list.component';
import { ItemFilterComponent } from './item-filter/item-filter.component';
import { AppFooterComponent } from './app-footer/app-footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    EvolutionListComponent,
    ItemFilterComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'vampire-survivors';
  private readonly data = inject(DataService);

  protected selectedGameId = signal<GameId | undefined>(undefined);
  protected selectedPassive = signal<string | undefined>(undefined);

  protected allEvos = computed(() => {
    return this.selectedGameId()
      ? this.data
          .getAllEvolutions()
          .filter((x) => x.game.id === this.selectedGameId())
      : this.data.getAllEvolutions();
  });

  protected handleGameIdChange(value: GameId | undefined) {
    this.selectedGameId.set(value);
  }

  protected handlePassiveChange(value: string | undefined) {
    this.selectedPassive.set(value);
  }

  protected handleClearFilters() {
    this.selectedGameId.set(undefined);
    this.selectedPassive.set('');
  }
}
