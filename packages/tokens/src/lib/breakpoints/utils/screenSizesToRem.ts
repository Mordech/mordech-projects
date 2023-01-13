import { baseFontSize } from '../../typography';
import { ManipulateValueFunction, pxToRem } from '../../utils';

export const screenSizesToRem: ManipulateValueFunction = (value) => {
  if (typeof value !== 'number') return value;
  return pxToRem({ px: value, baseFontSize: baseFontSize });
};
