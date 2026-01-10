declare const __brand: unique symbol;

export type Branded<T, B extends string> = T & { [__brand]: B };

export type Seconds = Branded<number, 'Seconds'>;
export function asSeconds(value: number) {
  return value as Seconds;
}

export type Milliseconds = Branded<number, 'Milliseconds'>;
export function asMilliseconds(value: number) {
  return value as Milliseconds;
}
