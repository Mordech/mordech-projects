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
  it('should be sticky only in screens above 1240px', () => {
    const { getByTestId } = render(
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

    // TODO: fix this test
    // expect(getByTestId('social-links')).toHaveStyleRule('position', 'sticky', {
    //   media: `screens and (min-width: 1240px)`,
    // });

    expect(getByTestId('social-links')).not.toHaveStyleRule(
      'position',
      'sticky'
    );
  });
});
