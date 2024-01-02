import { join } from 'path';

import { loadStyle, loadTemplate, transformStyle } from '../vite-lit-loader';

const path = (...args: string[]) =>
  join(
    process.cwd(),
    '/packages/vite-lit-loader/src/lib/tests/assets/',
    ...args,
  );

describe('vite-lit-loader', () => {
  describe('loadTemplate', () => {
    it('should load HTML template', async () => {
      const id = path('test.html?lit');
      const result = await loadTemplate(id);
      expect(result).toBeDefined();
      expect(result).toContain('unsafeHTML');
      expect(result).toContain('<title>Test HTML</title>');
      expect(result).toMatchSnapshot();
    });

    it('should load SVG template', async () => {
      const id = path('test.svg?lit');
      const result = await loadTemplate(id);
      expect(result).toBeDefined();
      expect(result).toContain('unsafeSVG');
      expect(result).toMatchSnapshot();
    });

    it('should not load template for unsupported file types', async () => {
      const id = path('test.png');
      const result = await loadTemplate(id);
      expect(result).toBeUndefined();
    });

    it('should not load template for unsupported query', async () => {
      const id = path('test.svg?inline');
      const result = await loadTemplate(id);
      expect(result).toBeUndefined();
    });

    it('should load SVG template as use', async () => {
      const id = path('test.svg?as-use&lit');
      const result = await loadTemplate(id);
      expect(result).toBeDefined();
      expect(result).toContain('<use href="#test-svg"');
    });

    it('should pass attributes from query', async () => {
      const id = path('test.svg?as-use&class=foo&fill=red&lit');
      const result = await loadTemplate(id);
      expect(result).toBeDefined();
      expect(result).toContain('<use href="#test-svg"');
      expect(result).toContain('class="foo"');
      expect(result).toContain('fill="red"');
    });
  });

  describe('loadStyle', () => {
    it('should load SCSS style as empty string', async () => {
      const id = 'test.scss?lit';
      const result = await loadStyle(id);
      expect(result).toBeDefined();
      expect(result).toBe('');
    });

    it('should not load style for unsupported file types', async () => {
      const id = 'test.txt?lit';
      const result = await loadStyle(id);
      expect(result).toBeUndefined();
    });

    it('should not load style for unsupported query', async () => {
      const id = 'test.scss?inline';
      const result = await loadStyle(id);
      expect(result).toBeUndefined();
    });
  });

  describe('transformStyle', () => {
    it('should transform SCSS style', () => {
      const code = 'some SCSS code';
      const id = 'test.scss?lit';
      const result = transformStyle(code, id);
      expect(result).toBeDefined();
      expect(result).toContain('unsafeCSS');
    });

    it('should not transform style for unsupported file types', () => {
      const code = 'some CSS code';
      const id = 'test.txt';
      const result = transformStyle(code, id);
      expect(result).toBeUndefined();
    });
  });
});
