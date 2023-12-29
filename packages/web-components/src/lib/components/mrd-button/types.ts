import { type Color } from '@mordech/tokens/dist';

export type ButtonColors = Exclude<
  Color,
  'outline' | 'outlineVariant' | 'disabled' | 'highlight' | 'background'
>;

export type ButtonSize = 'default' | 'compact' | 'tiny';

export type ButtonRadius = 'default' | 'round' | 'pill';

export type ButtonVariants = 'fill' | 'tonal' | 'inverted' | 'text';
