export interface Data {
  catTitles?: string[];
  catImageUrls?: string[];
  catSubtitle?: string;
  theme?: 'light' | 'dark';
}

export type DataKeys = keyof Data;
