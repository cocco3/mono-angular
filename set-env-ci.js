/**
 * Only use for CI. Be sure to run this before building the application.
 */

const fs = require('fs');
const path = require('path');

function transform(content) {
  return content.replace(/\{\{\s*([A-Za-z0-9_]+)\s*\}\}/g, (_, variable) => {
    return `${process.env[variable]}`;
  });
}

function processEnvironmentFiles(paths) {
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
]);
