const fs = require('fs');
const path = require('path');

function processEnvironmentFiles(paths) {
  paths.forEach((filePath) => {
    const fullPath = path.resolve(filePath);

    if (
      fs.existsSync(fullPath) &&
      fs.statSync(fullPath).isFile() &&
      path.basename(fullPath) === 'environment.ts'
    ) {
      const content = fs.readFileSync(fullPath, 'utf8');

      const newFilePath = path.join(
        path.dirname(fullPath),
        'environment.local.ts'
      );
      fs.writeFileSync(newFilePath, content, 'utf8');
    } else {
      console.error(`File not found or invalid: ${filePath}`);
    }
  });
}

processEnvironmentFiles(['projects/countdown/src/environments/environment.ts']);
