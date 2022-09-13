import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { fontFamilies, fontSizes, fontWeights } from '../../abstracts';
import { defaultTypographyProps, variantDefaults } from './props';
import { TypographyProps, TypographyType } from './types';

export const StyledTypography = styled.span<Required<TypographyProps>>`
  ${({
    size,
    weight,
    color,
    lineHeight,
    fontFamily,
    align,
    whiteSpace,
    highlight,
  }) => css`
    font-family: ${fontFamilies[fontFamily]};
    font-size: ${fontSizes[size]};
    line-height: ${lineHeight};
    font-weight: ${fontWeights[weight]};
    color: ${color};
    text-align: ${align};
    white-space: ${whiteSpace};
    background-color: ${highlight};
  `}

  ${({ srOnly }) =>
    srOnly &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    `}
`;

export const Typography: FC<TypographyType> = ({
  variant = 'body',
  asElement,
  ...rest
}) => (
  <StyledTypography
    as={asElement ?? variantDefaults[variant].asElement}
    {...defaultTypographyProps}
    {...variantDefaults[variant]}
    {...rest}
  />
);
