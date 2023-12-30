import { MrdRangeElement } from '@mordech/web-components/mrd-range';
import * as mixpanel from 'mixpanel-figma';

function formatPropName(value: string) {
  value = value.replace('prop', '');
  return value[0].toLowerCase() + value.slice(1);
}

export const initAnalytics = () => {
  const MIXPANEL_KEY = import.meta.env.VITE_MIXPANEL_TOKEN || 'development';

  const isInEu = isInEuTimeZone();
  const isDev = import.meta.env.MODE === 'development';

  mixpanel.init(MIXPANEL_KEY, {
    disable_cookie: true,
    disable_persistence: true,
    track_pageview: !isInEu,
    opt_out_tracking_by_default: true,
    debug: isDev,
  });

  if (isInEu) {
    mixpanel.opt_out_tracking();
    mixpanel.disable();
  }

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

function isInEuTimeZone() {
  const euTimeZones = [
    'Europe/Vienna',
    'Europe/Brussels',
    'Europe/Sofia',
    'Europe/Zagreb',
    'Europe/Belgrade',
    'Asia/Nicosia',
    'Europe/Nicosia',
    'Asia/Famagusta',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'Europe/Tallinn',
    'Europe/Helsinki',
    'Europe/Paris',
    'Europe/Busingen',
    'Europe/Athens',
    'Europe/Budapest',
    'Europe/Dublin',
    'Eire',
    'Europe/Rome',
    'Europe/Riga',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Malta',
    'Europe/Amsterdam',
    'Europe/Warsaw',
    'Poland',
    'Atlantic/Azores',
    'Atlantic/Madeira',
    'Europe/Lisbon',
    'Portugal',
    'Europe/Bucharest',
    'Europe/Bratislava',
    'Europe/Ljubljana',
    'Africa/Ceuta',
    'Atlantic/Canary',
    'Europe/Madrid',
    'Europe/Stockholm',
    'GB',
    'GB-Eire',
    'Europe/Belfast',
    'Europe/London',
  ];

  return euTimeZones.includes(Intl.DateTimeFormat().resolvedOptions().timeZone);
}
