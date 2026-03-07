# Lit Patterns Reference

Detailed patterns for building Lit web components in this project. This supplements the main SKILL.md with deeper technical guidance.

## Property Definitions

Use `@property()` for reactive properties that are exposed as HTML attributes. Use `@state()` for internal reactive state.

```typescript
// String property (default type, reflected as attribute)
@property({ type: String })
variant: ButtonVariants = 'fill';

// Boolean property (use for toggles — Lit handles boolean attribute semantics)
@property({ type: Boolean })
disabled = false;

// Number property
@property({ type: Number })
value = 0;

// Property with custom attribute name (kebab-case for multi-word attributes)
@property({ attribute: 'supporting-text' })
supportingText = '';

// Internal state (not reflected as attribute, triggers re-render)
@state() private _isOpen = false;
```

When to use `@property()` vs `@state()`:
- `@property()` → anything the consumer should set from outside (via HTML attributes or JS properties)
- `@state()` → internal component state that affects rendering but isn't part of the public API

## Template Syntax

### Binding Types

```typescript
render() {
  return html`
    <!-- Attribute binding (strings) -->
    <div class="container" aria-label=${this.label}></div>

    <!-- Boolean attribute (present/absent) -->
    <button ?disabled=${this.disabled}>Click</button>

    <!-- Property binding (objects, arrays, functions — dot prefix) -->
    <input .value=${live(this.value)}>

    <!-- Event listener (@ prefix) -->
    <button @click=${this._handleClick}>Click</button>

    <!-- Style binding -->
    <div style=${styleMap({ color: this.textColor })}></div>

    <!-- Class binding -->
    <div class=${classMap({ active: this._isActive, disabled: this.disabled })}></div>
  `;
}
```

### Commonly Used Directives

Import from `lit/directives/`:

- **`classMap()`** — conditional CSS classes: `class=${classMap({ active: isActive })}`
- **`styleMap()`** — dynamic inline styles: `style=${styleMap({ color: value })}`
- **`live()`** — keeps DOM in sync with property for form elements: `.value=${live(this.value)}`
- **`ref()`** — get a reference to a DOM element: `${ref(this._inputRef)}`
- **`nothing`** — render nothing (from `lit`): `${this.show ? html`<div>...</div>` : nothing}`

For dynamic tag names (e.g., rendering as `<button>` or `<a>`):

```typescript
import { html, unsafeStatic } from 'lit/static-html.js';

get tag() {
  return unsafeStatic(this.as);
}

render() {
  return html`<${this.tag} class="btn">content</${this.tag}>`;
}
```

### Slots

Use slots for content projection. The Shadow DOM keeps component internals encapsulated:

```typescript
render() {
  return html`
    <!-- Default slot -->
    <slot></slot>

    <!-- Named slots -->
    <slot name="icon-start"></slot>
    <slot name="icon-end"></slot>

    <!-- Listen for slot content changes -->
    <slot @slotchange=${this._handleSlotchange}></slot>
  `;
}
```

Expose slots via `part` attribute for external styling:

```typescript
<slot part="content"></slot>
```

## Lifecycle Hooks

```typescript
// Called when element is added to DOM
override connectedCallback() {
  super.connectedCallback(); // Always call super
  // Set up listeners, initialize state
}

// Called when element is removed from DOM
override disconnectedCallback() {
  super.disconnectedCallback();
  // Clean up listeners
}

// Called after each render when properties change
override updated(changedProperties: Map<string, unknown>) {
  if (changedProperties.has('value')) {
    // React to specific property changes
  }
}

// Called once after first render
override firstUpdated() {
  // Access DOM elements, set initial focus, etc.
}
```

## Dispatching Custom Events

Always set `bubbles: true` and `composed: true` so events cross the shadow DOM boundary:

```typescript
this.dispatchEvent(
  new CustomEvent('mrd-change', {
    detail: { value: this.value },
    bubbles: true,
    composed: true,
  }),
);
```

Event naming convention: use kebab-case, optionally prefixed with `mrd-` for component-specific events. Keep the name descriptive of what happened (e.g., `toggle-theme`, `value-change`).

## Importing Assets via vite-lit-loader

The `?lit` query parameter transforms files for use in Lit components:

```typescript
// SCSS/CSS → CSSResult (use in static styles array)
import styles from './component.styles.scss?lit';
import focusableBase from '../../styles/focusable.styles.scss?lit';

// SVG → DirectiveResult<UnsafeSVGDirective> (use in templates)
import icon from './icon.svg?lit';
// Then in render(): ${icon}

// HTML → DirectiveResult<UnsafeHTMLDirective> (use in templates)
import template from './template.html?lit';
```

## Using Design Tokens in TypeScript

When you need token values in JS (not just CSS), import from `@mordech/tokens`:

```typescript
import { colors, spacing, fontFamilies } from '@mordech/tokens';

// Colors have semantic groups: primary, secondary, success, error, background, etc.
// Each group has variants: base, onBase, container, onContainer
colors.primary.base      // → 'var(--mrd-color-primary-base, #272a34)'
colors.primary.onBase    // → 'var(--mrd-color-primary-on-base, #fff)'
colors.primary.container // → 'var(--mrd-color-primary-container, ...)'
```

## Storybook Story Hierarchy

Stories are sorted in this order (configured in `.storybook/preview.ts`):

1. Introduction
2. Abstracts
3. **Atoms** — simple, standalone components (buttons, inputs, toggles, icons)
4. **Molecules** — composed of multiple atoms (form fields with labels, card with button)
5. Organisms
6. Templates
7. Pages

Most components will be Atoms. Use Molecules when your component wraps or composes other `mrd-` components.

## Storybook Story Variants

Create multiple stories to show different states:

```typescript
export const Default = ({ size, color }: MrdComponentElement) => html`
  <mrd-component .size=${size} .color=${color}>Content</mrd-component>
`;
Default.args = { size: 'default', color: 'primary' };

// Variant: copy default and override specific args
export const Compact = Default.bind({});
Compact.args = { ...Default.args, size: 'compact' };

export const Disabled = Default.bind({});
Disabled.args = { ...Default.args, disabled: true };
```

## Accessibility Checklist

- Use semantic HTML elements inside the shadow DOM (`<button>`, `<input>`, not `<div>` with role)
- Forward `aria-label` from the host to the inner interactive element
- Set `aria-disabled` for disabled states (in addition to the native `disabled` attribute)
- Use `role` attributes only when semantic HTML isn't possible
- Include `jest-axe` tests for every component
- Ensure keyboard navigation works (Tab, Enter, Space, Arrow keys as appropriate)
- Use the shared `focusable.styles.scss` for visible focus indicators on interactive elements
