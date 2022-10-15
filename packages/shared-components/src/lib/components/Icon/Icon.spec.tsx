import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Icon } from './Icon';
import { colors } from '../../abstracts';

// TODO test icon with react element
// TODO test style outputs

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
});
