# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Install dependencies**: `yarn && yarn husky install`
- **Build all packages**: `yarn build`
- **Test all packages**: `yarn test`
- **Lint all projects**: `yarn lint`
- **Build only changed packages** (vs `origin/main`): `yarn build:affected`
- **Test only changed packages** (vs `origin/main`): `yarn test:affected`
- **Test a single package**: `yarn lerna run test --scope=@mordech/<package-name>`
- **Run a package dev server**: `yarn workspace <package-name> dev` (or `start`/`develop` depending on the app)
- **Publish packages (maintainer only)**: `yarn publish-packages`

## Storybook & Visual Regression

- **Start Storybook for web-components** (port 4600): `yarn workspace @mordech/web-components storybook`
- **Start Storybook for react-components** (port 4400): `yarn workspace @mordech/react-components storybook`
- **Build Storybook**: `yarn lerna run build-storybook --scope=@mordech/<package-name>`
- **Run visual regression tests** (requires built Storybook): `yarn lerna run visual --scope=@mordech/<package-name>`
- **Approve visual snapshots**: `yarn lerna run visual:approve --scope=@mordech/<package-name>`

Visual tests use [Loki](https://loki.js.org/) with `looks-same` diffing against Chrome Docker. The `visual:ci` script adds `--requireReference` for CI enforcement.

## Architecture Overview

Monorepo managed with **Lerna** (`useNx: false`) and Yarn Berry 4.x workspaces. All versioned packages use Lerna's `--conventional-commits` for automated versioning.

### Packages (`packages/`)

| Package | Description |
|---|---|
| `@mordech/tokens` | Design tokens (colors, spacing, typography) — ships CSS, CJS, and ESM. Build pipeline: `build:assets` → `build:css` → `build:ts` → `build:types` via `npm-run-all`. |
| `@mordech/vite-lit-loader` | Vite plugin that transforms `.scss`, `.css`, `.html`, and `.svg` imports inside Lit `css\`\`` tagged templates and component files. Used by `@mordech/web-components`. |
| `@mordech/web-components` | Lit-based web components (`mrd-*`). Each component lives in `src/lib/components/<name>/` with a `<name>.ts`, `<name>.styles.scss`, `index.ts`, optional `*.spec.ts`, and a `stories/` folder. Vite builds each component as a separate entry point plus a top-level `index.ts`. Lit is externalized from the bundle. |
| `@mordech/react-components` | React wrappers around the web components. Private (not published). Has Storybook and Loki visual tests. |
| `@mordech/storybook-toggle-theme-addon` | Custom Storybook addon for toggling light/dark theme. Private. |

### Apps (`apps/`)

| App | Description |
|---|---|
| `hct-color-picker` | Figma plugin. Two build targets: `build:ui` (Vite) and `build:plugin` (esbuild → `dist/code.js`). Entry points: `ui-src/` (UI iframe) and `plugin-src/code.ts` (Figma sandbox). |
| `inbox-zero-cats-for-gmail` | Chrome/Firefox extension. Uses `ts-node` scripts for bundling; `web-ext lint` for extension validation. No test suite. |
| `portfolio` | Gatsby site using `@mordech/react-components` and `@mordech/tokens`. No Lerna-managed build (Gatsby CLI). |

### Key Conventions

- **Web component file layout**: every `mrd-*` component is a folder under `src/lib/components/` — `<name>.ts` (class), `<name>.styles.scss` (imported via `vite-lit-loader`), `index.ts` (re-export), `stories/` (Storybook).
- **TypeScript strict mode** across all packages.
- **ESLint + Stylelint**: `lint` runs ESLint on `src/`; `lint:css` runs Stylelint on `src/**/*.{ts,css,scss}`.
- **Testing**: Vitest with `--coverage` (`@vitest/coverage-v8`). Tests are co-located as `*.spec.ts` next to the source file.
- **Commit messages**: enforced by `commitlint` with `@commitlint/config-conventional` (conventional commits). Validated in the `commit-msg` husky hook.
- **Pre-commit hook**: runs `lint`, `lint:css`, and `test` via `lerna --since HEAD`.
- **Pre-push hook**: runs `build:affected`, `test:affected`, and `build-storybook` for changed packages.

## Environment & Tooling

- Node.js 22 (`.nvmrc`).
- Yarn Berry 4.x, PnP disabled (`node_modules` present).
- Lerna 8.x with `useNx: false`.
- Vite 5.x as the bundler for packages and apps.
- Vitest 1.x for unit tests.

## Git Workflow

Use `git checkout -b <branch-name>` to create branches. Review recent commits with `git log` before starting work. Versioning is managed by Lerna — do not manually edit `version` fields in `package.json`.

---

Update this file when new packages, apps, or top-level scripts are added.
