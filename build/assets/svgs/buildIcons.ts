import { readDirForSvg } from './readDirForSvg';
import { optimizeSvgs } from './optimizeSvgs';
import { createSvgStore } from './createSvgStore';
import { shouldGenerateFile } from '../utils';

export const buildIcons = () => {
  const SVG_SRC_DIRECTORY = './projects/ui/src/lib/icons/svgs';
  const SVG_STORE_FILE_PATH = './projects/ui/src/lib/icons/svgIconStore.ts';

  console.log(`\nCreating "${SVG_STORE_FILE_PATH}"`);

  const svgs = readDirForSvg(SVG_SRC_DIRECTORY);
  const svgPaths = svgs.map((svg) => svg.path);

  const hasModifiedSourceFiles = shouldGenerateFile(
    SVG_STORE_FILE_PATH,
    svgPaths
  );

  if (!hasModifiedSourceFiles) {
    console.log(` ↳ SKIPPED - No modified source files`);
    return;
  }

  const optimizedSvgFiles = optimizeSvgs(svgs, SVG_SRC_DIRECTORY, {
    removeFill: true,
  });

  createSvgStore(optimizedSvgFiles, SVG_STORE_FILE_PATH);

  console.log(` ↳ FINISHED building icon store`);
};
