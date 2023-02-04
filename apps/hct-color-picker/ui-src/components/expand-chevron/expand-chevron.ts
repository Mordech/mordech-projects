import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('expand-chevron')
export class ExpandChevronIcon extends LitElement {
  render() {
    return html`
      <style>
        expand-chevron {
          opacity: 0.7;
        }

        summary:hover expand-chevron {
          opacity: 1;
        }

        .expand-chevron-container {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          gap: 0.25rem;
        }

        .expand-chevron-icon {
          transform-origin: center;
          transition: transform 250ms ease-out;
        }

        [open] .expand-chevron-icon {
          transform: rotate(-180deg);
        }
        summary:hover .expand-chevron-text:before {
          content: 'Show styles';
          font-weight: var(--mrd-font-weight-regular);
        }
        details[open] summary:hover .expand-chevron-text:before {
          content: 'Hide styles';
        }
      </style>
      <div class="expand-chevron-container">
        <span class="expand-chevron-text"> </span>
        <svg
          alt=""
          class="expand-chevron-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" />
        </svg>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'expand-chevron': ExpandChevronIcon;
  }
}
