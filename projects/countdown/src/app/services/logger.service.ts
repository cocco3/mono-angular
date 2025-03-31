import { Inject, Injectable } from '@angular/core';
import { Logger } from '@cocco3/utils';
import { EnvironmentService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService extends Logger {
  constructor(@Inject(EnvironmentService) env: EnvironmentService) {
    const isDev = env.config.env === 'dev' || env.config.env === 'local';
    super({ isDev });
  }
}
