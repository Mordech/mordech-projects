import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Footer from './Footer';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Footer>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Footer>
    );
    expect(baseElement).toBeTruthy();
  });
  it('rednder links in when using the links prop', async () => {
    const { getByTitle } = render(
      <Footer
        links={[
          {
            href: 'https://www.google.com',
            title: 'github',
            icon: 'github',
          },
          {
            href: 'https://www.google.com',
            title: 'linkedin',
            icon: 'linkedin',
          },
        ]}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </Footer>
    );
    expect(getByTitle('github')).toBeTruthy();
    expect(getByTitle('linkedin')).toBeTruthy();
  });
  it('should not have any accessibility violations', async () => {
    const { baseElement } = render(
      <Footer
        links={[
          {
            href: 'https://www.google.com',
            title: 'github',
            icon: 'github',
          },
          {
            href: 'https://www.google.com',
            title: 'linkedin',
            icon: 'linkedin',
          },
        ]}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit
      </Footer>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
  });
});
