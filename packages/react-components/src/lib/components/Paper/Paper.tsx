import { FC } from 'react';
import styled from 'styled-components';

import { paperVariantProps } from './props';
import { PaperProps, StyledPaperProps } from './types';

const StyledPaper = styled.div<StyledPaperProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border-style: solid;
  border-width: 1px;
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  border-radius: 0.75rem;
`;

export const Paper: FC<PaperProps> = ({
  variant = 'elevation',
  asElement,
  ...rest
}) => <StyledPaper as={asElement} {...paperVariantProps[variant]} {...rest} />;
