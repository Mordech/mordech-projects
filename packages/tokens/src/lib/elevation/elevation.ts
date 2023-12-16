import { CSSProperties } from 'styled-components';

export type ElevationLevels = 0 | 1 | 2;

export const elevationEnum: Record<
  ElevationLevels,
  NonNullable<CSSProperties['boxShadow']>
> = {
  0: `0 1px 3px 0 rgba(0, 0, 0, 0.07),
  0 4px 7px 0 rgba(0, 0, 0, 0.06),
  0 7px 12px 0 rgba(0, 0, 0, 0.04),
  0 12px 21.44px 0 rgba(0, 0, 0, 0.04)`,
  1: `0px 1.439px 2.657px 0px rgba(0, 0, 0, 0.07), 
  0px 3.458px 6.384px 0px rgba(0, 0, 0, 0.05), 
  0px 6.511px 12.021px 0px rgba(0, 0, 0, 0.04), 
  0px 11.615px 21.443px 0px rgba(0, 0, 0, 0.04), 
  0px 21.724px 40.107px 0px rgba(0, 0, 0, 0.03), 
  0px 52px 96px 0px rgba(0, 0, 0, 0.02)`,
  2: `0px 0.658px 2.093px 0px rgba(0, 0, 0, 0.02), 
  0px 1.495px 4.755px 0px rgba(0, 0, 0, 0.03), 
  0px 2.601px 8.276px 0px rgba(0, 0, 0, 0.04), 
  0px 4.132px 13.148px 0px rgba(0, 0, 0, 0.05), 
  0px 6.376px 20.286px 0px rgba(0, 0, 0, 0.05), 
  0px 9.949px 31.654px 0px rgba(0, 0, 0, 0.06), 
  0px 16.516px 52.551px 0px rgba(0, 0, 0, 0.07), 
  0px 33px 105px 0px rgba(0, 0, 0, 0.09)`,
};
