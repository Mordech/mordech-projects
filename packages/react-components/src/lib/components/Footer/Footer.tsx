import { FC, ReactNode } from 'react';

import { Icons } from '../../abstracts';
import { Icon } from '../Icon';

import {
  IconLink,
  LinksContainer,
  StickyNav,
  StyledFooter,
} from './Footer.styles';

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
    <StickyNav data-testid="social-links">
      <LinksContainer>
        {links?.map((link) => (
          <li key={link.href}>
            <IconLink
              target="_blank"
              href={link.href}
              title={link.title}
              aria-label={link.title}
            >
              <Icon icon={link.icon} size="1.25rem" />
            </IconLink>
          </li>
        ))}
      </LinksContainer>
    </StickyNav>
    <StyledFooter data-testid="footer">{children}</StyledFooter>
  </>
);

export default Footer;
