/**
 * Create an enviroment.local.ts file that won't be checked in
 * and can be used for local development.
 */

import * as fs from 'fs';
import * as path from 'path';
import { logError } from './logError';

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
        console.log(` ↳ SKIPPED: '${newFilePath}' already exists`);
      } else {
        fs.writeFileSync(resolvedNewFilePath, content, 'utf8');
        console.log(
          ` ↳ FINISHED: Now add correct env values to '${newFilePath}'`
        );
      }
    } else {
      logError(' ↳ SKIPPED: Env file not found or invalid');
    }

    console.log('\n');
  });
}

processEnvironmentFiles([
  'projects/countdown/src/environments/environment.ts',
  'projects/vampire-survivors/src/environments/environment.ts',
]);
