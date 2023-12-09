import * as cheerio from 'cheerio';
import { readFileSync } from 'fs';
import { Plugin } from 'vite';

/**
 * Handles loading CSS SCSS and SASS files as lit-html styles
 */
export function litStyleLoader(): Plugin {
  return {
    name: 'vite-styles-loader',
    enforce: 'post',

    transform(_, id) {
      const split = id.split('?');
      const queryParams = new URLSearchParams(split[1]);

      if (queryParams.get('lit') === null) return;

      const path = split[0];
      const fileType = path.split('.').pop();

      if (!fileType?.match(/scss|sass|css/)) return;

      return `
          import { unsafeCSS } from 'lit';
          import styles from '${path}?inline';

          export default unsafeCSS(styles);
          `;
    },
  };
}

/**
 * Handles loading HTML and SVG files as lit-html templates
 */
export function litTemplateLoader(): Plugin {
  return {
    name: 'vite-lit-loader',
    enforce: 'pre',

    async load(id) {
      const split = id.split('?');
      const queryParams = new URLSearchParams(split[1]);

      if (queryParams.get('lit') === null) return;

      const path = split[0];
      const fileType = path.split('.').pop();

      if (!fileType?.match(/html|svg/)) return;
      const file = readFileSync(path, 'utf-8');

      if (fileType === 'svg') {
        const svgElement = cheerio.load(file, { xmlMode: true });

        if (queryParams.get('as-use') !== null) {
          const svgId = svgElement('svg').attr('id');

          svgElement('svg')
            .removeAttr('id')
            .removeAttr('viewBox')
            .html(`<use href="#${svgId}"></use>`);

          addAttributesFromParams(queryParams, svgElement('svg'));

          const svgOutput = svgElement.html() || '';

          return `
          import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
          
          export default unsafeSVG(\`${svgOutput}\`)
          `;
        }

        addAttributesFromParams(queryParams, svgElement('svg'));

        const svgOutput = svgElement.html() || '';

        return `
          import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

          export default unsafeSVG(\`${svgOutput}\`)
          `;
      }

      if (fileType === 'html') {
        const htmlElement = cheerio.load(file, { xmlMode: true });

        addAttributesFromParams(queryParams, htmlElement('html'));

        const htmlOutput = htmlElement.html() || '';

        return `
          import { unsafeHTML } from 'lit/directives/unsafe-html.js';

          export default unsafeHTML(\`${htmlOutput}\`);
          `;
      }

      return;
    },
  };
}

/**
 * @deprecated
 * This function is deprecated.
 * Use `litStyleLoader()` and `litTemplateLoader()` instead
 */
export function viteLitLoader(): Plugin {
  return {
    name: 'vite-lit-loader',
    enforce: 'post',

    async transform(_, id) {
      if (id.endsWith('lit')) {
        const path = id.split('?')[0];
        const fileType = path.split('.').pop();

        if (!fileType?.match(/html|svg|scss|sass|css/)) return;

        if (fileType === 'svg') {
          return `
          import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
          import svg from '${path}?raw';
          export default unsafeSVG(svg)
          `;
        }

        if (fileType === 'html') {
          return `
          import { unsafeHTML } from 'lit/directives/unsafe-html.js';
          import html from '${path}?raw';
          export default unsafeHTML(html)
          `;
        }

        if (fileType.match(/scss|sass|css/)) {
          const path = id.split('?')[0];

          return `
          import { unsafeCSS } from 'lit';
          import styles from '${path}?inline';
          export default unsafeCSS(styles);
          `;
        }

        return;
      }
      return;
    },
  };
}

function addAttributesFromParams(
  querystring: URLSearchParams,
  svgElement: cheerio.Cheerio<cheerio.Element>
) {
  for (const [key, value] of querystring) {
    if (key === 'lit') continue;

    if (key === 'as-use') continue;

    svgElement.attr(key, value);
  }
}
