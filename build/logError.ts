export const logError = (value: string, error?: Error) => {
  const red = (v: string) => `\x1b[31m${v}\x1b[0m`;
  if (error) {
    console.error(red(value), error);
  } else {
    console.error(red(value));
  }
};
