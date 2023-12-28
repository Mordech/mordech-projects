import { html, render } from 'lit-html';
import browser from 'webextension-polyfill';

import '@mordech/web-components';

import { footer } from './components';
import { customImageSection, customTitleSection } from './sections';
import { resetImages, resetTitles } from './utils';

export const renderContent = async () => {
  const headerElem = document.querySelector('header');
  const footerElem = document.querySelector('footer');
  const customTitlesElem = document.querySelector('#custom-titles');
  const customImagesElem = document.querySelector('#custom-images');
  const { theme } = await browser.storage.local
    .get('theme')
    .then((theme) => theme)
    .catch((error) => error);

  if (theme) {
    document.body.setAttribute('data-theme', theme);
  }

  if (
    !headerElem ||
    !footerElem ||
    !(customTitlesElem instanceof HTMLElement) ||
    !(customImagesElem instanceof HTMLElement)
  )
    return;

  render(
    html`
      <h1>Customize your <strong>inbox zero</strong></h1>
      <mrd-toggle-theme
        .theme=${theme}
        .saveToStorage=${false}
        size="compact"
        @toggle-theme=${(event: CustomEvent) => {
          browser.storage.local.set({ theme: event.detail.theme });
        }}
      ></mrd-toggle-theme>
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
