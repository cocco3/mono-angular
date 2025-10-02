import type { EnvConfig } from './types';

export const environment: EnvConfig = {
  env: 'dev',
  buildDate: '__BUILD_DATE__',
  rybbitAnalyticsApiKey: '',
  rybbitAnalyticsSiteId: '{{ RYBBIT_SITE_ID }}',
};
