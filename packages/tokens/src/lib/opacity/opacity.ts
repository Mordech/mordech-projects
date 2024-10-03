import { CSSProperties } from 'react';

export type OpacityTypes = 'disabled';

export const opacityEnum: Record<
  OpacityTypes,
  NonNullable<CSSProperties['opacity']>
> = {
  disabled: '0.38',
};
