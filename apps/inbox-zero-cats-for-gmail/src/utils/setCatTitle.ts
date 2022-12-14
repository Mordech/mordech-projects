import browser from 'webextension-polyfill';

import { defaultCatTitles } from '../data';

import { randomItem } from './randomItem';

export async function setCatTitle(catTitle: HTMLHeadingElement) {
  return browser.storage.local
    .get('catTitles')
    .then(({ catTitles }) => {
      catTitle.textContent = randomItem(catTitles || defaultCatTitles);
    })
    .catch((error) => {
      error;
    });
}
