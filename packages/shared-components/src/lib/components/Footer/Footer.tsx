import React, { FC, ReactNode } from 'react';
import { Icons } from '../../abstracts';
import { Icon } from '../Icon';
import { Link, LinksContainer, StyledFooter } from './Footer.styles';

export interface IconLink {
  icon: Icons;
  href: HTMLAnchorElement['href'];
  title: HTMLAnchorElement['title'];
}

export interface FooterProps {
  links?: IconLink[];
  children: ReactNode;
}

export const Footer: FC<FooterProps> = ({ links, children }) => (
  <>
    <LinksContainer>
      {links?.map((link) => (
        <li key={link.href}>
          <Link target="_blank" href={link.href} title={link.title}>
            <Icon icon={link.icon} size="1.25rem" />
          </Link>
        </li>
      ))}
    </LinksContainer>
    <StyledFooter>{children}</StyledFooter>
  </>
);

export default Footer;
