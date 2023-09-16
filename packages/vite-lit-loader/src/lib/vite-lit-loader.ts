import { Plugin } from 'vite';

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
