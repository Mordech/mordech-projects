# Hey! 👋 it seems you found yourself in my personal projects repo

[![Build Status](https://github.com/Mordech/mordech-projects/actions/workflows/main.yml/badge.svg)](https://github.com/Mordech/mordech-projects/actions/workflows/main.yml)

This repository is a hub for my projects and things I do in my free time. You can use it at your own risk 😅

This project uses `yarn workspaces`, `Lerna`, and `NX` + `NX Cloud`

## What can I find here?

### My component library

[link](/packages/shared-components/)

Creating a personal component library frees me to work fast, make quick iterations, and experiment with ideas I usually can't do at work.

### My tokens library

[link](/packages/tokens/)

This library allows sharing Design-Tokens (`colors`, `typography`, `breakpoints`, etc.) between projects.

### Portfolio

[link](/apps/portfolio/) (working on a readme 😊)

I'm trying to develop [my portfolio](https://elad.mizrahi.cc) and create my personal component library and style guide.

### Inbox Zero Cats for Gmail

[link](/apps/inbox-zero-cats-for-gmail/)

This is a web extension for Gmail that displays a cat image instead of the inbox count. The cat image is from [Unsplash](https://unsplash.com/).

## Getting started

Run

```bash
yarn && yarn husky install
```

Or running any command from the root folder using `NX`

```bash
yarn nx run @mordech/[project][:target][:configuration]
```

e.g.

```bash
yarn nx run @mordech/portfolio:start
```

or use other NX commands (e.g., `run-many`, `affected`). For more, read [NX documentation](https://nx.dev/reference/commands#nx-cli-commands).

I recommend using the [NX plugin](https://nx.dev/core-features/integrate-with-editors) as well.
