import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { axe } from 'jest-axe';

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
        <Button variant="outline" title="search">
          search
        </Button>
        <Button variant="flat" title="flat button">
          I'm flat!
        </Button>
      </nav>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
  });
});
