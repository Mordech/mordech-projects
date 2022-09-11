import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Icon } from './Icon';

afterEach(() => cleanup());

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon iconName={'linkedin'} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have no violations', async () => {
    const { baseElement } = render(<Icon iconName={'linkedin'} />);
    expect(await axe(baseElement)).toHaveNoViolations();
  });
});
