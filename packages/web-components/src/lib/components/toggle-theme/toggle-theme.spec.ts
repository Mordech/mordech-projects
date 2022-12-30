import { html, render } from 'lit';

import { ToggleTheme } from './toggle-theme';

describe('ToggleTheme', () => {
  function getToggleThemeButton(): HTMLElement | null | undefined {
    return document.body
      .querySelector('mrd-toggle-theme')
      ?.shadowRoot?.querySelector('button');
  }

  beforeEach(async () => {
    render(html`<mrd-toggle-theme></mrd-toggle-theme>`, document.body);
    await new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        if (getToggleThemeButton()) {
          clearInterval(interval);
          resolve();
        }
      });
    });
  });

  it('should be defined', () => {
    expect(ToggleTheme).toBeDefined();
  });

  it('should render', () => {
    const container = document.createElement('div');
    render(html`<mrd-toggle-theme></mrd-toggle-theme>`, container);
    expect(container.innerHTML).toBeDefined();
  });

  it('should have a theme', () => {
    const toggleTheme = new ToggleTheme();
    expect(toggleTheme.theme).toBeDefined();
    expect(toggleTheme.theme).toBe('light');

    toggleTheme.toggleTheme();
    expect(toggleTheme.theme).toBe('dark');

    toggleTheme.toggleTheme();
    expect(toggleTheme.theme).toBe('light');
  });

  it('should change class based on theme', async () => {
    const svg = getToggleThemeButton()?.querySelector('svg');

    expect(await svg?.classList.contains('light')).toBe(true);
    expect(await svg?.classList.contains('dark')).toBe(false);

    await getToggleThemeButton()?.click();

    expect(await svg?.classList.contains('light')).toBe(false);
  });

  it('should toggle theme', () => {
    const toggleTheme = new ToggleTheme();
    expect(toggleTheme).toBeDefined();
    expect(toggleTheme.toggleTheme()).toBe('dark');
    expect(toggleTheme.toggleTheme()).toBe('light');
  });

  it('should have a saveToStorage', () => {
    const toggleTheme = new ToggleTheme();

    expect(toggleTheme.saveToStorage).toBeDefined();
    expect(toggleTheme.saveToStorage).toBe(true);

    toggleTheme.saveToStorage = false;
    expect(toggleTheme.saveToStorage).toBe(false);
  });
});
