import * as fs from 'fs-extra';
import { lightTheme, darkTheme, type Theme } from '../../lib/styles';
import { shouldGenerateFile, fileCommentHeader, formatCode } from '../utils';

const themes = [
  {
    srcFiles: [
      './projects/ui/src/lib/styles/colorPrimitives.ts',
      './projects/ui/src/lib/styles/theme.ts',
    ],
    outFilePath: './projects/ui/src/css/theme.css',
    light: lightTheme,
    dark: darkTheme,
  },
];

const template = `
{{SELECTOR}} {
{{CONTENTS}}
}
`;

const transformToVariables = async (theme: Theme, selector: string) => {
  const variables = Object.values(theme)
    .map((item) =>
      Object.entries(item.values)
        .map(([key, value]) => `  --${item.id}-${key}: ${value};`)
        .join('\n')
    )
    .join('\n\n');

  const code = template
    .replace('{{SELECTOR}}', selector)
    .replace('{{CONTENTS}}', variables);

  const formattedCode = await formatCode(code, 'css');

  return formattedCode;
};

export const buildThemeCss = async () => {
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

    const lightThemeCss = await transformToVariables(
      theme.light,
      ':root, .theme-light'
    );
    fs.appendFileSync(theme.outFilePath, lightThemeCss);

    const darkThemeCss = await transformToVariables(theme.dark, '.theme-dark');
    fs.appendFileSync(theme.outFilePath, darkThemeCss);

    console.log(` ↳ FINISHED building theme file`);
  }
};
