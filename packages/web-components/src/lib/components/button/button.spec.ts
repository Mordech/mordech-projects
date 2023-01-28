import { axe } from 'jest-axe';
import { html, render } from 'lit';

import { MrdButtonElement } from '.';

describe('Button', () => {
  it('should be defined', () => {
    expect(MrdButtonElement).toBeDefined();
  });

  it('should render', () => {
    const container = document.createElement('div');
    render(html`<mrd-button></mrd-button>`, container);
    expect(container.innerHTML).toBeDefined();
  });

  it('should have no violations', async () => {
    const container = document.createElement('div');
    render(html`<mrd-button>Hello world</mrd-button>`, container);
    await expect(await axe(container)).toHaveNoViolations();
  });
});
