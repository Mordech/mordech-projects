export function kebabize(str: string) {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
