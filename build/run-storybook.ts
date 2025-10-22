import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
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

const projectsDir = join(process.cwd(), 'projects');
const validProjects = readdirSync(projectsDir).filter((name) => {
  const fullPath = join(projectsDir, name);
  return (
    statSync(fullPath).isDirectory() && existsSync(join(fullPath, '.storybook'))
  );
});

if (!project || !validProjects.includes(project)) {
  logError(
    `Error: cannot determine project "${project}".

Run "npm run sb:${mode} -- [project]"

Available projects:
${validProjects.map((p) => `- ${p}`).join('\n')}`
  );
  process.exit(1);
}

try {
  execSync(`ng run ${project}:${target}`, { stdio: 'inherit' });
} catch (_error) {
  logError(`Failed to run "${target}" for project "${project}"`);
  process.exit(1);
}
