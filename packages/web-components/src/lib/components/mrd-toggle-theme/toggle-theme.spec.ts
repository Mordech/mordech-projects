import { axe } from 'jest-axe';
import { html, render } from 'lit';

import { MrdToggleThemeElement } from '.';

describe('ToggleTheme', () => {
  it('should be defined', () => {
    expect(new MrdToggleThemeElement()).toBeDefined();
  });

  it('should render', () => {
    const container = document.createElement('div');
    render(html`<mrd-toggle-theme></mrd-toggle-theme>`, container);
    expect(container.innerHTML).toBeDefined();
  });

  it('should have a theme', () => {
    const toggleTheme = new MrdToggleThemeElement();
    expect(toggleTheme.theme).toBeDefined();
    expect(toggleTheme.theme).toBe('light');

    toggleTheme.toggleTheme();
    expect(toggleTheme.theme).toBe('dark');

    toggleTheme.toggleTheme();
    expect(toggleTheme.theme).toBe('light');
  });

  it('should change class based on theme', async () => {
    const toggleTheme = new MrdToggleThemeElement();
    const toggleThemeOnBody = await document.body.appendChild(toggleTheme);

    const svg = await toggleThemeOnBody?.shadowRoot?.querySelector('svg');

    expect(await svg?.classList.contains('light')).toBe(true);
    expect(await svg?.classList.contains('dark')).toBe(false);

    await toggleTheme.toggleTheme();

    expect(await svg?.classList.contains('light')).toBe(false);
  });

  it('should toggle theme', () => {
    const toggleTheme = new MrdToggleThemeElement();
    expect(toggleTheme).toBeDefined();
    expect(toggleTheme.toggleTheme()).toBe('dark');
    expect(toggleTheme.toggleTheme()).toBe('light');
  });

  it('should have a saveToStorage', () => {
    const toggleTheme = new MrdToggleThemeElement();

    expect(toggleTheme.saveToStorage).toBeDefined();
    expect(toggleTheme.saveToStorage).toBe(true);

    toggleTheme.saveToStorage = false;
    expect(toggleTheme.saveToStorage).toBe(false);
  });

  it('should have no violations', async () => {
    const container = document.createElement('div');
    render(html`<mrd-toggle-theme></mrd-toggle-theme>`, container);
    expect(await axe(container)).toHaveNoViolations;
  });
});
