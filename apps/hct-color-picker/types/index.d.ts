import { Theme } from '@mordech/tokens';

export type RGB = {
  r: number;
  g: number;
  b: number;
};

type HctObject = {
  hue: number;
  chroma: number;
  tone: number;
};

export type UiPaintStyle = {
  id: string;
  name: string;
  color: RGB;
};

export type SaveColor = {
  type: 'save-color';
  data: HctObject;
};

export type SaveTheme = {
  type: 'save-theme';
  data: {
    theme: Theme;
  };
};

export type GetColor = {
  type: 'get-color';
};

export type GetTheme = {
  type: 'get-theme';
};

export type Cancel = {
  type: 'cancel';
};

export type Paints = {
  type: 'paints';
  paints: UiPaintStyle[] | undefined;
};

export type Selection = {
  type: 'selection';
  selection?: {
    id?: string;
    color?: RGB;
  };
};

export type ColorFromStorage = {
  type: 'color-from-storage';
  color: HctObject | undefined;
};

export type StoredTheme = {
  type: 'stored-theme';
  theme: Theme | undefined;
};

export type UpdateStyle = {
  type: 'update-style';
  data: {
    selectedColor?: UiPaintStyle;
    argb: number;
  };
};

export type CreatePaintStyle = {
  type: 'create-paint-style';
  data: {
    argb: number;
  };
};

export type GetUuid = {
  type: 'get-uuid';
};

export type SetUuid = {
  type: 'set-uuid';
  uuid: string;
};

export type Uuid = {
  type: 'uuid';
  uuid?: string;
};

export type PluginMessage =
  | SaveColor
  | SaveTheme
  | GetColor
  | GetTheme
  | Cancel
  | Paints
  | Selection
  | ColorFromStorage
  | StoredTheme
  | UpdateStyle
  | CreatePaintStyle
  | GetUuid
  | SetUuid
  | Uuid;
