---
name: web-component
description: >
  Create Lit-based web components in the @mordech/web-components package with Storybook stories.
  Use this skill when the user asks to create a new web component, add a component, build a UI element,
  or mentions "mrd-" components, Lit elements, or web components in this project. Also trigger when the
  user wants to add a story, modify an existing web component, or scaffold component files. Even if they
  just say "create a button variant" or "add a new input type", this skill applies.
---

# Creating Web Components

This skill guides you through creating Lit web components that follow the conventions of the `@mordech/web-components` package.

## Before You Start

1. Read the component barrel file to see existing components: `packages/web-components/src/lib/components/index.ts`
2. Check shared types at `packages/web-components/src/lib/types/index.ts` for reusable type definitions (`Sizes`, `Radii`, `SemanticColors`)
3. If the component is interactive (buttons, inputs, toggles), you'll use the shared focusable styles

## File Structure

Every component lives in `packages/web-components/src/lib/components/mrd-<name>/` with this layout:

```
mrd-<name>/
  <name>.ts                # Component class
  <name>.styles.scss       # Scoped styles
  types.ts                 # Component-specific types (if needed)
  index.ts                 # Barrel export
  <name>.spec.ts           # Tests
  stories/
    <name>.stories.ts      # Storybook stories
```

## Step-by-Step

### 1. Create the Component Class (`<name>.ts`)

```typescript
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';

// Import shared focusable styles if this component is interactive
import focusableBase from '../../styles/focusable.styles.scss?lit';
// Import shared types when applicable
import type { SemanticColors, Sizes } from '../../types';

// Import component-scoped styles
import styles from './<name>.styles.scss?lit';

@customElement('mrd-<name>')
export class Mrd<Name>Element extends LitElement {
  static override styles = [focusableBase, styles];
  // Or without focusable: static override styles = [styles];

  @property({ type: String })
  // ...properties

  override render() {
    return html`...`;
  }
}

// Always declare the tag on the global HTMLElementTagNameMap
declare global {
  interface HTMLElementTagNameMap {
    'mrd-<name>': Mrd<Name>Element;
  }
}
```

Key patterns to follow:

- **Tag name**: Always `mrd-<name>` (kebab-case with `mrd-` prefix)
- **Class name**: Always `Mrd<Name>Element` (PascalCase with `Mrd` prefix and `Element` suffix)
- **Decorator**: `@customElement('mrd-<name>')` registers the element
- **Styles**: Combine shared + component styles in a static array
- **Properties**: Use `@property()` for public reactive attributes, `@state()` for internal state
- **HTMLElementTagNameMap**: Always declare at the bottom so TypeScript knows the tag-to-class mapping

Read `references/lit-patterns.md` for detailed guidance on Lit-specific patterns like property definitions, template syntax, lifecycle hooks, events, and directives.

### 2. Create Styles (`<name>.styles.scss`)

Use SCSS. The file is imported with the `?lit` query parameter which the `vite-lit-loader` converts to a Lit `CSSResult`.

```scss
@use '@mordech/tokens/css/reset.css';
@use '../../styles/utils';

:host {
  display: block; // or inline-block, inline-flex, etc.
}
```

Always include `@use '@mordech/tokens/css/reset.css';` as the **first line** of every component SCSS file.

Design token conventions:
- **Colors**: `var(--mrd-color-<semantic>-<variant>)` — e.g., `var(--mrd-color-primary-base)`
- **Spacing**: `var(--mrd-space-<number>)` — e.g., `var(--mrd-space-100)` = 0.25rem, `var(--mrd-space-200)` = 0.5rem, `var(--mrd-space-400)` = 1rem. Available steps: 0, 50, 100, 200, 300, 400, 600, 800, 1200, 1600, 2100, 3200, 6400
- **Border radius**: `var(--mrd-border-radius-<n>)` — e.g., `var(--mrd-border-radius-100)` = 0.25rem, `var(--mrd-border-radius-200)` = 0.5rem, `var(--mrd-border-radius-round)` = 9999rem. Available steps: 0, 100, 200, 250, 300, 400, 600, 800, 1600, round
- **Typography**: `var(--mrd-font-size-<n>)`, `var(--mrd-font-family-<name>)`, `var(--mrd-font-weight-<name>)`
- **Transitions**: `var(--mrd-transition-default)`, `var(--mrd-transition-fast)`, `var(--mrd-transition-bounce)`
- **Elevation**: `var(--mrd-elevation-<n>)`

