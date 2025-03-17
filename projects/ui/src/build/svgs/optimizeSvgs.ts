import * as fs from 'fs-extra';
import * as path from 'path';
import { optimize, type Config as SvgoConfig } from 'svgo';
import { type SVG } from './readDirForSvg';

type OptimizeOptions = {
  removeFill?: boolean;
};

export const optimizeSvgs = (
  svgs: SVG[],
  srcDir: string,
  options: OptimizeOptions = {}
) => {
  const svgoConfig = getSvgoConfig(options);

  const optimized = svgs.map((file) => ({
    ...file,
    svg: optimize(file.svg, svgoConfig).data,
  }));

  optimized.forEach(({ name, svg }) => {
    const outFilePath = path.join(srcDir, `${name}.svg`);
    fs.outputFileSync(outFilePath, svg);
  });

  return optimized;
};

const getSvgoConfig = (options: OptimizeOptions) => {
  const attrsToRemove = ['data-name', 'style'];
  if (options.removeFill) {
    attrsToRemove.push('fill');
  }

  const svgoConfig: SvgoConfig = {
    multipass: true,
    js2svg: {
      indent: 2,
      pretty: true,
    },
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      {
        name: 'convertShapeToPath',
        params: {
          convertArcs: true,
          floatPrecision: 3,
        },
      },
      'prefixIds',
      'removeDimensions',
      {
        name: 'removeAttrs',
        params: {
          attrs: attrsToRemove,
          preserveCurrentColor: false,
        },
      },
      {
        name: 'sortAttrs',
        params: {
          xmlnsOrder: 'alphabetical',
        },
      },
    ],
  };

  return svgoConfig;
};
