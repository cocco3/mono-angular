import { Injectable } from '@angular/core';
import { LocalStorage } from '@cocco3/utils';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly localStorage = new LocalStorage();

  getItem<T>(key: string) {
    return this.localStorage.getItem<T>(key);
  }

  setItem<T>(key: string, value: T) {
    this.localStorage.setItem<T>(key, value);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  clearAll(): void {
    this.localStorage.clearAll();
  }

  hasKey(key: string) {
    return this.localStorage.hasKey(key);
  }
}
