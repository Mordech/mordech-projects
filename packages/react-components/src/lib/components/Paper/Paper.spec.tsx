import { colors, elevation } from '@mordech/tokens';
import { render } from '@testing-library/react';

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
    expect(getByTestId('paper')).toHaveStyle(`box-shadow: ${elevation[0]};`);
  });
  it('should render outlined when passing variant', () => {
    const { getByTestId } = render(
      <Paper variant="outlined" data-testid="paper" />
    );
    expect(getByTestId('paper')).toHaveStyleRule(
      'background-color',
      'transparent'
    );
    expect(getByTestId('paper')).toHaveStyleRule('border-style', 'solid');
    expect(getByTestId('paper')).toHaveStyleRule('border-width', '1px');
    expect(getByTestId('paper')).toHaveStyleRule(
      'border-color',
      colors.background.surface
    );
  });
  it('should render with background color when passing "fill" variant', () => {
    const { getByTestId } = render(
      <Paper variant="fill" data-testid="paper" />
    );
    expect(getByTestId('paper')).toHaveStyleRule(
      'background-color',
      colors.background.surface
    );

    expect(getByTestId('paper')).toHaveStyleRule('border-color', 'transparent');
  });
});
