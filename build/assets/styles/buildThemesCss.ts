import * as fs from 'fs-extra';
import { defaultTheme, vampsTheme } from '@cocco3/styles';
import { fileCommentHeader, formatCode, shouldGenerateFile } from '../utils';
import {
  transformColorVariables,
  transformFontFamilyVariables,
  transformIconVariables,
  transformTypographyVariables,
} from './transformVariables';

const themes = [
  {
    srcFiles: [
      'projects/styles/src/lib/colorPrimitives.ts',
      'projects/styles/src/lib/defaultTheme.ts',
    ],
    outFilePath: './projects/styles/src/css/theme-default.css',
    theme: defaultTheme,
  },
  {
    srcFiles: [
      './projects/styles/src/lib/styles/colorPrimitives.ts',
      './projects/styles/src/lib/styles/defaultTheme.ts',
      './projects/styles/src/lib/styles/vampsTheme.ts',
    ],
    outFilePath: './projects/styles/src/css/theme-vamps.css',
    theme: vampsTheme,
  },
];

const cssTemplate = `
:root {
  {{FONTS}}

  {{TYPOGRAPHY}}

  {{COLORS}}

  {{ICONS}}
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
    const iconVars = transformIconVariables(theme.theme.icons);

    const css = cssTemplate
      .replace('{{FONTS}}', fontVars)
      .replace('{{TYPOGRAPHY}}', typographyVars)
      .replace('{{COLORS}}', colorVars)
      .replace('{{ICONS}}', iconVars);

    const formattedCode = await formatCode(css, 'css');

    fs.appendFileSync(theme.outFilePath, formattedCode);

    console.log(` ↳ FINISHED building theme file`);
  }
};
