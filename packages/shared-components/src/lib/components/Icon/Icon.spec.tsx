import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { colors } from '../../abstracts';

import { Icon } from './Icon';

afterEach(() => cleanup());

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon icon={'linkedin'} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have no violations', async () => {
    const { baseElement } = render(
      <Icon iconColor={colors.blue} size="3rem" icon={'linkedin'} />
    );
    expect(await axe(baseElement)).toHaveNoViolations();
  });
  it('should work with a react element as an icon', () => {
    const { getByTestId } = render(
      <Icon icon={<div data-testid="test-icon">test</div>} />
    );
    expect(getByTestId('test-icon')).toBeTruthy();
  });

  it('should pass color and size props correctly', () => {
    const { getByTestId, rerender } = render(
      <Icon size="1.5rem" iconColor={colors.dark} icon="linkedin" />
    );
    expect(getByTestId('icon-font')).toHaveStyle(`
      color: ${colors.dark};
      font-size: 1.5rem;
      `);
    rerender(<Icon size="2rem" iconColor={colors.blue} icon="linkedin" />);
    expect(getByTestId('icon-font')).toHaveStyle(`
      color: ${colors.blue};
      font-size: 2rem;
      `);
    rerender(
      <Icon
        iconColor={colors.dark}
        size="2rem"
        icon={<div data-testid="test-icon">test</div>}
      />
    );
    expect(getByTestId('test-icon')).toHaveStyle(`
      width: 100%;
      `);
    expect(getByTestId('icon-element')).toHaveStyle(`
      min-width: 2rem;
      width: 2rem;
      `);
  });
});
