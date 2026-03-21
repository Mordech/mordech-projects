import browser from 'webextension-polyfill';

import { defaultCatTitles } from '../data';

import { randomItem } from './randomItem';

export async function getCatTitle(): Promise<string> {
  return browser.storage.local
    .get('catTitles')
    .then(({ catTitles }) => {
      const titles = (
        catTitles || defaultCatTitles.map((text) => ({ text }))
      ).map((item: unknown) =>
        typeof item === 'string' ? item : (item as { text: string }).text,
      );
      const catTitle = randomItem(titles);
      return catTitle;
    })
    .catch((error) => {
      error;
      return defaultCatTitles[0];
    });
}
