import type { ThemeTypographySets, ThemeColorSets } from '../../lib/styles';

export const transformColorVariables = (colors: ThemeColorSets) => {
  const variables = Object.values(colors)
    .map((group) =>
      Object.entries(group.values)
        .map(
          ([key, value]) =>
            `--${group.id}-${key}: light-dark(${value[0]}, ${value[1]});`
        )
        .join('\n')
    )
    .join('\n\n');

  return variables;
};

const fontVar = (name: string) => `--font-family-${name}`;

export const transformFontFamilyVariables = (
  typography: ThemeTypographySets
) => {
  const fonts = Object.entries(typography)
    .map(([_, font]) => `${fontVar(font.id)}: ${font.family};`)
    .join('\n');

  return fonts;
};

export const transformTypographyVariables = (
  typography: ThemeTypographySets
) => {
  const typeVar = (group: string, variant: string) =>
    `--type-${group}-${variant}`;

  const variables = Object.values(typography)
    .map((group) =>
      Object.entries(group.values)
        .map(
          ([variantKey, variant]) => `${typeVar(group.id, variantKey)}:
              ${variant.size}/${variant.lineHeight} var(${fontVar(group.id)});`
        )
        .join('\n')
    )
    .join('\n\n');

  return variables;
};