**IMPORTANT — use tokens, not raw values:**
- Always use `var(--mrd-space-*)` for padding, margin, and gap — never hardcode `px` or `rem` for spacing
- Always use `var(--mrd-border-radius-*)` for border-radius — never hardcode `px` or `rem`
- When no token fits exactly, use `rem` (never `px`) for one-off sizes like icon dimensions

Available SCSS mixins from `../../styles/_utils.scss`:
- `@include utils.focusable($offset)` — focus ring styles
- `@include utils.interaction-layer` — hover/active state overlay
- `@include utils.overridable($prefix, $css-property, $default-value)` — creates an overridable CSS custom property

To make the component customizable from the outside, expose CSS custom properties with a `--mrd-<component>-` prefix for things like colors:

```scss
.inner {
  background-color: var(--mrd-<name>-background, var(--mrd-color-primary-base));
  color: var(--mrd-<name>-color, var(--mrd-color-primary-on-base));
}
```

### 3. Create Types (`types.ts`) — if needed

Only create this file if the component has type unions specific to itself (not shared across components).

```typescript
export type <Name>Variants = 'fill' | 'outline' | 'text';
```

Reuse shared types from `../../types/index.ts` whenever possible (`Sizes`, `Radii`, `SemanticColors`).

### 4. Create Barrel Export (`index.ts`)

```typescript
export * from './<name>';
// Only if types.ts exists:
export * from './types';
```

Then add the component to the parent barrel: `packages/web-components/src/lib/components/index.ts`:

```typescript
export * from './mrd-<name>';
```

### 5. Create Tests (`<name>.spec.ts`)

```typescript
import { axe } from 'jest-axe';
import { html, render } from 'lit';

import { Mrd<Name>Element } from '.';

describe('mrd-<name>', () => {
  it('should be defined', () => {
    expect(Mrd<Name>Element).toBeDefined();
  });

  it('should render', () => {
    const container = document.createElement('div');
    render(html`<mrd-<name>></mrd-<name>>`, container);
    expect(container.innerHTML).toBeDefined();
  });

  it('should have no accessibility violations', async () => {
    const container = document.createElement('div');
    render(html`<mrd-<name>>Content</mrd-<name>>`, container);
    await expect(await axe(container)).toHaveNoViolations();
  });
});
```

Add tests for:
- Default rendering
- Each public property/attribute
- Event dispatching (if applicable)
- Accessibility (always include the `jest-axe` check)

Run tests with: `yarn nx test @mordech/web-components --testPathPattern=<name>`

### 6. Create Storybook Story (`stories/<name>.stories.ts`)

```typescript
import { html } from 'lit-html';

import { Mrd<Name>Element } from '../<name>';

export default {
  title: 'Atoms/mrd-<name>',
  component: 'mrd-<name>',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Description of the component.',
      },
    },
  },
  argTypes: {
    // Define controls for each property
    propertyName: {
      options: ['option1', 'option2'],
      control: { type: 'select' },
      table: {
        type: { summary: 'option1 | option2' },
        defaultValue: { summary: 'option1' },
      },
      description: 'What this property does.',
    },
  },
};

export const Default = ({
  // Destructure component properties
  propertyName,
}: Mrd<Name>Element) => html`
  <mrd-<name>
    .propertyName=${propertyName}
  >
    Slot content
  </mrd-<name>>
`;

Default.args = {
  propertyName: 'option1',
};
```

Story conventions:
- **Title hierarchy**: `Atoms/mrd-<name>` for simple components, `Molecules/mrd-<name>` for composed ones (see `references/lit-patterns.md` for the full sort order)
- **Import `html` from `lit-html`** (not from `lit`) in stories
- **Property binding**: Use `.property=${value}` (dot prefix) for object/function properties
- **Named variants**: Use `bind()` to create variants from the default story

Preview the story with: `yarn nx storybook @mordech/web-components` (runs on port 4600)

### 7. Verify

After creating all files:

1. `yarn nx test @mordech/web-components --testPathPattern=<name>` — run unit tests
2. `yarn nx storybook @mordech/web-components` — check it renders correctly in Storybook
3. `yarn nx build @mordech/web-components` — ensure the build succeeds (component entry points are auto-discovered from the directory)
