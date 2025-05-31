import { Injectable, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { type GameId } from '../../data/games';

type ItemFilters = {
  gameId: GameId;
  passive: string;
};

@Injectable({
  providedIn: 'root',
})
export class ItemFilterService {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private _gameId = signal<GameId | undefined>(undefined);
  private _passive = signal<string | undefined>(undefined);

  public readonly gameId$ = this._gameId.asReadonly();
  public readonly passive$ = this._passive.asReadonly();

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this._gameId.set(params['gameId']);
      this._passive.set(params['passive']);
    });
  }

  clearFilters() {
    this.updateFilters({ gameId: undefined, passive: undefined });
  }

  updateFilters(values: Partial<ItemFilters>) {
    this._gameId.set(values.gameId);
    this._passive.set(values.passive);

    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: {
        gameId: values.gameId || null,
        passive: values.passive || null,
      },
    });
  }
}
