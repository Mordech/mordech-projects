# AGENTS.md - Agentic Coding Guidelines

This file provides guidance for AI agents working in this repository.

## Repository Overview

This is an NX monorepo with Yarn Berry 4.x. It contains:

- `packages/` - Reusable libraries (@mordech/web-components, @mordech/react-components, @mordech/tokens, @mordech/vite-lit-loader)
- `apps/` - Applications (hct-color-picker, inbox-zero-cats-for-gmail, portfolio)

## Build Commands

```bash
# Install dependencies
yarn && yarn husky install

# Build all packages
yarn nx run-many --target=build --all

# Build a single project
yarn nx build @mordech/<project-name>

# Build affected projects only
yarn nx affected:build
```

## Lint Commands

```bash
# Lint all projects
yarn nx run-many --target=lint --all

# Lint a specific project
yarn nx lint @mordech/<project-name>

# Lint affected projects only
yarn nx affected:lint
```

## Test Commands

```bash
# Run tests for a specific package or app
yarn nx test @mordech/<package-or-app-name>

# Run a single test file or pattern
yarn nx test @mordech/<project> --testPathPattern="<path-or-regex>"

# Run tests in watch mode
yarn nx test @mordech/<project> --watch

# Run affected tests after changes
yarn nx affected:test
```

## Development Commands

```bash
# Start dev server for an app
yarn nx serve @mordech/<app-name>

# Run Storybook
yarn nx storybook @mordech/<project-name>

# Build Storybook
yarn nx build-storybook @mordech/<project-name>
```

## Visual Regression Testing

```bash
# Run all visual tests for current branch
yarn nx affected:visual

# Run visual tests for a specific package
yarn nx visual @mordech/<package-name>

# Approve visual test changes
yarn nx visual:approve @mordech/<package-name>
```

## Code Style Guidelines

### TypeScript

- Use **strict TypeScript** mode (enabled in tsconfig.base.json)
- Always define explicit return types for functions
- Use `type` for unions/intersections, `interface` for object shapes
- Avoid `any` - use `unknown` when type is truly unknown

### Imports (Lit Components)

Use `simple-import-sort` ordering:

1. External libraries (react, @lit, lit)
2. Internal packages (@mordech/\*)
3. Side effects (^\\u0000)
4. Parent imports (^\\.\\.(?!/?$))
5. Relative imports (^\\./)
6. CSS/SCSS imports (^.+\\.?(css)$)

```typescript
// Good import order
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';

import { colors } from '@mordech/tokens';

import '../mrd-interaction-layer';

import focusableBase from '../../styles/focusable.styles.scss?lit';
import type { Sizes } from '../../types';

import styles from './button.styles.scss?lit';
```

### Naming Conventions

- **Components**: PascalCase (e.g., `MrdButtonElement`, `Button`)
- **Web Components**: kebab-case with `mrd-` prefix (e.g., `mrd-button`)
- **Variables/Functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE
- **Private members**: Prefix with underscore (e.g., `_handleClick`)
- **CSS Custom Properties**: kebab-case with `--mrd-` prefix

### Formatting

- Use **Prettier** with: 2-space indent, semicolons, single quotes
- Run `yarn nx format:write` to auto-format

### Lit Components

- Use `@customElement` decorator with `mrd-` prefix
- Use `@property` for reactive properties, `@state` for internal reactive state
- Use `static styles` for component styles
- Use `css` tag for inline styles, or import SCSS with `?lit` suffix
- Use `html` and `svg` tags from `lit/static-html.js`
- Add `declare global` for custom element type declarations

### React Components

- Use styled-components for styling
- Use `FC` type from React for functional components
- Use transient props (prefixed with `$`) for styled-components to avoid passing to DOM
- Export types alongside components

### Error Handling

- Use try/catch for async operations
- Return proper error states in components
- Log errors appropriately (use `console.warn` for warnings, avoid `console.log`)
- Handle edge cases explicitly with switch statements including default cases

### Testing

- Place tests alongside source files with `.spec.ts` or `.spec.tsx` extension
- Use Vitest for unit testing
- Use @testing-library packages for DOM testing
- Test accessibility using jest-axe
- Include visual regression tests via Storybook + Loki

### Git Conventions

- Use Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`
- Run linting before committing
- Husky pre-commit hooks are enabled

## Key Dependencies

- Node.js 22 (from .nvmrc)
- Yarn Berry 4.x
- NX 19.x
- Vite 5.x
- Lit 3.x
- React 18.x
- TypeScript 5.4.x
- Vitest 1.x

## Important Notes

- NX Cloud is enabled - builds are cached across CI runs
- All projects must be built before testing (test target depends on ^build)
- Use `yarn nx reset` if you encounter caching issues
