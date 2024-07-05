import { MrdRangeElement } from '@mordech/web-components/mrd-range';
import * as mixpanel from 'mixpanel-browser';

function formatPropName(value: string) {
  value = value.replace('prop', '');
  return value[0].toLowerCase() + value.slice(1);
}

const localStorage = (() => {
  const store: { [key: string]: string } = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorage,
});

let cookie: string = '';

Object.defineProperty(document, 'cookie', {
  get: () => cookie,
  set: (value: string) => (cookie = value),
});

export const initAnalytics = () => {
  const MIXPANEL_KEY: string = import.meta.env.VITE_MIXPANEL_TOKEN;

  const isDev = import.meta.env.MODE === 'development';

  mixpanel.init(MIXPANEL_KEY, {
    disable_persistence: true,
    debug: isDev,
  });

  if (isDev) {
    mixpanel.identify('development');
  }

  addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const { dataset } = target;

    if (dataset['event']) {
      const event = dataset['event'] || 'Click';

      const properties = Object.fromEntries(
        Object.entries(dataset).map(([name, value]) => {
          if (name.startsWith('prop')) {
            return [formatPropName(name), value];
          } else {
            return [];
          }
        }),
      );

      mixpanel.track(event, { ...properties });
    }

    if (
      target instanceof HTMLInputElement ||
      target instanceof MrdRangeElement
    ) {
      const inputType = target.id.split('-')[0];
      const colorProperty = target.id.split('-')[1];
      const { value } = target;

      mixpanel.track('Color changed', {
        inputType,
        colorProperty,
        value,
      });
    }

    if (target instanceof HTMLAnchorElement) {
      mixpanel.track('Link clicked', {
        href: target.href,
        text: target.innerText,
      });
    }
  });
};
