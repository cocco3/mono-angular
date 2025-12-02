import * as fs from 'fs-extra';
import * as prettier from 'prettier';
import { type BuiltInParserName } from 'prettier';

/**
 * Check whether a new file should be generated:
 *  - if the output file does not exist
 *  - if the modified date of any source file is after that of the output file
 */
export const shouldGenerateFile = (outFilePath: string, sources: string[]) => {
  const doesOutputFileExist = fs.existsSync(outFilePath);
  if (!doesOutputFileExist) {
    return true;
  }

  const outputFileModifiedDate = fs.statSync(outFilePath).mtime.toISOString();

  const anyRecentlyModified = sources.some(
    (path) => fs.statSync(path).mtime.toISOString() > outputFileModifiedDate
  );

  return anyRecentlyModified;
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
