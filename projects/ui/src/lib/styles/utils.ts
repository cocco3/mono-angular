import { colorPrimitives } from './colorPrimitives';
import type { ThemeColorSets, ThemeTypographySets } from './types';

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

export const colorDictionary = {
  text: {
    name: 'Text',
    description: 'Text fill colors.',
  },
  border: {
    name: 'Border',
    description: 'Border colors.',
  },
  foreground: {
    name: 'Foreground',
    description: 'Non-text foreground elements.',
  },
  background: {
    name: 'Background',
    description: 'Background colors.',
  },
  button: {
    name: 'Button',
    description: 'Button component.',
  },
} satisfies Record<keyof ThemeColorSets, { name: string; description: string }>;

export const typographyDictionary = {
  display: {
    name: 'Display',
    description:
      'Use for headings, hero text, or any large attention-grabbing text.',
  },
  text: {
    name: 'Text',
    description:
      'Use for paragraphs, descriptions, UI labels, and when readability is key.',
  },
  mono: {
    name: 'Monospace',
    description:
      'Use for for code, structured data, or when visual alignment is important.',
  },
} satisfies Record<
  keyof ThemeTypographySets,
  { name: string; description: string }
>;
