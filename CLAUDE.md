# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Install dependencies**: `yarn && yarn husky install`
- **Build all packages**: `yarn nx run-many --target=build --all`
- **Lint all projects**: `yarn nx run-many --target=lint --all`
- **Run tests for a specific package or app**:

  ```bash
  yarn nx test @mordech/<package-or-app-name>
  ```

- **Run affected tests after changes**:

  ```bash
  yarn nx affected:test
  ```

- **Start a local development server for an app**: `yarn nx serve @mordech/<app-name>`
- **Build a single project** (e.g., the color picker): `yarn nx run hct-color-picker:build`
- **Run a single test file or pattern**:

  ```bash
  yarn nx test @mordech/<project> --testPathPattern="<path-or-regex>"
  ```

- **Publish packages (maintainer only)**: `yarn publish-packages`

## High‑Level Architecture Overview

The repository is a monorepo managed with **NX** and **Lerna**, using Yarn Berry 4.x as the package manager. It contains two main directories:

1. **`packages/`** – reusable libraries that provide core functionality across the workspace.
   - `@mordech/vite-lit-loader`: a custom Vite plugin for loading Lit components, SVGs, CSS, and HTML directly into Lit component files.
   - `@mordech/web-components`: a collection of standalone web‑component implementations (e.g., color picker layers, interaction overlays). These are published as npm packages that other projects import.
   - `@mordech/tokens`: design tokens (colors, spacing, typography) used by both React and Lit components.
2. **`apps/`** – full‑stack or browser extension applications built from the shared libraries.
   - `hct-color-picker`: a web app that demonstrates color selection functionality using the Lit component library.
   - `inbox-zero-cats-for-gmail`: a Chrome/Firefox extension that adds UI overlays to Gmail, leveraging the same token and component packages.

All projects expose NX targets (`build`, `serve`, `test`, `lint`) defined in their individual `project.json` files. Shared build tooling (Vite, Jest/Vitest, Loki for visual regression) is configured centrally via NX’s workspace configuration, so developers can run any target with a single `yarn nx <target> …` command.

## Development Workflow Highlights

- **Code generation** – The repo ships with a custom Vite loader (`vite-lit-loader`) that allows importing SVGs, CSS, and HTML directly into Lit component source files. This keeps component code concise and eliminates the need for separate build steps for these assets.
- **Testing** – Projects use Vitest (or Jest for legacy tests) combined with Loki for visual regression. Tests can be run individually via the `--testPathPattern` flag or by specifying a test file path directly to `yarn nx test …`.
- **Monorepo tooling** – NX Cloud is enabled, so builds and lint runs are cached across CI runs. Use `yarn nx affected:*` commands to target only changed projects.

## Environment & Tooling

- Node.js 22 (as defined in `.nvmrc`).
- Yarn Berry 4.x with Plug‑and‑Play disabled (`node_modules` is present).
- NX v19.8.x, Lerna for versioning packages.
- Vite 5.0.x as the bundler.
- TypeScript strict mode across all projects.

---

This file should be updated whenever new top‑level scripts or architectural changes are introduced. Future Claude Code instances will use these instructions to run commands, navigate the repo, and understand how components interrelate.
