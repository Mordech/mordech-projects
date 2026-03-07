import { axe } from 'jest-axe';
import { html, render } from 'lit';

import { MrdChipElement } from '.';

describe('mrd-chip', () => {
  it('should be defined', () => {
    expect(MrdChipElement).toBeDefined();
  });

  it('should render with default slot content', () => {
    const container = document.createElement('div');
    render(html`<mrd-chip>Tag</mrd-chip>`, container);
    expect(container.innerHTML).toBeDefined();
  });

  it('should have no accessibility violations (default)', async () => {
    const container = document.createElement('div');
    render(html`<mrd-chip>Tag</mrd-chip>`, container);
    await expect(await axe(container)).toHaveNoViolations();
  });

  it('should have no accessibility violations (interactive)', async () => {
    const container = document.createElement('div');
    render(html`<mrd-chip variant="interactive">Tag</mrd-chip>`, container);
    await expect(await axe(container)).toHaveNoViolations();
  });

  it('should have no accessibility violations (clearable)', async () => {
    const container = document.createElement('div');
    render(html`<mrd-chip variant="clearable">Tag</mrd-chip>`, container);
    await expect(await axe(container)).toHaveNoViolations();
  });

  it('should add role=button when variant is interactive', async () => {
    const container = document.createElement('div');
    render(html`<mrd-chip variant="interactive">Tag</mrd-chip>`, container);
    document.body.appendChild(container);

    const chip = container.querySelector('mrd-chip') as MrdChipElement;
    await chip.updateComplete;

    const chipDiv = chip.shadowRoot?.querySelector('.chip') as HTMLElement;
    expect(chipDiv.role).toBe('button');

    document.body.removeChild(container);
  });

  it('should not add role=button when variant is default or clearable', async () => {
    for (const variant of ['default', 'clearable'] as const) {
      const container = document.createElement('div');
      render(html`<mrd-chip variant=${variant}>Tag</mrd-chip>`, container);
      document.body.appendChild(container);

      const chip = container.querySelector('mrd-chip') as MrdChipElement;
      await chip.updateComplete;

      const chipDiv = chip.shadowRoot?.querySelector('.chip') as HTMLElement;
      expect(chipDiv.role).toBeNull();

      document.body.removeChild(container);
    }
  });

  it('should dispatch mrd-chip-clear when clear button is clicked', async () => {
    const container = document.createElement('div');
    render(html`<mrd-chip variant="clearable">Tag</mrd-chip>`, container);
    document.body.appendChild(container);

    const chip = container.querySelector('mrd-chip') as MrdChipElement;
    await chip.updateComplete;

    const clearButton = chip.shadowRoot?.querySelector(
      'button.clear',
    ) as HTMLButtonElement;
    expect(clearButton).toBeTruthy();

    const listener = vi.fn();
    chip.addEventListener('mrd-chip-clear', listener);
    clearButton.click();

    expect(listener).toHaveBeenCalledTimes(1);

    document.body.removeChild(container);
  });
});
