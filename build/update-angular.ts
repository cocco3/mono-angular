/**
 * Runs `ng update` at the repo root to update Angular dependencies and lockfiles,
 * then recursively traverses the repo to find all package.json files and updates
 * any @angular/core and @angular/common versions to match the root package.json.
 *
 * Usage:
 *   npx ts-node build/update-angular.ts [targetVersion]
 *
 * - [targetVersion] (optional): The Angular version to update to (e.g., 20.2.4).
 *   If omitted, 'latest' is used.
 */

import * as fs from 'fs-extra';
import * as path from 'node:path';
import { spawn } from 'child_process';
import { logError } from './logError';

const targetVersion = process.argv[2] || 'latest';

async function runNgUpdateAtRoot() {
  return new Promise<void>((resolve, reject) => {
    console.log('Running ng update at repo root...');

    const ngUpdateCmd = [
      'ng',
      'update',
      `@angular/core@${targetVersion}`,
      `@angular/cli@${targetVersion}`,
    ];

    const child = spawn('npx', ngUpdateCmd, {
      cwd: process.cwd(),
      stdio: 'inherit',
      shell: true,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`ng update failed at root (exit code ${code})`));
      }
    });
  });
}

function getRootAngularVersions() {
  const rootPkg = fs.readJsonSync(path.join(process.cwd(), 'package.json'));
  const versions: Record<string, string> = {};

  const collectAngularDeps = (deps?: Record<string, string>) => {
    if (!deps) return;
    for (const [pkg, version] of Object.entries(deps)) {
      if (pkg.startsWith('@angular/')) {
        versions[pkg] = version;
      }
    }
  };

  collectAngularDeps(rootPkg.dependencies);
  collectAngularDeps(rootPkg.devDependencies);

  return versions;
}

async function updateAngularVersionsInPackageJson(
  pkgJsonPath: string,
  angularPackageVersions: Record<string, string>
) {
  const json = await fs.readJson(pkgJsonPath);
  let changed = false;
  for (const depType of ['dependencies', 'peerDependencies']) {
    if (!json[depType]) continue;
    for (const pkg of Object.keys(json[depType])) {
      if (pkg.startsWith('@angular/') && angularPackageVersions[pkg]) {
        if (json[depType][pkg] !== angularPackageVersions[pkg]) {
          json[depType][pkg] = angularPackageVersions[pkg];
          changed = true;
        }
      }
    }
  }
  if (changed) {
    await fs.writeJson(pkgJsonPath, json, { spaces: 2 });
  }
}

async function updateAllAngularPackages(
  angularPackageVersions: Record<string, string>
) {
  try {
    // Find all package.json files except the root one
    const files = fs.globSync('**/package.json', {
      cwd: process.cwd(),
      exclude: ['**/node_modules/**', 'dist/**', 'package.json'],
    });

    console.log('\nUpdating Angular versions in:');

    for (const pkgJsonPath of files) {
      console.log(` ↳ ${pkgJsonPath}`);
      await updateAngularVersionsInPackageJson(
        pkgJsonPath,
        angularPackageVersions
      );
    }
  } catch (err) {
    logError('Error updating child package.json files:', err);
    throw err;
  }
}

async function main() {
  await runNgUpdateAtRoot();
  const angularPackageVersions = getRootAngularVersions();
  await updateAllAngularPackages(angularPackageVersions);
}

main().catch((err) => {
  logError(err);
  process.exit(1);
});
