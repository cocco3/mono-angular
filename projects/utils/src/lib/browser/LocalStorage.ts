export class LocalStorage<Map extends Record<string, unknown>> {
  constructor(private readonly storage = window.localStorage) {}

  get<K extends keyof Map>(key: K): Map[K] | null {
    const raw = this.storage.getItem(key as string);
    if (raw === null) return null;

    try {
      return JSON.parse(raw) as Map[K];
    } catch {
      console.warn(`Failed to parse localStorage item for key: ${String(key)}`);
      return null;
    }
  }

  set<K extends keyof Map>(key: K, value: Map[K]) {
    try {
      const serialized = JSON.stringify(value);
      this.storage.setItem(key as string, serialized);
    } catch {
      console.error(`Failed to serialize value for key: ${String(key)}`);
    }
  }

  remove<K extends keyof Map>(key: K) {
    this.storage.removeItem(key as string);
  }

  clearAll(): void {
    this.storage.clear();
  }

  hasKey<K extends keyof Map>(key: K): boolean {
    return this.storage.getItem(key as string) !== null;
  }
}
