import * as fs from 'fs-extra';
import { defaultTheme, vampsTheme } from '../../lib/styles';
import { fileCommentHeader, formatCode, shouldGenerateFile } from '../utils';
import {
  transformColorVariables,
  transformFontFamilyVariables,
  transformTypographyVariables,
} from './transformVariables';

const themes = [
  {
    srcFiles: [
      './projects/ui/src/lib/styles/colorPrimitives.ts',
      './projects/ui/src/lib/styles/defaultTheme.ts',
    ],
    outFilePath: './projects/ui/src/css/theme-default.css',
    theme: defaultTheme,
  },
  {
    srcFiles: [
      './projects/ui/src/lib/styles/colorPrimitives.ts',
      './projects/ui/src/lib/styles/defaultTheme.ts',
      './projects/ui/src/lib/styles/vampsTheme.ts',
    ],
    outFilePath: './projects/ui/src/css/theme-vamps.css',
    theme: vampsTheme,
  },
];

const cssTemplate = `
:root {
  {{FONTS}}

  {{TYPOGRAPHY}}

  {{COLORS}}
}

html {
  color-scheme: light dark;
}

.light-mode {
  color-scheme: light;
}

.dark-mode {
  color-scheme: dark;
}
`;

export const buildThemesCss = async () => {
  for (const theme of themes) {
    console.log(`\nCreating "${theme.outFilePath}"`);

    const hasModifiedSourceFiles = shouldGenerateFile(
      theme.outFilePath,
      theme.srcFiles
    );

    if (!hasModifiedSourceFiles) {
      console.log(` ↳ SKIPPED - No modified source files`);
      continue;
    }

    fs.outputFileSync(theme.outFilePath, fileCommentHeader);

    const fontVars = transformFontFamilyVariables(theme.theme.typography);
    const typographyVars = transformTypographyVariables(theme.theme.typography);
    const colorVars = transformColorVariables(theme.theme.colors);

    const css = cssTemplate
      .replace('{{FONTS}}', fontVars)
      .replace('{{TYPOGRAPHY}}', typographyVars)
      .replace('{{COLORS}}', colorVars);

    const formattedCode = await formatCode(css, 'css');

    fs.appendFileSync(theme.outFilePath, formattedCode);

    console.log(` ↳ FINISHED building theme file`);
  }
};
