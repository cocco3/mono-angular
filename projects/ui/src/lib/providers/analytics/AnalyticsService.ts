import { type Rybbit } from './rybbit';

export type BaseTrackEvent = { name: string; data?: Record<string, unknown> };

export type AnalyticsConfig = {
  /** Provide an API key to track from localhost during development. */
  apiKey?: string;

  /** The Site ID for the website obtained from your Rybbit instance.  */
  siteId: string;

  /** Enable analytics tracking. */
  enabled: boolean;
};

export class AnalyticsService<
  TTrackEvent extends BaseTrackEvent = BaseTrackEvent,
> {
  private get rybbit(): Rybbit | null {
    return typeof window !== 'undefined' && window.rybbit
      ? window.rybbit
      : null;
  }

  private appendRybbitScript(siteId: string, apiKey?: string) {
    const SCRIPT_ID = 'rybbit-analytics-script';

    if (document.getElementById(SCRIPT_ID)) {
      // If script already exists, exit immediately
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://app.rybbit.io/api/script.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-site-id', siteId);
    if (apiKey) {
      script.setAttribute('data-api-key', apiKey);
    }
    document.head.appendChild(script);
  }

  constructor(private readonly config: AnalyticsConfig) {
    if (!config.enabled) return;
    this.appendRybbitScript(config.siteId, config.apiKey);
  }

  /** Tracks a custom event */
  trackEvent(event: TTrackEvent) {
    if (!this.config.enabled || !this.rybbit) return;
    this.rybbit.event(event.name, event.data);
  }

  /** Tracks a page view  */
  trackPageview() {
    if (!this.config.enabled || !this.rybbit) return;
    this.rybbit.pageview();
  }

  /** Sets a custom user ID in localstroage for tracking logged-in users */
  identifyUser(userId: string) {
    if (!this.config.enabled || !this.rybbit) return;
    this.rybbit.identify(userId);
  }

  /** Clears the stored user ID from localstorage */
  clearUserId() {
    if (!this.config.enabled || !this.rybbit) return;
    this.rybbit.clearUserId();
  }

  /** Gets the currently set user ID from localstorage */
  getUserId(): string | null {
    if (!this.config.enabled || !this.rybbit) return null;
    return this.rybbit.getUserId();
  }

  trackOutbound(url: string, text?: string, target?: string) {
    if (!this.config.enabled || !this.rybbit) return;
    this.rybbit.trackOutbound(url, text, target);
  }
}
