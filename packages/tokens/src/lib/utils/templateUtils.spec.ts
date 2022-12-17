import { css, html } from './templateUtils';

describe('templateUtils', () => {
  it('should return a string', () => {
    expect(html`<div></div>`).toBe('<div></div>');
    expect(
      css`
        div {
          color: red;
        }
      `
    ).toBe(
      `
        div {
          color: red;
        }
      `
    );
  });

  it('should return a string with a variable', () => {
    const color = 'red';
    expect(html`<div style="color: ${color}"></div>`).toBe(
      '<div style="color: red"></div>'
    );
    expect(
      css`
        div {
          color: ${color};
        }
      `
    ).toBe(
      `
        div {
          color: red;
        }
      `
    );
  });

  it('should return a string with a function', () => {
    const color = 'red';
    const getColor = () => color;
    expect(html`<div style="color: ${getColor()}"></div>`).toBe(
      '<div style="color: red"></div>'
    );
    expect(
      css`
        div {
          color: ${getColor()};
        }
      `
    ).toBe(
      `
        div {
          color: red;
        }
      `
    );
  });

  it('should return a string with a function with a variable', () => {
    const color = 'red';
    const getColor = (color) => color;
    expect(html`<div style="color: ${getColor(color)}"></div>`).toBe(
      '<div style="color: red"></div>'
    );
    expect(
      css`
        div {
          color: ${getColor(color)};
        }
      `
    ).toBe(
      `
        div {
          color: red;
        }
      `
    );
  });
});
