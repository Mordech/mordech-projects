export type FontFamily = 'sans' | 'serif' | 'code' | 'ui' | 'inherit';

export const fontFamiliesEnum: Record<FontFamily, string> = {
  sans: `'DM Sans',sans-serif`,
  serif: `'Eczar',serif`,
  code: `'JetBrains Mono',monospace`,
  ui: `'Mona Sans',sans-serif`,
  inherit: 'inherit',
};
