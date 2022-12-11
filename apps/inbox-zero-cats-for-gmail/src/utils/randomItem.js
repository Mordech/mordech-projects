/**
 * @param {string[]} array
 * @returns {string}
 */
function getSimpleRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * @param {string[]} array
 * @returns {string}
 */
function randomItem(array) {
  // random are considered one item
  const random = array.filter(
    (item) => item.endsWith('mrd-random') || item.endsWith('mrd-spotlight')
  );
  const pickRandom = getSimpleRandom(random);
  const nonRandom = array.filter(
    (item) => !item.endsWith('mrd-random') && !item.endsWith('mrd-spotlight')
  );
  const result = random[0] ? [...nonRandom, pickRandom] : nonRandom;
  return getSimpleRandom(result);
}
