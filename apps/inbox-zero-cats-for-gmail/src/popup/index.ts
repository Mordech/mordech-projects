import { html, render } from 'lit-html';
import browser from 'webextension-polyfill';

import '@mordech/web-components';

import { PackKey } from '../data';

import { CatTitle } from './@types/index';
import { topBar } from './components';
import {
  customImageSection,
  customTitleSection,
  settingsSection,
} from './sections';
import { resetImages, resetTitles } from './utils';

let activeTab: 'photos' | 'titles' | 'settings' = 'photos';
let titlesSubTab: 'main' | 'subtitle' = 'main';
let maxBodyHeight = 0;

const setActiveTab = (tab: 'photos' | 'titles' | 'settings') => {
  activeTab = tab;
  renderContent();
};

export const setTitlesSubTab = (sub: 'main' | 'subtitle') => {
  titlesSubTab = sub;
  renderContent();
};

const normalizeTitles = (raw: unknown[]): CatTitle[] =>
  raw.map((item) =>
    typeof item === 'string' ? { text: item } : (item as CatTitle),
  );

export const renderContent = async () => {
  const appElem = document.querySelector<HTMLElement>('#app');
  if (!appElem) return;

  const { theme } = await browser.storage.local
    .get('theme')
    .catch(() => ({ theme: undefined }));

  if (theme) {
    document.body.setAttribute('data-theme', theme);
  }

  const { catTitles: rawTitles } = await browser.storage.local
    .get('catTitles')
    .catch((error) => error);

  if (!rawTitles) {
    await resetTitles();
    await renderContent();
    return;
  }

  const catTitles = normalizeTitles(rawTitles as unknown[]);

  const { catImageUrls } = await browser.storage.local
    .get('catImageUrls')
    .catch((error) => error);

  if (!catImageUrls) {
    await resetImages();
    await renderContent();
    return;
  }

  const { catSubtitle, activePack } = await browser.storage.local
    .get(['catSubtitle', 'activePack'])
    .catch(() => ({ catSubtitle: undefined, activePack: undefined }));

  const resolvedPack: PackKey = (
    ['cats', 'dogs', 'nature'] as PackKey[]
  ).includes(activePack as PackKey)
    ? (activePack as PackKey)
    : 'cats';

  const content =
    activeTab === 'photos'
      ? customImageSection(catImageUrls)
      : activeTab === 'titles'
        ? customTitleSection(catTitles, titlesSubTab, catSubtitle)
        : settingsSection(resolvedPack);

  render(html`${topBar(activeTab, setActiveTab, theme)}${content}`, appElem);

  requestAnimationFrame(() => {
    const currentHeight = document.body.scrollHeight;
    if (currentHeight > maxBodyHeight) {
      maxBodyHeight = currentHeight;
    }
    document.body.style.minHeight = `${maxBodyHeight}px`;
  });
};

renderContent();
