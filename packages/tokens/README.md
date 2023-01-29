# @mordech/tokens

[![Published on npm](https://img.shields.io/npm/v/@mordech/tokens.svg?logo=npm)](https://www.npmjs.com/package/@mordech/tokens)

This is a library for sharing design tokens (colors, typography, breakpoints, etc.) between projects.

## Why

I have a few projects going on, and I want to have one source of truth for design tokens.

## How

I'm using [NX](https://nx.dev/) and [NX Cloud](https://nx.app/).

## How to use

### Install

```bash
pnpm add @mordech/tokens
```

#### Javascript

```js
import '@mordech/tokens/css';
```

#### CSS

```css
@import '@mordech/tokens/css';
```

All CSS var tokens have fallback values so the code should run without. except for fonts.

> ⚠️ Future version might have font as a separate import. Check docs if it changes

### Importing tokens

```js
import { colors } from '@mordech/tokens';
```

### Use

```js
const Component = () => <div style={{ backgroundColor: colors.primary }} />;
```

## How to develop

```bash
pnpm install
```

```bash
pnpm start
```

## How to build

```bash
pnpm install
```

```bash
pnpm build
```

## How to contribute

- Fork the repository
- Create a new branch
- Make your changes
- Open a pull request

## License

[MIT](LICENSE)
