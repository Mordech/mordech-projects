// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce(func: any, timeout: number) {
  let timer: number;
  return (...args: string[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(args);
    }, timeout);
  };
}
