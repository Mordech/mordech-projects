# @mordech/tokens

This is a library for sharing design tokens (colors, typography, breakpoints, etc.) between projects.

## Why

I have a few projects going on, and I want to have one source of truth for design tokens.

## How

I'm using [NX](https://nx.dev/) and [NX](https://nx.app/) Cloud](https://nx.app/).

## How to use

### Install

```bash
yarn add @mordech/tokens
```

### Import

```js
import { colors } from '@mordech/tokens';
```

### Use

```js
const Component = () => <div style={{ backgroundColor: colors.primary }} />;
```

## How to develop

```bash
yarn install
```

```bash
yarn start
```

## How to build

```bash
yarn install
```

```bash
yarn build
```

## How to contribute

- Fork the repository
- Create a new branch
- Make your changes
- Open a pull request

## License

[MIT](LICENSE)
