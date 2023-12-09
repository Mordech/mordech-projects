# @mordech/vite-lit-loader

A vite plugin for loading `svg`, `html`, `css`, `scss`, and `sass` files as `lit-html` templates/styles.

## Install

```bash
pnpm add --dev @mordech/vite-lit-loader
yarn add --dev @mordech/vite-lit-loader
npm install --dev @mordech/vite-lit-loader
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { litStyleLoader, litTemplateLoader } from '@mordech/vite-lit-loader';

export default defineConfig({
  plugins: [litStyleLoader(), litTemplateLoader()],
});
```

`litStyleLoader()` Used to load CSS, SCSS, and SASS files as lit-html styles.

`litTemplateLoader()` Used to load SVG and HTML files as lit-html templates.

They are optional and can be used separately.

## Typescript

To load module types add the following to your `vite-env.d.ts`:

```ts
/// <reference types="@mordech/vite-lit-loader/types" />
```

## Usage

```ts
import svg from './icon.svg?lit';
import html from './template.html?lit';
import css from './styles.css?lit';
...
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('readme-component')
export class ReadmeComponent extends LitElement {
  static styles = [css];

  render() {
    return html`
      <div class="readme-component">
        <h1>Readme Component</h1>
        ${html}
        ${svg}
      </div>
    `;
  }
}
```

### Query Parameters

You can pass attributes to SVG or HTML using query parameters.

Example:

```ts
import svg from './icon.svg?fill=red&stroke=blue&stroke-width=2&width=100&height=100&lit';
```

⚠️ When using query parameters make sure you include `&lit` at the end of your query string.

#### Import a SVG as a `<use>` element with `?as-use&lit`

`?as-use&lit` creates a `<use>` element that refers to the `id` of the imported SVG. This is useful for reusing icons.

Make sure to include an `id` attribute on the original SVG element.

```ts
import svg from './icon.svg?as-use&lit';

render() {
  return html`
    <div class="readme-component">
      <h1>Readme Component</h1>
      ${svg}
      <!--
        Result:
        <svg xmlns="http://www.w3.org/2000/svg">
          <use href="#icon"></use>
        </svg>
       -->
    </div>
  `;
}
```
