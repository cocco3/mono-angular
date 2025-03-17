import { readDirForSvg } from './readDirForSvg';
import { optimizeSvgs } from './optimizeSvgs';
import { createSvgStore } from './createSvgStore';
import { anyModifiedSourceFiles } from '../utils';

export const buildIcons = () => {
  const SVG_SRC_DIRECTORY = './projects/ui/src/lib/icons/svgs';
  const SVG_STORE_FILE_PATH = './projects/ui/src/lib/icons/svgIconStore.ts';

  const svgs = readDirForSvg(SVG_SRC_DIRECTORY);
  const svgPaths = svgs.map((svg) => svg.path);

  const hasModifiedSourceFiles = anyModifiedSourceFiles(
    SVG_STORE_FILE_PATH,
    svgPaths
  );

  if (!hasModifiedSourceFiles) {
    console.log('SKIPPING build:icons - no modified files');
    return;
  }

  console.log(`Generating new icons file: ${SVG_STORE_FILE_PATH}`);

  const optimizedSvgFiles = optimizeSvgs(svgs, SVG_SRC_DIRECTORY, {
    removeFill: true,
  });

  createSvgStore(optimizedSvgFiles, SVG_STORE_FILE_PATH);
};
