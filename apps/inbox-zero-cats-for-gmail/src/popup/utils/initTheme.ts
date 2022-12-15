import { Data } from '../@types';

export const initTheme = (theme: Data['theme']) => {
  const dataTheme = document.createAttribute('data-theme');
  document.body.attributes.setNamedItem(dataTheme);
  if (theme) dataTheme.value = theme;
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    dataTheme.value = 'dark';
  else dataTheme.value = 'light';
};
