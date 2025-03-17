import * as fs from 'fs-extra';
import { lightTheme, darkTheme, type Theme } from '../../lib/styles';
import {
  anyModifiedSourceFiles,
  fileCommentHeader,
  formatCode,
} from '../utils';

const OUT_FILE_PATH = './projects/ui/src/css/theme.css';

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
  const hasModifiedSourceFiles = anyModifiedSourceFiles(OUT_FILE_PATH, [
    './projects/ui/src/lib/styles/colorPrimitives.ts',
    './projects/ui/src/lib/styles/theme.ts',
  ]);

  if (!hasModifiedSourceFiles) {
    console.log('SKIPPING build:theme - no modified files');
    return;
  }

  console.log(`Generating new theme file: ${OUT_FILE_PATH}`);

  fs.outputFileSync(OUT_FILE_PATH, fileCommentHeader);

  const lightThemeCss = await transformToVariables(
    lightTheme,
    ':root, .theme-light'
  );
  fs.appendFileSync(OUT_FILE_PATH, lightThemeCss);

  const darkThemeCss = await transformToVariables(darkTheme, '.theme-dark');
  fs.appendFileSync(OUT_FILE_PATH, darkThemeCss);
};
