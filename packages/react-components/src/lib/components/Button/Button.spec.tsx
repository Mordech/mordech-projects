import { colors } from '@mordech/tokens';
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
    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-background-color',
      colors.primary.base
    );

    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-color',
      colors.primary.onBase
    );

    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-border-color',
      'var(--mrd-btn-background-color)'
    );
  });
  it('should have a flat style', () => {
    const { getByText } = render(<Button variant="flat">Test Button</Button>);
    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-background-color',
      colors.background.surface
    );
    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-color',
      colors.background.onSurface
    );
    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-border-color',
      'var(--mrd-btn-background-color)'
    );
  });

  it('should have an outline style', () => {
    const { getByText } = render(
      <Button variant="outline">Test Button</Button>
    );
    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-background-color',
      'transparent'
    );

    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-color',
      colors.primary.base
    );

    expect(getByText('Test Button')).toHaveStyleRule(
      '--mrd-btn-border-color',
      'var(--mrd-btn-color)'
    );
  });

  it('should have no violations', async () => {
    const { baseElement } = render(<Button>Test Button</Button>);
    expect(await axe(baseElement)).toHaveNoViolations();

    const { baseElement: baseElement2 } = render(
      <Button variant="flat">Test Button</Button>
    );
    expect(await axe(baseElement2)).toHaveNoViolations();

    const { baseElement: baseElement3 } = render(
      <Button variant="outline">Test Button</Button>
    );

    expect(await axe(baseElement3)).toHaveNoViolations();

    const { baseElement: baseElement4 } = render(
      <Button variant="outline" disabled>
        Test Button
      </Button>
    );

    expect(await axe(baseElement4)).toHaveNoViolations();
  });
});
