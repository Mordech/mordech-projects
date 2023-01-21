import { axe } from 'jest-axe';
import { html, render } from 'lit';

import { Range } from '.';

describe('Range', () => {
  it('should be defined', () => {
    expect(Range).toBeDefined();
  });

  it('should render', () => {
    const container = document.createElement('div');
    render(html`<mrd-range></mrd-range>`, container);
    expect(container.innerHTML).toBeDefined();
  });

  it('should have a value', () => {
    const range = new Range();
    expect(range.value).toBeDefined();
    expect(range.value).toBe(50);

    range.value = 25;
    expect(range.value).toBe(25);
  });

  it('should have a min', () => {
    const range = new Range();
    expect(range.min).toBeDefined();
    expect(range.min).toBe(0);

    range.min = 25;
    expect(range.min).toBe(25);
  });

  it('should have a max', () => {
    const range = new Range();
    expect(range.max).toBeDefined();
    expect(range.max).toBe(100);

    range.max = 50;
    expect(range.max).toBe(50);
  });

  it('should have a handleInput', () => {
    const range = new Range();
    expect(range.handleInput).toBeDefined();
  });

  it('should have no violations', async () => {
    const container = document.createElement('div');
    render(
      html`<mrd-range min="0" max="10" .value=${1 + 1}>Hello world</mrd-range>`,
      container
    );
    await expect(await axe(container)).toHaveNoViolations();
  });
});
