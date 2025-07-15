import { execSync } from 'child_process';
import { logError } from './logError';

const [mode, project] = process.argv.slice(2);

const target = {
  start: 'storybook',
  build: 'build-storybook',
}[mode];

if (!target) {
  logError(`Invalid mode "${mode}". Use "start" or "build".`);
  process.exit(1);
}

if (!project) {
  logError(`Error: cannot determine project.
Run "npm run sb:${mode} -- [project]"

Available projects:
- ui
- countdown`);
  process.exit(1);
}

try {
  execSync(`ng run ${project}:${target}`, { stdio: 'inherit' });
} catch (_error) {
  logError(`Failed to run "${target}" for project "${project}"`);
  process.exit(1);
}
