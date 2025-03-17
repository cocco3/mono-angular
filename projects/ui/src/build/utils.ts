import * as fs from 'fs-extra';
import * as prettier from 'prettier';
import { type BuiltInParserName } from 'prettier';

/**
 * Check if any source files have been modified after the output file.
 */
export const anyModifiedSourceFiles = (
  outFilePath: string,
  sources: string[]
) => {
  const doesOutputFileExist = fs.existsSync(outFilePath);
  if (!doesOutputFileExist) {
    return true;
  }

  const outputFileModifiedDate = fs.statSync(outFilePath).mtime.toISOString();

  return sources.some(
    (path) => fs.statSync(path).mtime.toISOString() > outputFileModifiedDate
  );
};

/**
 * @returns Comment block to be prepended to any generated file.
 */
export const fileCommentHeader = `/**
 * Auto-generated on ${new Date().toDateString()}. Do not modify.
 */\n`;

/**
 * @returns Formatted code using prettier
 */
export const formatCode = async (code: string, parser: BuiltInParserName) => {
  const options = await prettier.resolveConfig('./.prettierrc');
  const formattedCode = await prettier.format(code, { ...options, parser });
  return formattedCode;
};
