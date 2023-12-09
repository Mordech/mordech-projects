# @mordech/tokens

[![Published on npm](https://img.shields.io/npm/v/@mordech/tokens.svg?logo=npm)](https://www.npmjs.com/package/@mordech/tokens)

> ⚠️ This is a work in progress. Please don't use this package until this message is removed.

This is a library for sharing design tokens (colors, typography, breakpoints, etc.) between projects.

## Why?

I have a few projects going on, and I want to have one source of truth for design tokens.

## Getting started

```bash
pnpm add @mordech/tokens
```

### CSS

```css
@import '@mordech/tokens/css';
```

This will load all the css files. If you want to load specific files, you can do the following:

```css
@import '@mordech/tokens/css/tokens.css'; /* CSS vars */
@import '@mordech/tokens/css/reset.css'; /* Reset */
@import '@mordech/tokens/css/fonts.css'; /* Fonts */
```

to reduce bundle size you can import only the fonts you need:

```css
@import '@mordech/tokens/css/fonts/mono.css';
@import '@mordech/tokens/css/fonts/sans.css';
@import '@mordech/tokens/css/fonts/serif.css';
@import '@mordech/tokens/css/fonts/ui.css';
```

Fonts are included locally in the package.

### CSS in JS (Emotion/Styled Components)

```js
import '@mordech/tokens/css'; // CSS vars

import { colors } from '@mordech/tokens';
```

#### Usage

```js
const Component = () => <div style={{ backgroundColor: colors.primary }} />;
```

## License

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
