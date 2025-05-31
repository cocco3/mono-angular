import { Component, computed, inject } from '@angular/core';
import { UiFormFieldComponent, UiSelectComponent } from '@cocco3/angular-ui';
import { groupBy } from '@cocco3/utils';
import { ItemFilterService } from './item-filter.service';
import { DataService } from '../../data/DataService';
import { allGames } from '../../data/games';
import type { GameId } from '../../data/types';

@Component({
  host: {
    class: 'theme-dark',
  },
  imports: [UiFormFieldComponent, UiSelectComponent],
  selector: 'app-item-filter',
  styleUrl: './item-filter.css',
  templateUrl: './item-filter.html',
})
export class ItemFilterComponent {
  private readonly data = inject(DataService);
  private readonly itemFilter = inject(ItemFilterService);

  protected selectedGameId = this.itemFilter.gameId$;
  protected selectedPassive = this.itemFilter.passive$;

  protected gamesList = computed(() => {
    return this.data.getAllGames();
  });

  protected passivesList = computed(() => {
    const passives = this.data.getPassives();

    const grouped = groupBy(passives, (item) => {
      const game = allGames.find((x) => x.id === item.gameId);
      return game?.name || item.gameId;
    });

    const list = Object.entries(grouped).map(([game, items]) => {
      return { game, items };
    });

    return list;
  });

  protected handleGameChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.itemFilter.updateFilters({
      gameId: target.value as GameId,
      passive: this.selectedPassive(),
    });
  }

  protected handlePassiveChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.itemFilter.updateFilters({
      gameId: this.selectedGameId(),
      passive: target.value,
    });
  }
}
