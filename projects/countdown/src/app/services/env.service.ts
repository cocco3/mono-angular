import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { type EnvConfig } from '../../environments/types';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  readonly config: EnvConfig = environment;
}
