/**
 * @param {HTMLHeadingElement} catTitle
 */
async function setCatTitle(catTitle) {
  return browser.storage.local
    .get('catTitles')
    .then(({ catTitles }) => {
      catTitle.textContent = randomItem(catTitles || defaultCatTitles);
    })
    .catch((error) => {
      error;
    });
}
