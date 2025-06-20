import type { EnvConfig } from './types';

export const environment: EnvConfig = {
  env: 'local',
  buildDate: new Date().toISOString(),
  analyticsApiKey: '',
};
