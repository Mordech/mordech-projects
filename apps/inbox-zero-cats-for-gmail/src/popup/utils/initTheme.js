// @ts-check

/**
 * @param {import("../@types").Data['theme']} theme
 */
export const initTheme = (theme) => {
  const dataTheme = document.createAttribute('data-theme');
  document.body.attributes.setNamedItem(dataTheme);
  if (theme) dataTheme.value = theme;
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    dataTheme.value = 'dark';
  else dataTheme.value = 'light';
};
