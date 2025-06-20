import type { EnvConfig } from './types';

export const environment: EnvConfig = {
  env: 'dev',
  buildDate: new Date().toISOString(),
};
