import type { EnvConfig } from './types';

export const environment: EnvConfig = {
  env: 'prod',
  buildDate: '__BUILD_DATE__',
  rybbitAnalyticsApiKey: '',
  rybbitAnalyticsSiteId: '{{ RYBBIT_SITE_ID }}',
};
