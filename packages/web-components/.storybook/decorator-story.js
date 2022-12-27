import { css, html, LitElement } from 'lit';

import '@mordech/tokens/css';
document.body.setAttribute('data-theme', 'prefers');

import '../src/lib/components/toggle-theme';
export class DecoratorStory extends LitElement {
  static styles = css`
    :host {
      padding: 1rem;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  render() {
    return html` <slot></slot> `;
  }
}

//  define custom element
export default customElements.define('decorator-story', DecoratorStory);
