/**
 * Assigns a random image of a cat
 * @param {HTMLImageElement[]} imageContainers
 */
async function setCatImage(imageContainers) {
  return browser.storage.local
    .get('catImageUrls')
    .then(({ catImageUrls }) => {
      const url = randomItem(catImageUrls || defaultCatImageUrls);
      imageContainers.forEach((image) => (image.src = url));
    })
    .catch((error) => {
      error;
    });
}
