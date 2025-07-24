import * as fs from 'fs-extra';
import { defaultThemeColors, type Theme } from '../../lib/styles';
import { shouldGenerateFile, fileCommentHeader, formatCode } from '../utils';

const themes = [
  {
    srcFiles: [
      './projects/ui/src/lib/styles/colorPrimitives.ts',
      './projects/ui/src/lib/styles/theme.ts',
    ],
    outFilePath: './projects/ui/src/css/theme.css',
    colors: defaultThemeColors,
  },
];

const cssTemplate = `
:root {
  {{CONTENTS}}
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

const transformToVariables = (theme: Theme) => {
  const variables = Object.values(theme)
    .map((item) =>
      Object.entries(item.values)
        .map(
          ([key, value]) =>
            `--${item.id}-${key}: light-dark(${value[0]}, ${value[1]});`
        )
        .join('\n')
    )
    .join('\n\n');

  const code = cssTemplate.replace('{{CONTENTS}}', variables);

  return code;
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

    const css = transformToVariables(theme.colors);
    const formattedCode = await formatCode(css, 'css');

    fs.appendFileSync(theme.outFilePath, formattedCode);

    console.log(` ↳ FINISHED building theme file`);
  }
};
