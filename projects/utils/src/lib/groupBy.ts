/**
 * TODO: eventually can be replaced with the newer Object.groupBy()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
 */
export function groupBy<K extends PropertyKey, T>(
  items: Iterable<T>,
  keySelector: (item: T, index: number) => K
): Partial<Record<K, T[]>> {
  return Array.from(items).reduce<Partial<Record<K, T[]>>>(
    (acc, item, index) => {
      const key = keySelector(item, index);
      (acc[key] ||= []).push(item);
      return acc;
    },
    {}
  );
}
