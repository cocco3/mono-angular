import * as fs from 'fs-extra';
import * as path from 'path';
import type {
  ThemeTypographySets,
  ThemeColorSets,
  ThemeIcons,
} from '@cocco3/styles';

/*********************************
 * colors
 */

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

/*********************************
 * typography
 */

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

/*********************************
 * icons
 */

function svgToDataUri(svg: string, fillColor?: string) {
  if (fillColor) {
    // Inject or override fill on <svg> and its children
    svg = svg.replace(/<svg([^>]*)>/, `<svg$1 fill="${fillColor}">`);
    svg = svg.replace(/fill="[^"]*"/g, `fill="${fillColor}"`);
  }

  // Remove line breaks and unnecessary whitespace
  const cleaned = svg
    .replace(/\n+/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Encode special characters
  const encoded = encodeURIComponent(cleaned)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');

  // Prefix with data URI scheme
  return `data:image/svg+xml,${encoded}`;
}

export const transformIconVariables = (icons: ThemeIcons) => {
  const baseDir = icons.directory;
  const vars = Object.entries(icons.values)
    .map(([name, icon]) => {
      const filePath = path.resolve(path.join(baseDir, icon.file));
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const dataUri = svgToDataUri(fileContents, icon.color);
      return `--icon-${name}: url(${dataUri});`;
    })
    .join('\n');

  return vars;
};
