import React, { FC } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Icons } from '../../abstracts';

/* eslint-disable-next-line */
export interface IconProps {
  iconName: Icons;
  size?: CSSProperties['fontSize'];
  iconColor?: CSSProperties['color'];
}

const StyledIcon = styled.em<{
  $fontSize: CSSProperties['fontSize'];
  $iconColor: CSSProperties['color'];
}>`
  display: inline-flex;
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $iconColor }) => $iconColor};
`;

export const Icon: FC<IconProps> = ({
  iconName,
  size = 'inherit',
  iconColor = 'inherit',
}) => (
  <StyledIcon
    aria-hidden="true"
    $fontSize={size}
    $iconColor={iconColor}
    className={`icon-${iconName}`}
  />
);
