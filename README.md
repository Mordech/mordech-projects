<div align="center">
<picture >
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/71976177/209589282-346c2808-4e49-4810-a9fa-fdf0caee2bd1.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/71976177/209589269-d4a389b4-6334-430b-aadc-83eff429ff25.svg">
  <img alt="Logo" src="https://user-images.githubusercontent.com/71976177/209589282-346c2808-4e49-4810-a9fa-fdf0caee2bd1.svg">
</picture>

### Free time fun. Lots of components
[![Build Status](https://github.com/Mordech/mordech-projects/actions/workflows/main.yml/badge.svg)](https://github.com/Mordech/mordech-projects/actions/workflows/main.yml)

</div>

# Hey! 👋 it seems you found yourself in my personal projects repo

This repository is a hub for my projects and things I do in my free time. You can use it at your own risk 😅

This project uses `yarn workspaces`, `Lerna`, and `NX` + `NX Cloud`

## What can I find here?

### My component library

[link](/packages/shared-components/)

Creating a personal component library frees me to work fast, make quick iterations, and experiment with ideas that I usually can't do at work.

### My tokens library

[link](/packages/tokens/)

This is a library for sharing design tokens (colors, typography, breakpoints, etc.) between projects.

### Portfolio

[link](/apps/portfolio/) (working on a readme 😊)

I'm trying to develop [my portfolio](https://elad.mizrahi.cc) myself, and in the process creating my personal component library and style guide.

### Inbox Zero Cats for Gmail

[link](/apps/inbox-zero-cats-for-gmail/)

This is a web extension for Gmail that displays a cat image instead of the inbox count. The cat image is from [Unsplash](https://unsplash.com/).

## Getting started

Run

```bash
yarn && yarn husky install
```

Then you can navigate to a folder and follow the instructions you can also run the components' library storybook using

```bash
yarn storybook
```

Or running any command from the root folder using `NX`

```bash
yarn nx run @mordech/[project][:target][:configuration]
```

e.g.

```bash
yarn nx run @mordech/portfolio:start
```

or use other NX commands (e.g `run-many`, `affected`). for more read [NX documentation](https://nx.dev/reference/commands#nx-cli-commands).

I recommend using the [NX plugin](https://nx.dev/core-features/integrate-with-editors) as well.
