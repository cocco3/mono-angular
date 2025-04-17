import * as fs from 'fs';
import * as path from 'path';

function processEnvironmentFiles(paths: string[]) {
  paths.forEach((filePath) => {
    console.log(`Creating local env file for '${filePath}'`);
    const fullPath = path.resolve(filePath);

    if (
      fs.existsSync(fullPath) &&
      fs.statSync(fullPath).isFile() &&
      path.basename(fullPath) === 'environment.ts'
    ) {
      const content = fs.readFileSync(fullPath, 'utf8');

      const newFilePath = path.join(
        path.dirname(filePath),
        'environment.local.ts'
      );
      const resolvedNewFilePath = path.resolve(newFilePath);

      if (fs.existsSync(resolvedNewFilePath)) {
        console.log(`  Skipping: '${newFilePath}' already exists`);
      } else {
        fs.writeFileSync(resolvedNewFilePath, content, 'utf8');
        console.log(`  Finished: Add correct env values to '${newFilePath}'`);
      }
    } else {
      console.error('  Skipping: Env file not found or invalid');
    }

    console.log('\n');
  });
}

processEnvironmentFiles(['projects/countdown/src/environments/environment.ts']);
