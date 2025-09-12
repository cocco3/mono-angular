export const logError = (value: string, error?: Error) => {
  console.error(`\x1b[31m${value}\x1b[0m`, error);
};
