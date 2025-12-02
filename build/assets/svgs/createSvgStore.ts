import * as fs from 'fs-extra';
import * as path from 'path';
import { type SVG } from './readDirForSvg';
import { fileCommentHeader, formatCode } from '../utils';

export const createSvgStore = async (svgs: SVG[], outPath: string) => {
  const exportName = path.basename(outPath, '.ts');
  fs.outputFileSync(outPath, fileCommentHeader);

  const map = svgs.reduce(
    (acc, curr) => ({ [curr.name]: curr.svg, ...acc }),
    {}
  );

  const code = `export const ${exportName} = ${JSON.stringify(map)}`;
  const formattedCode = await formatCode(code, 'babel-ts');

  fs.appendFileSync(outPath, formattedCode);
};
