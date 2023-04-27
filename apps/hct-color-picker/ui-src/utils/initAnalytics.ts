import { MrdRangeElement } from '@mordech/web-components/mrd-range';
import * as mixpanel from 'mixpanel-figma';

export const initAnalytics = () => {
  const MIXPANEL_KEY = import.meta.env.VITE_MIXPANEL_TOKEN || 'development';

  mixpanel.init(MIXPANEL_KEY, {
    disable_cookie: true,
    disable_persistence: true,
    debug: import.meta.env.MODE === 'development',
  });

  addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.hasAttribute('data-event')) {
      const event = target.getAttribute('data-event') || 'Click';
      const properties = Object.fromEntries(
        Object.entries(target.attributes).map(([, attribute]) => {
          if (attribute.name.startsWith('data-prop-')) {
            return [attribute.name.replace('data-prop-', ''), attribute.value];
          } else {
            return [];
          }
        })
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
