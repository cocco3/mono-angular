import { Component, input } from '@angular/core';
import type { WeaponEvolution } from '../../data/types';
import { ItemComponent } from '../item/item.component';
import { EvoOperatorComponent } from '../evo-operator/evo-operator.component';

@Component({
  imports: [ItemComponent, EvoOperatorComponent],
  selector: 'app-evolution',
  styleUrl: './evolution.css',
  templateUrl: './evolution.html',
})
export class EvolutionComponent {
  evo = input.required<WeaponEvolution>();
}
