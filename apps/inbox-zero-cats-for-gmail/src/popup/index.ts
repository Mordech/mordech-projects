import { html, render } from 'lit-html';
import browser from 'webextension-polyfill';

import { footer, toggleThemeButton } from './components/index.js';
import { customImageSection, customTitleSection } from './sections/index.js';
import { initTheme, resetImages, resetTitles } from './utils/index.js';

export const renderContent = async () => {
  const headerElem = document.querySelector('header');
  const footerElem = document.querySelector('footer');
  const customTitlesElem = document.querySelector('#custom-titles');
  const customImagesElem = document.querySelector('#custom-images');

  if (
    !headerElem ||
    !footerElem ||
    !(customTitlesElem instanceof HTMLElement) ||
    !(customImagesElem instanceof HTMLElement)
  )
    return;

  const { theme } = await browser.storage.local
    .get('theme')
    .catch((error) => error);
  initTheme(theme);
  render(
    html`
      <h1>Customize your <strong>inbox zero</strong></h1>
      ${toggleThemeButton(theme)}
    `,
    headerElem
  );
  const { catTitles } = await browser.storage.local
    .get('catTitles')
    .catch((error) => error);

  catTitles
    ? render(customTitleSection(catTitles), customTitlesElem)
    : resetTitles();

  const { catImageUrls } = await browser.storage.local
    .get('catImageUrls')
    .catch((error) => error);

  catImageUrls
    ? render(customImageSection(catImageUrls), customImagesElem)
    : resetImages();
  render(footer, footerElem);
};

renderContent();
