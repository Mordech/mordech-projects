import { html, render } from 'lit-html';
import browser from 'webextension-polyfill';

import '@mordech/web-components';

import { topBar } from './components';
import { customImageSection, customTitleSection } from './sections';
import { resetImages, resetTitles } from './utils';

let activeTab: 'photos' | 'titles' = 'photos';
let titlesSubTab: 'main' | 'subtitle' = 'main';

const setActiveTab = (tab: 'photos' | 'titles') => {
  activeTab = tab;
  renderContent();
};

export const setTitlesSubTab = (sub: 'main' | 'subtitle') => {
  titlesSubTab = sub;
  renderContent();
};

export const renderContent = async () => {
  const appElem = document.querySelector<HTMLElement>('#app');
  if (!appElem) return;

  const { theme } = await browser.storage.local
    .get('theme')
    .then((theme) => theme)
    .catch((error) => error);

  if (theme) {
    document.body.setAttribute('data-theme', theme);
  }

  const { catTitles } = await browser.storage.local
    .get('catTitles')
    .catch((error) => error);

  if (!catTitles) {
    await resetTitles();
    return;
  }

  const { catImageUrls } = await browser.storage.local
    .get('catImageUrls')
    .catch((error) => error);

  if (!catImageUrls) {
    await resetImages();
    return;
  }

  const { catSubtitle } = await browser.storage.local
    .get('catSubtitle')
    .catch(() => ({}));

  const content =
    activeTab === 'photos'
      ? customImageSection(catImageUrls)
      : customTitleSection(catTitles, titlesSubTab, catSubtitle);

  render(html`${topBar(activeTab, setActiveTab, theme)}${content}`, appElem);
};

renderContent();
