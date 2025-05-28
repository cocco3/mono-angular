import { Component, computed, inject, input, output } from '@angular/core';
import { UiFormFieldComponent, UiSelectComponent } from '@cocco3/angular-ui';
import { DataService } from '../../data/DataService';
import type { GameId, Item } from '../../data/types';
import { allGames } from '../../data/games';

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
  selectedGameId = input<GameId | undefined>(undefined);
  selectedPassive = input<string | undefined>(undefined);

  readonly gameIdChanged = output<GameId | undefined>();
  readonly passiveChanged = output<string | undefined>();

  protected gamesList = computed(() => {
    return this.data.getAllGames();
  });

  protected passivesList = computed(() => {
    const passives = this.data.getPassives();

    /** TODO: replace with Object.groupBy() */
    const grouped = passives.reduce(
      (acc, item) => {
        const game = allGames.find((x) => x.id === item.gameId);
        const key = game?.name || item.gameId;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      },
      {} as Record<string, Item[]>
    );

    const arr = Object.entries(grouped).map(([game, items]) => {
      return { game, items };
    });

    return arr;
  });

  protected handleGameChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.gameIdChanged.emit(target.value as GameId);
  }

  protected handlePassiveChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.passiveChanged.emit(target.value);
  }
}
