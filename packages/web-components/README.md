# @mordech/web-components

[@mordech/web-components](https://www.npmjs.com/package/@mordech/web-components) is a collection of reusable web components.

## Install

```sh
pnpm add @mordech/web-components
```

## Usage

All components have the prefix `mrd-`.

```js
import { html, render } from 'lit';
import '@mordech/web-components/mrd-component';

const root = document.querySelector('#root');
render(html`<mrd-component>Hello world</mrd-component>`, root);
```

## Roadmap

(I'm using [Material Web Components'](https://github.com/material-components/material-web) traffic light system)

**Alpha** components are in-development and may have many frequent breaking
changes.

**Beta** components are mostly polished and ready for use.

**Stable** components are reviewed, documented, and API complete.

- 🔴 Not started
- 🟡 In progress
- 🟢 Complete

### Components

| Component           | Alpha | Beta | Stable |
| ------------------- | :---: | :--: | :----: |
| Button              |  🟡   |  🔴  |   🔴   |
| Paint Swatch        |  🟢   |  🔴  |   🔴   |
| Range               |  🟢   |  🟢  |   🔴   |
| Toggle Theme Button |  🟢   |  🟡  |   🔴   |

## License

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
