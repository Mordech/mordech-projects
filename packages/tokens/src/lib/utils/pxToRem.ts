export interface PxToRemProps {
  px: number;
  baseFontSize?: number;
}

export const pxToRem = ({ px, baseFontSize = 16 }: PxToRemProps) =>
  `${px / baseFontSize}rem`;
