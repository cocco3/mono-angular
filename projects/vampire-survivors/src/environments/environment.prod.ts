import type { EnvConfig } from './types';

export const environment: EnvConfig = {
  env: 'prod',
  buildDate: new Date().toISOString(),
};
