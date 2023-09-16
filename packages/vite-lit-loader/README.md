# @mordech/vite-lit-loader

A vite plugin for loading `svg`, `html`, `css`, `scss` and `sass` files as lit-html templates / styles.

## Install

```bash
pnpm add @mordech/vite-lit-loader
```

or

```bash
yarn add @mordech/vite-lit-loader
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import { viteLitLoader } from '@mordech/vite-lit-loader';

export default defineConfig({
  plugins: [viteLitLoader()],
});
```

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
