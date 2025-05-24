import { Component, input } from '@angular/core';
import type { Evo } from '../../data/types';
import { ItemComponent } from '../item/item';

@Component({
  imports: [ItemComponent],
  selector: 'app-evolution',
  styleUrl: './evolution.css',
  templateUrl: './evolution.html',
})
export class EvolutionComponent {
  evo = input.required<Evo>();
}
