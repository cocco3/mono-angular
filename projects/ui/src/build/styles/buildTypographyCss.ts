import * as fs from 'fs-extra';
import { Fonts, type Typography, typography } from '../../lib/styles';
import {
  anyModifiedSourceFiles,
  fileCommentHeader,
  formatCode,
} from '../utils';

const OUT_FILE_PATH = './projects/ui/src/css/typography.css';

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const fontVar = (name: string) => `--font-family-${name}`;

const typeVar = (group: string, variant: string) =>
  `--type-${group}-${variant}`;

const transformToVariables = async (
  typography: Typography,
  selector: string
) => {
  const fonts = Object.entries(Fonts)
    .map(([fontName, fontValue]) => `${fontVar(fontName)}: ${fontValue};`)
    .join('\n');

  const variables = Object.values(typography)
    .map((group) =>
      Object.entries(group.values)
        .map(
          ([variantKey, variant]) =>
            `${typeVar(group.id, variantKey)}:
              ${variant.size}/${variant.lineHeight} ${`var(${fontVar(variant.font)})`};`
        )
        .join('\n')
    )
    .join('\n\n');

  const code = template
    .replace('{{SELECTOR}}', selector)
    .replace('{{CONTENTS}}', fonts + '\n\n' + variables);

  const formattedCode = await formatCode(code, 'css');

  return formattedCode;
};

export const buildTypographyCss = async () => {
  const hasModifiedSourceFiles = anyModifiedSourceFiles(OUT_FILE_PATH, [
    './projects/ui/src/lib/styles/typography.ts',
  ]);

  if (!hasModifiedSourceFiles) {
    console.log('SKIPPING build:typography - no modified files');
    return;
  }

  console.log(`Generating new typography file: ${OUT_FILE_PATH}`);

  fs.outputFileSync(OUT_FILE_PATH, fileCommentHeader);

  const typographyCss = await transformToVariables(typography, ':root');
  fs.appendFileSync(OUT_FILE_PATH, typographyCss);
};
