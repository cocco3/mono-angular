import { globSync } from 'node:fs';
import { basename, dirname, join, sep } from 'node:path';

export function findStorybookProjects(root: string) {
  /**
   * Make sure pattern starts with './' otherwise globSync won't find dotfiles
   * https://github.com/nodejs/node/issues/56321
   */
  const pattern = `.${sep}${join('**', '.storybook')}`;

  const storybookDirs = globSync(pattern, {
    cwd: root,
    exclude: [join('**', 'node_modules', '**'), join('dist', '**')],
  });

  const results = storybookDirs.map((fullPath) => ({
    projectName: basename(dirname(fullPath)),
    configPath: fullPath,
  }));

  return results;
}
