import { colorPrimitives } from './colorPrimitives';

export const colorNameLookup = (hexToFind: string) => {
  let name = '';

  for (const [key, item] of Object.entries(colorPrimitives)) {
    const found = Object.entries(item.values).find(
      ([_weight, hex]) => hex === hexToFind
    );

    if (found) {
      name = `${key}-${found[0]}`;
      break;
    }
  }

  return name;
};
