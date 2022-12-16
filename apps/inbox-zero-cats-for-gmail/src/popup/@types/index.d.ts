export interface Data {
  catTitles?: string[];
  catImageUrls?: string[];
  theme?: 'light' | 'dark';
}

export type DataKeys = keyof Data;
