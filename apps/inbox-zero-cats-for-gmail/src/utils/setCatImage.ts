import browser from 'webextension-polyfill';

import { defaultCatImages } from '../data';

import { randomItem } from './randomItem';

export async function getCatImage(): Promise<string> {
  return browser.storage.local
    .get('catImageUrls')
    .then(({ catImageUrls }) => {
      const url = randomItem(catImageUrls || defaultCatImages);
      return url;
    })
    .catch((error) => {
      error;
      return defaultCatImages[0];
    });
}
