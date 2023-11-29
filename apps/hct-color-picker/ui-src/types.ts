import { UiPaintStyle } from '../types';

export type HctKeys = 'hue' | 'chroma' | 'tone';

export interface Color {
  name: string;
  color: string;
}

export type Paints = Record<string, Color>;

export type SelectedColor = UiPaintStyle & { variableAlias?: boolean };
