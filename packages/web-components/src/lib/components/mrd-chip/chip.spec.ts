import { axe } from 'jest-axe';
import { html, render } from 'lit';
import { vi } from 'vitest';

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

  it('should have tabindex=0 when interactive, and no tabindex otherwise', async () => {
    for (const [variant, expected] of [
      ['interactive', '0'],
      ['default', null],
      ['clearable', null],
    ] as const) {
      const container = document.createElement('div');
      render(html`<mrd-chip variant=${variant}>Tag</mrd-chip>`, container);
      document.body.appendChild(container);

      const chip = container.querySelector('mrd-chip') as MrdChipElement;
      await chip.updateComplete;

      const chipDiv = chip.shadowRoot?.querySelector('.chip') as HTMLElement;
      expect(chipDiv.getAttribute('tabindex')).toBe(expected);

      document.body.removeChild(container);
    }
  });

  it('should dispatch click event on Enter or Space keydown when interactive', async () => {
    const container = document.createElement('div');
    render(html`<mrd-chip variant="interactive">Tag</mrd-chip>`, container);
    document.body.appendChild(container);

    const chip = container.querySelector('mrd-chip') as MrdChipElement;
    await chip.updateComplete;

    const chipDiv = chip.shadowRoot?.querySelector('.chip') as HTMLElement;
    const clickListener = vi.fn();
    chip.addEventListener('click', clickListener);

    chipDiv.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        composed: true,
      }),
    );
    chipDiv.dispatchEvent(
      new KeyboardEvent('keydown', { key: ' ', bubbles: true, composed: true }),
    );

    expect(clickListener).toHaveBeenCalledTimes(2);

    document.body.removeChild(container);
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
