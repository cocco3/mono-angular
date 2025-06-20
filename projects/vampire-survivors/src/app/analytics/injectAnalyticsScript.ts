export const injectAnalyticsScript = (isProd: boolean, apiKey?: string) => {
  const shouldInjectScript = isProd || !!apiKey;

  if (shouldInjectScript) {
    const script = document.createElement('script');
    script.src = 'https://app.rybbit.io/api/script.js';
    script.defer = true;
    script.setAttribute('data-site-id', '851');
    if (apiKey) {
      script.setAttribute('data-api-key', apiKey);
    }
    document.head.appendChild(script);
  }
};
