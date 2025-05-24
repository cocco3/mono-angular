import { Component, input } from '@angular/core';
import type { Evo } from '../../data/types';
import { EvolutionComponent } from '../evo/evolution';

@Component({
  host: {
    '[style.background-color]': 'background()',
  },
  imports: [EvolutionComponent],
  selector: 'app-evo-list',
  styleUrl: './evo-list.css',
  templateUrl: './evo-list.html',
})
export class EvolutionListComponent {
  background = input.required<string>();
  game = input.required<string>();
  evolutions = input.required<Evo[]>();
}
