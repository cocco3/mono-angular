import { Component, computed, inject, input } from '@angular/core';
import {
  UiButtonComponent,
  UiEmptyComponent,
  UiSlotDirective,
} from '@cocco3/angular-ui';
import type { WeaponEvolution } from '../../data/types';
import { EvolutionComponent } from '../evolution/evolution.component';
import { ItemFilterService } from '../filters/filters.service';

@Component({
  host: {
    '[style.background-color]': 'bgColor()',
  },
  imports: [
    EvolutionComponent,
    UiButtonComponent,
    UiEmptyComponent,
    UiSlotDirective,
  ],
  selector: 'app-evo-list',
  styleUrl: './evo-list.css',
  templateUrl: './evo-list.html',
})
export class EvolutionListComponent {
  private readonly itemFilter = inject(ItemFilterService);

  bgColor = input.required<string>();
  gameName = input.required<string>();
  evolutions = input.required<WeaponEvolution[]>();

  protected filteredEvos = computed(() => {
    const selectedPassives = this.itemFilter.passives$();

    return this.evolutions()
      .filter((evo) =>
        selectedPassives.length
          ? evo.items.find((item) => selectedPassives.includes(item.item.name))
          : evo
      )
      .map((evo) => {
        return {
          ...evo,
          key: evo.items.map((x) => x.item.name.replaceAll(' ', '')).join('-'),
        };
      });
  });

  protected handleClearFilters() {
    this.itemFilter.clearFilters();
  }
}
