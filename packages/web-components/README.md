# @mordech/web-components

[![Published on npm](https://img.shields.io/npm/v/@mordech/web-components.svg?logo=npm)](https://www.npmjs.com/package/@mordech/web-components)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white&style=flat)](https://mordech-web-components.netlify.app/)

[@mordech/web-components](https://www.npmjs.com/package/@mordech/web-components) is a collection of reusable web components.

## Install

```sh
yarn add @mordech/web-components
```

## Usage

All components have the prefix `mrd-`.

```js
import { html, render } from 'lit';
import '@mordech/web-components/mrd-button';

const root = document.querySelector('#root');
render(html`<mrd-button>Click me</mrd-button>`, root);
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
| Button              |  🟢   |  🟢  |   🔴   |
| Chip                |  🟡   |  🔴  |   🔴   |
| Paint Swatch        |  🟢   |  🟢  |   🔴   |
| Range               |  🟢   |  🟢  |   🔴   |
| Text Field          |  🟡   |  🔴  |   🔴   |
| Toggle Theme Button |  🟢   |  🟢  |   🔴   |

## License

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
