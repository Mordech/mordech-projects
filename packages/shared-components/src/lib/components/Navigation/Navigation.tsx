import React, { Children, FC, ReactElement, ReactNode, useMemo } from 'react';

import { colors } from '../../abstracts';
import { Icon } from '../Icon';

import { LinksList, LogoLink, StyledNavigation } from './Navigation.styles';

export interface NavigationProps {
  logo: ReactElement;
  children?: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ logo, children }) => {
  const navigationLinks = useMemo(
    () => Children.map(children, (child) => <li>{child}</li>),
    [children]
  );

  return (
    <StyledNavigation>
      <LogoLink title="Go to home page" href="/">
        <Icon iconColor={colors.dark} size="2.25rem" icon={logo}></Icon>
      </LogoLink>
      <LinksList>{navigationLinks}</LinksList>
    </StyledNavigation>
  );
};

export default Navigation;
