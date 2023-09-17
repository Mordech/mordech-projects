<div align="center">
<picture >
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/71976177/209589282-346c2808-4e49-4810-a9fa-fdf0caee2bd1.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/71976177/209589269-d4a389b4-6334-430b-aadc-83eff429ff25.svg">
  <img alt="Logo" src="https://user-images.githubusercontent.com/71976177/209589282-346c2808-4e49-4810-a9fa-fdf0caee2bd1.svg">
</picture>

### Mordech Projects

[![Build Status](https://github.com/Mordech/mordech-projects/actions/workflows/main.yml/badge.svg)](https://github.com/Mordech/mordech-projects/actions/workflows/main.yml)
[![Published on npm](https://img.shields.io/npm/v/@mordech/tokens.svg?logo=npm&label=Tokens&logoColor=FFF)](https://www.npmjs.com/package/@mordech/tokens)
[![React Storybook](https://img.shields.io/badge/React-Storybook-FF4785?logo=React&style=flat&logoColor=FFF)](https://mordech-react-components.netlify.app/)
[![Lit Storybook](https://img.shields.io/badge/Lit-Storybook-FF4785?logo=Lit&style=flat&logoColor=FFF)](https://mordech-web-components.netlify.app/)
[![Published on npm](https://img.shields.io/npm/v/@mordech/vite-lit-loader.svg?logo=npm&label=Vite%20Lit%20Loader&logoColor=FFF)](https://www.npmjs.com/package/@mordech/vite-lit-loader)

</div>

# Hey! 👋 it seems you found yourself in my personal projects repo

This repository is a hub for my projects and things I do in my free time. You can use it at your own risk 😅

This project uses `pnpm workspaces`, `Lerna`, and `NX` + `NX Cloud`

## What can I find here?

### Vite Lit loader

[link](/packages/vite-lit-loader/)

This Vite plugin allows you to load `svg`, `css`, and `html` without wrapping them with `unsafeCSS`, `unsafeHTML` or `unsafeSVG` functions.

### My react component library

[link](/packages/react-components/)

Creating a personal react component library frees me to work fast, make quick iterations, and experiment with ideas I usually can't do at work.

### My web component library

[link](/packages/web-components/)

I'm trying to create a web component library using `lit`. I want a framework-agnostic library that can be used in any project.

### Inbox Zero Cats for Gmail

[link](/apps/inbox-zero-cats-for-gmail/)

This web extension for Gmail displays a cat image instead of an empty inbox. The cat image is from [Unsplash](https://unsplash.com/).

### HCT (Hue, Chroma, Tone) Color Picker for Figma

[link](/apps/hct-color-picker/)

This is a color picker for Figma. It allows you to pick a color using the HCT color model.

### My tokens library

[link](/packages/tokens/)

This library allows sharing Design-Tokens (`colors`, `typography`, `breakpoints`, etc.) between projects. It's a great way to keep your design system consistent across projects.

### Portfolio

[link](/apps/portfolio/) (working on a readme 😊)

I'm trying to develop [my portfolio](https://elad.mizrahi.cc) and create my personal component library and style guide.

## Getting started

Run

```bash
pnpm && pnpm husky install
```

Or running any command from the root folder using `NX`

```bash
pnpm nx run @mordech/[project][:target][:configuration]
```

e.g.

```bash
pnpm nx run @mordech/portfolio:start
```

or use other NX commands (e.g., `run-many`, `affected`). For more, read [NX documentation](https://nx.dev/reference/commands#nx-cli-commands).

I recommend using the [NX plugin](https://nx.dev/core-features/integrate-with-editors) as well.

## Contributing

I'm open to contributions, but please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

This is a personal project, so I'm not sure I'll be able to merge all PRs. But I'll try my best 😊
