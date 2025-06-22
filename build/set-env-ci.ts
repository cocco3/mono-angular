/**
 * Only use for CI. Calling this file will replace all placeholders
 * in each `environment.prod.ts` with an environment variable
 * defined on the build server.
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * Replace all instances of `__BUILD_DATE__` with the current date
 */
function setBuildDate(content: string) {
  return content.replace('__BUILD_DATE__', new Date().toISOString());
}

/**
 * Replace all instances of `{{ KEY }}` with `process.env[KEY]`
 */
function setProcessEnv(content: string) {
  return content.replace(/\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g, (_, variable) => {
    return `${process.env[variable]}`;
  });
}

function transform(content: string) {
  let transformed = setBuildDate(content);
  transformed = setProcessEnv(transformed);
  return transformed;
}

function processEnvironmentFiles(paths: string[]) {
  paths.forEach((filePath) => {
    const fullPath = path.resolve(filePath);

    if (
      fs.existsSync(fullPath) &&
      fs.statSync(fullPath).isFile() &&
      path.basename(fullPath) === 'environment.prod.ts'
    ) {
      const content = fs.readFileSync(fullPath, 'utf8');

      const transformedContent = transform(content);

      const newFilePath = path.join(path.dirname(fullPath), 'environment.ts');
      fs.writeFileSync(newFilePath, transformedContent, 'utf8');
    } else {
      console.error(`File not found or invalid: ${filePath}`);
    }
  });
}

processEnvironmentFiles([
  'projects/countdown/src/environments/environment.prod.ts',
  'projects/vampire-survivors/src/environments/environment.prod.ts',
]);
