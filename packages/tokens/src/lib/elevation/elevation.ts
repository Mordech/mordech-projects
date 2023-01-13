import { CSSProperties } from 'styled-components';

export type ElevationLevels = 0;

export const elevationEnum: Record<
  ElevationLevels,
  NonNullable<CSSProperties['boxShadow']>
> = {
  0: `0 1px 3px 0 rgba(0, 0, 0, 0.07),
  0 4px 7px 0 rgba(0, 0, 0, 0.06),
  0 7px 12px 0 rgba(0, 0, 0, 0.04),
  0 12px 21.44px 0 rgba(0, 0, 0, 0.04)`,
};
