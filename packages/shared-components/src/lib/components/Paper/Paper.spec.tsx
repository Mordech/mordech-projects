import React from 'react';
import { render } from '@testing-library/react';

import { colors, elevation } from '../../abstracts';

import { Paper } from './Paper';

describe('Paper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paper />);
    expect(baseElement).toBeTruthy();
  });

  it('should render as a div by default', () => {
    const { getByTestId } = render(<Paper data-testid="paper" />);
    expect(getByTestId('paper')).toBeInstanceOf(HTMLDivElement);
  });

  it('should not render as a div when passing asElement', () => {
    const { getByTestId } = render(
      <Paper asElement="article" data-testid="paper" />
    );
    expect(getByTestId('paper')).not.toBeInstanceOf(HTMLDivElement);
  });
  it('should render with shadow by default', () => {
    const { getByTestId } = render(<Paper data-testid="paper" />);
    expect(getByTestId('paper')).toHaveStyle(
      `box-shadow: ${elevation[0]
        ?.replace(/(\r\n|\n|\r|)/gm, '')
        .replace(/(, )/gm, ',')};`
    );
  });
  it('should render outlined when passing variant', () => {
    const { getByTestId } = render(
      <Paper variant="outlined" data-testid="paper" />
    );
    expect(getByTestId('paper')).toHaveStyle(`
      background-color: transparent; 
      border-style: solid;
      border-width: 1px;
      border-color: ${colors.light};
      `);
  });
  it('should render with background color when passing "fill" variant', () => {
    const { getByTestId } = render(
      <Paper variant="fill" data-testid="paper" />
    );
    expect(getByTestId('paper')).toHaveStyle(`
      background-color: ${colors.light};
      border-color: transparent;
      `);
  });
});
