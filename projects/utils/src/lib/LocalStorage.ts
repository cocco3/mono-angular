export class LocalStorage {
  constructor(private readonly storage = window.localStorage) {}

  getItem<T>(key: string) {
    const raw = this.storage.getItem(key);
    if (raw === null) return null;

    try {
      return JSON.parse(raw) as T;
    } catch {
      console.warn(`Failed to parse localStorage item for key: ${key}`);
      return null;
    }
  }

  setItem<T>(key: string, value: T) {
    try {
      const serialized = JSON.stringify(value);
      this.storage.setItem(key, serialized);
    } catch {
      console.error(`Failed to serialize value for key: ${key}`);
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clearAll(): void {
    this.storage.clear();
  }

  hasKey(key: string) {
    return this.storage.getItem(key) !== null;
  }
}
