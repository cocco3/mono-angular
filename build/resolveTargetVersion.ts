import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execSync } from 'child_process';
import * as semver from 'semver';

export type BumpType = 'major' | 'minor' | 'patch' | 'latest';

/**
 * Find the installed version of the specified package from package.json
 * @param packageName The name of the package to find
 * @returns The installed version of the package
 */
function findInstalledVersion(packageName: string) {
  const packageJsonPath = resolve(process.cwd(), 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  const foundPackageVersion =
    packageJson.dependencies?.[packageName] ||
    packageJson.devDependencies?.[packageName];

  if (!foundPackageVersion) {
    throw new Error(
      `Package "${packageName}" is not installed in package.json`
    );
  }

  const installedVersion = semver.coerce(foundPackageVersion);

  if (!installedVersion) {
    throw new Error(
      `Invalid installed version detected for ${packageName}: ${foundPackageVersion}`
    );
  }

  return installedVersion;
}

/**
 * Fetch all available published, non pre-release versions of the package from npm
 * @param packageName The name of the package to find
 * @returns An array of available versions
 */
function fetchAvailableVersions(packageName: string) {
  let versions: string[];

  try {
    const output = execSync(`npm view ${packageName} versions --json`, {
      encoding: 'utf-8',
    }).trim();

    if (!output) {
      throw new Error(`No versions found for package "${packageName}"`);
    }

    versions = JSON.parse(output);

    if (!Array.isArray(versions) || versions.length === 0) {
      throw new Error(`No valid versions found for package "${packageName}"`);
    }

    versions = versions.filter((v) => semver.valid(v) && !semver.prerelease(v));
  } catch (err: unknown) {
    throw new Error(
      `Failed to fetch versions for package "${packageName}": ${err}`
    );
  }

  return versions;
}

/**
 * Resolve the target version for a package based on the bump type
 * @param packageName The name of the package to find
 * @param bumpType The type of bump to apply
 * @returns The target version string
 */
export function resolveTargetVersion(
  packageName: string,
  bumpType: BumpType
): string {
  const installedVersion = findInstalledVersion(packageName);
  const availableVersions = fetchAvailableVersions(packageName);

  let targetVersion: string | undefined;

  if (bumpType === 'latest') {
    targetVersion = semver.sort(availableVersions).pop();
  } else {
    const candidates = availableVersions.filter((v) => {
      switch (bumpType) {
        case 'major':
          return semver.major(v) > semver.major(installedVersion.version);
        case 'minor':
          return (
            semver.major(v) === semver.major(installedVersion.version) &&
            semver.minor(v) > semver.minor(installedVersion.version)
          );
        case 'patch':
          return (
            semver.major(v) === semver.major(installedVersion.version) &&
            semver.minor(v) === semver.minor(installedVersion.version) &&
            semver.patch(v) > semver.patch(installedVersion.version)
          );
      }
    });

    targetVersion = semver.sort(candidates).pop();
  }

  if (!targetVersion) {
    throw new Error(
      `No ${bumpType} upgrade available for ${packageName} (current: ${installedVersion.version})`
    );
  }

  return targetVersion;
}
