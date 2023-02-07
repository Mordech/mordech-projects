export type HctKeys = 'hue' | 'chroma' | 'tone';

export interface Color {
  name: string;
  color: string;
}

export type Paints = Record<string, Color>;
