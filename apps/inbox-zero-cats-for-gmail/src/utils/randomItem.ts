function getSimpleRandom(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomItem(array: string[]) {
  // random are considered one item
  const random = array.filter(
    (item: string) =>
      item.endsWith('mrd-random') || item.endsWith('mrd-spotlight'),
  );
  const pickRandom = getSimpleRandom(random);
  const nonRandom = array.filter(
    (item: string) =>
      !item.endsWith('mrd-random') && !item.endsWith('mrd-spotlight'),
  );
  const result = random[0] ? [...nonRandom, pickRandom] : nonRandom;
  return getSimpleRandom(result);
}
