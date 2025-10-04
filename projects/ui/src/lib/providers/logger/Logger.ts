export type LoggerConfig = {
  isDev: boolean;
};

export class Logger {
  private _isDev = false;

  constructor({ isDev }: LoggerConfig) {
    this._isDev = isDev;
  }

  /**
   * Logs a message to the console if in development mode.
   * @param args - Arguments to log
   */
  log(...args: unknown[]) {
    if (this._isDev) {
      console.log(...args);
    }
  }

  /**
   * Logs an informational message to the console if in development mode.
   * @param args - Arguments to log
   */
  info(...args: unknown[]) {
    if (this._isDev) {
      console.info(...args);
    }
  }

  /**
   * Logs a warning message to the console.
   * @param message - The warning message
   */
  warn(message: string) {
    console.warn(message);
  }

  /**
   * Logs an error message and optional error object to the console.
   * @param message - The error message
   * @param error - Optional Error object
   */
  error(message: string, error?: Error) {
    console.error(message, error);
  }
}
