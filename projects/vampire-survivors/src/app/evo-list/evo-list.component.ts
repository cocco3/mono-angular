import { Component, computed, input, output } from '@angular/core';
import {
  UiButtonComponent,
  UiEmptyComponent,
  UiSlotDirective,
} from '@cocco3/angular-ui';
import type { WeaponEvolution } from '../../data/types';
import { EvolutionComponent } from '../evolution/evolution.component';

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
  bgColor = input.required<string>();
  gameName = input.required<string>();
  evolutions = input.required<WeaponEvolution[]>();
  selectedPassive = input<string | undefined>();

  filteredEvos = computed(() => {
    const filter = this.selectedPassive();
    return this.evolutions().filter((evo) =>
      filter ? evo.items.find((item) => item.item.name === filter) : evo
    );
  });

  readonly clearFilters = output();

  protected handleClearFilters() {
    this.clearFilters.emit();
  }
}
