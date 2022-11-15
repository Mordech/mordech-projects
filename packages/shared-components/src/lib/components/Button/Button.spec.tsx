import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { colors } from '../../abstracts';
import { removeWhiteSpace } from '../../utils';

import { Button } from './Button';

afterEach(() => cleanup());

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Test Button</Button>);
    expect(baseElement).toBeTruthy();
  });
  it('should not have any accessibility violations', async () => {
    const { baseElement, rerender } = render(
      <nav>
        <Button aria-label="test button">Test button</Button>
      </nav>
    );

    rerender(
      <nav>
        <Button
          asElement="a"
          href="https://www.google.com"
          title="Go to google"
        >
          Go to google
        </Button>
      </nav>
    );

    rerender(
      <nav>
        <Button title="download" startIcon="download">
          download
        </Button>
        <Button variant="outline" title="search" endIcon="download">
          search
        </Button>
        <Button variant="flat" title="flat button">
          I'm flat!
        </Button>
      </nav>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
  });
  it('should have a default style', () => {
    const { getByText } = render(<Button>Test Button</Button>);
    expect(getByText('Test Button')).toHaveStyle(`
      --background-color: ${removeWhiteSpace(colors.primary.base)};
      --color: ${removeWhiteSpace(colors.primary.on)};
      --border-color: var(--background-color);
      
      background-color: ButtonFace;
      border: 2px outset buttonface;
      color: ButtonText;
    `);
  });
  it('should have a flat style', () => {
    const { getByText } = render(<Button variant="flat">Test Button</Button>);
    expect(getByText('Test Button')).toHaveStyle(`
      --background-color: ${removeWhiteSpace(colors.background.surface)};
      --color: ${removeWhiteSpace(colors.background.onSurface)};
      --border-color: var(--background-color);

      background-color: ButtonFace;
      border: 2px outset buttonface;
      color: ButtonText;
    `);
  });
  it('should have an outline style', () => {
    const { getByText } = render(
      <Button variant="outline">Test Button</Button>
    );
    expect(getByText('Test Button')).toHaveStyle(`
      --background-color: transparent;
      --color: ${removeWhiteSpace(colors.primary.base)};
      --border-color: var(--color);

      background-color: ButtonFace;
      border: 2px outset buttonface;
    `);
  });
});
