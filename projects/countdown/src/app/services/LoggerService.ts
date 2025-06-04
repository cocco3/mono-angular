import { inject, Injectable } from '@angular/core';
import { Logger } from '@cocco3/utils';
import { EnvironmentService } from './EnvironmentService';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly env = inject(EnvironmentService);
  private logger!: Logger;

  public log = this.logger.error;
  public info = this.logger.info;
  public warn = this.logger.warn;
  public error = this.logger.error;

  constructor() {
    const isDev =
      this.env.config.env === 'dev' || this.env.config.env === 'local';

    this.logger = new Logger({ isDev });
  }
}
