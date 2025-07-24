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

const cssTemplate = `
:root {
  {{CONTENTS}}
}
`;

const fontVar = (name: string) => `--font-family-${name}`;

const typeVar = (group: string, variant: string) =>
  `--type-${group}-${variant}`;

const transformToVariables = (typography: TypographySets) => {
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

  const code = cssTemplate.replace('{{CONTENTS}}', fonts + '\n\n' + variables);

  return code;
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

    const css = transformToVariables(theme.typographySet);
    const formattedCode = await formatCode(css, 'css');

    fs.appendFileSync(theme.outFilePath, formattedCode);

    console.log(` ↳ FINISHED building typography file`);
  }
};
