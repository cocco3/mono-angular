import { makeEnvironmentProviders } from '@angular/core';
import { Logger, type LoggerConfig } from './Logger';

export function provideLogger(config: LoggerConfig) {
  return makeEnvironmentProviders([
    {
      provide: Logger,
      useFactory: () => new Logger(config),
    },
  ]);
}
