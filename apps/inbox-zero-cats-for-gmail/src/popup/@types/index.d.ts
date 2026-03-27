export interface CatTitle {
  text: string;
  custom?: boolean;
}

export interface Data {
  catTitles?: CatTitle[];
  catImageUrls?: string[];
  catSubtitle?: string;
  theme?: 'light' | 'dark';
}

export type DataKeys = keyof Data;
