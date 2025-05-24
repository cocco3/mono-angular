import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
})
export class ItemComponent {
  name = input.required<string>();
  max = input(false);
  wiki = input.required<string>();
  image = input.required<string>();
}
