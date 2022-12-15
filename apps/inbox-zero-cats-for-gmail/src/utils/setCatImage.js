import browser from 'webextension-polyfill';

import { defaultCatImages } from '../data';

import { randomItem } from './randomItem';

/**
 * Assigns a random image of a cat
 * @param {HTMLImageElement[]} imageContainers
 */
export async function setCatImage(imageContainers) {
  return browser.storage.local
    .get('catImageUrls')
    .then(({ catImageUrls }) => {
      const url = randomItem(catImageUrls || defaultCatImages);
      imageContainers.forEach((image) => (image.src = url));
    })
    .catch((error) => {
      error;
    });
}
