import { inject, Injectable } from '@angular/core';
import { Logger } from '@cocco3/utils';
import { EnvironmentService } from './EnvironmentService';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly env = inject(EnvironmentService);

  private readonly logger = new Logger({
    isDev: ['dev', 'local'].includes(this.env.config.env),
  });

  log = this.logger.log.bind(this.logger);
  info = this.logger.info.bind(this.logger);
  warn = this.logger.warn.bind(this.logger);
  error = this.logger.error.bind(this.logger);
}
