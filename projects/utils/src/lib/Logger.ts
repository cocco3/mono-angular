type LoggerConfig = {
  isDev: boolean;
};

export class Logger {
  private isDev = false;

  constructor({ isDev }: LoggerConfig) {
    this.isDev = isDev;
  }

  log(...args: unknown[]) {
    if (this.isDev) {
      console.log(...args);
    }
  }

  info(...args: unknown[]) {
    if (this.isDev) {
      console.info(...args);
    }
  }

  warn(message: string) {
    console.warn(message);
  }

  error(message: string, error?: Error) {
    console.error(message, error);
  }
}
