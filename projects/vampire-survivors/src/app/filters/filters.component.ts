import { Component, computed, inject } from '@angular/core';
import { UiButtonComponent } from '@cocco3/angular-ui';
import { ItemFilterService } from './filters.service';
import { DataService } from '../../data/DataService';
import type { GameId } from '../../data/types';
import { FilterItemComponent } from '../filter-item/filter-item.component';

type ValueChangeArgs = { checked: boolean; value: string };

@Component({
  imports: [FilterItemComponent, UiButtonComponent],
  selector: 'app-filters',
  styleUrl: './filters.css',
  templateUrl: './filters.html',
})
export class FiltersComponent {
  private readonly data = inject(DataService);
  private readonly itemFilter = inject(ItemFilterService);

  protected selectedGames = this.itemFilter.games$;
  protected selectedPassives = this.itemFilter.passives$;

  protected gamesList = computed(() => {
    return this.data.getAllGames();
  });

  protected baseGamePassives = computed(() => {
    const passives = this.data.getPassives();
    return passives.filter((x) => x.gameId === 'base');
  });

  protected handleClearFilters() {
    this.itemFilter.clearFilters();
  }

  protected handleGameChange({ checked, value }: ValueChangeArgs) {
    const current = this.selectedGames();

    const next = checked
      ? [...current, value as GameId]
      : current.filter((v) => v !== value);

    this.itemFilter.updateFilters({
      game: next,
      passive: this.selectedPassives(),
    });
  }

  protected handlePassiveChange({ checked, value }: ValueChangeArgs) {
    const current = this.selectedPassives();

    const next = checked
      ? [...current, value]
      : current.filter((v) => v !== value);

    this.itemFilter.updateFilters({
      game: this.selectedGames(),
      passive: next,
    });
  }
}
