import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { Icons } from '../../abstracts';

export interface IconProps {
  icon: Icons;
  size?: CSSProperties['fontSize'];
  iconColor?: CSSProperties['color'];
}

const StyledIcon = styled.span<{
  $fontSize: CSSProperties['fontSize'];
  $iconColor: CSSProperties['color'];
}>`
  display: inline-flex;
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $iconColor }) => $iconColor};
`;

export const IconElementWrapper = styled.div<{
  $size: CSSProperties['fontSize'];
  $iconColor: CSSProperties['color'];
}>`
  width: ${({ $size }) => $size};
  min-width: ${({ $size }) => $size};
  color: ${({ $iconColor }) => $iconColor};

  &&& > * {
    width: 100%;
  }

  &&& svg path {
    fill: ${({ $iconColor }) => $iconColor};
  }
`;

export const Icon: FC<IconProps> = ({
  icon,
  size = 'inherit',
  iconColor = 'inherit',
}) =>
  typeof icon === 'string' ? (
    <StyledIcon
      aria-hidden="true"
      $fontSize={size}
      $iconColor={iconColor}
      className={`icon-${icon}`}
      data-testid="icon-font"
    />
  ) : (
    <IconElementWrapper
      $size={size}
      $iconColor={iconColor}
      data-testid="icon-element"
    >
      {icon}
    </IconElementWrapper>
  );
