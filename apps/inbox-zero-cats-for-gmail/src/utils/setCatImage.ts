import browser from 'webextension-polyfill';

import { defaultCatImages } from '../data';

import { randomItem } from './randomItem';

export async function setCatImage(imageContainers: HTMLImageElement[]) {
  return browser.storage.local
    .get('catImageUrls')
    .then(({ catImageUrls }) => {
      const url = randomItem(catImageUrls || defaultCatImages);
      imageContainers.forEach((image: { src: string }) => (image.src = url));
    })
    .catch((error) => {
      error;
    });
}
