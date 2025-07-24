import * as fs from 'fs-extra';
import { type TypographySets, defaultThemeTypography } from '../../lib/styles';
import { shouldGenerateFile, fileCommentHeader, formatCode } from '../utils';

const themes = [
  {
    srcFiles: ['./projects/ui/src/lib/styles/typography.ts'],
    outFilePath: './projects/ui/src/css/typography.css',
    typographySet: defaultThemeTypography,
  },
];

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const fontVar = (name: string) => `--font-family-${name}`;

const typeVar = (group: string, variant: string) =>
  `--type-${group}-${variant}`;

const transformToVariables = async (
  typography: TypographySets,
  selector: string
) => {
  const fonts = Object.entries(typography)
    .map(([_, font]) => `${fontVar(font.id)}: ${font.family};`)
    .join('\n');

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

  const code = template
    .replace('{{SELECTOR}}', selector)
    .replace('{{CONTENTS}}', fonts + '\n\n' + variables);

  const formattedCode = await formatCode(code, 'css');

  return formattedCode;
};

export const buildTypographyCss = async () => {
  for (const theme of themes) {
    console.log(`\nCreating "${theme.outFilePath}"`);

    const hasModifiedSourceFiles = shouldGenerateFile(
      theme.outFilePath,
      theme.srcFiles
    );

    if (!hasModifiedSourceFiles) {
      console.log(` ↳ SKIPPED - No modified source files`);
      return;
    }

    fs.outputFileSync(theme.outFilePath, fileCommentHeader);

    const typographyCss = await transformToVariables(
      theme.typographySet,
      ':root'
    );
    fs.appendFileSync(theme.outFilePath, typographyCss);

    console.log(` ↳ FINISHED building typography file`);
  }
};
