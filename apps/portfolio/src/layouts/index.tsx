import React, { FC } from 'react';
import { GlobalStyle } from '@mordech/react-components';

import { Footer } from '../components/footer';
import { Navigation } from '../components/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <Navigation />
    {children}
    <Footer />
  </>
);

export default Layout;
