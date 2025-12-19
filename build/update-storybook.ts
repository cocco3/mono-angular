/**
 *  Usage:
 *   ts-node build/update-storybook.ts ['major' | 'minor' | 'patch' | 'latest']
 */

import { runCommand } from './runCommand';
import { logError } from './logError';
import { findStorybookProjects } from './find-storybook';
import { type BumpType, resolveTargetVersion } from './resolveTargetVersion';

async function main() {
  const bumpType: BumpType = (process.argv[2] as BumpType) || 'latest';
  const targetVersion = resolveTargetVersion('storybook', bumpType);

  const root = process.cwd();
  const storybookProjects = findStorybookProjects(root);

  if (storybookProjects.length === 0) {
    throw new Error(`No .storybook directories found under ${root}`);
  }

  await runCommand('npx', [
    `storybook@${targetVersion}`,
    'upgrade',
    '--config-dir',
    ...storybookProjects.map((p) => p.configPath),
  ]);
}

main().catch((err) => {
  logError(err);
  process.exit(1);
});
