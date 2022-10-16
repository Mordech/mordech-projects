import React, { FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Row } from '../../abstracts';

export interface NavigationProps {
  logo: ReactElement;
  children?: ReactNode;
}

const StyledNavigation = styled(Row).attrs({ as: 'nav' })`
  color: pink;
`;

export const Navigation: FC<NavigationProps> = () => {
  return (
    <StyledNavigation>
      <h1>Welcome to Navigation!</h1>
    </StyledNavigation>
  );
};

export default Navigation;
