import { join } from 'node:path';
import { logError } from './logError';
import { runCommand } from './runCommand';
import { findStorybookProjects } from './find-storybook';

function validateArgs() {
  const [mode, project] = process.argv.slice(2);

  const target = {
    start: 'storybook',
    build: 'build-storybook',
  }[mode];

  if (!target) {
    throw new Error(`Invalid mode "${mode}". Use "start" or "build".`);
  }

  const projectsDir = join(process.cwd(), 'projects');
  const storybookProjects = findStorybookProjects(projectsDir);

  const foundProject = storybookProjects.some((p) => p.projectName === project);

  if (!foundProject) {
    throw new Error(
      `Error: cannot determine project "${project}".

Run "npm run sb:${mode} [project]"

Available projects:
${storybookProjects.map((p) => `- ${p.projectName}`).join('\n')}`
    );
  }

  return { target, project };
}

async function main() {
  const { target, project } = validateArgs();

  await runCommand('ng', ['run', `${project}:${target}`]);
}

main().catch((err) => {
  logError(err);
  process.exit(1);
});
