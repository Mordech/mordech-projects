import { pxToRem } from './pxToRem';

describe('pxToRem', () => {
  it('should convert px to rem', () => {
    expect(pxToRem({ px: 16 })).toBe('1rem');
  });

  it('should convert px to rem with a custom base font size', () => {
    expect(pxToRem({ px: 16, baseFontSize: 10 })).toBe('1.6rem');
  });
});
