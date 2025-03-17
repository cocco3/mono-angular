import * as fs from 'fs-extra';
import * as path from 'path';

export type SVG = { name: string; path: string; svg: string };

export const readDirForSvg = (srcDir: string) => {
  return fs
    .readdirSync(srcDir)
    .filter((file) => file.endsWith('.svg'))
    .map((file) => {
      const filePath = path.join(srcDir, file);
      const svg = fs.readFileSync(filePath, 'utf-8');
      return {
        name: path.basename(file, '.svg'),
        path: filePath,
        svg,
      };
    })
    .sort((a, b) => b.name.localeCompare(a.name));
};
