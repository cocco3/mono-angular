/**
 *  Usage:
 *   ts-node build/update-storybook.ts [version]
 */

import { runCommand } from '../runCommand';
import { logError } from '../logError';
import { findStorybookProjects } from './findStorybookProjects';

async function main() {
  const version = process.argv[2] ?? 'latest';
  const root = process.cwd();

  const storybookProjects = findStorybookProjects(root);

  if (storybookProjects.length === 0) {
    throw new Error(`No .storybook directories found under ${root}`);
  }

  await runCommand('npx', [
    `storybook@${version}`,
    'upgrade',
    '--config-dir',
    ...storybookProjects.map((p) => p.configPath),
  ]);
}

main().catch((err) => {
  logError(err);
  process.exit(1);
});
