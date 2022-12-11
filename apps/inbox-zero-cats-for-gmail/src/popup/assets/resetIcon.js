// @ts-check

import { svg } from 'lit-html';

export const resetIcon = svg`<svg
alt=""
class="icn-reset"
width='24'
height='24'
viewBox='0 0 24 24'
xmlns='http://www.w3.org/2000/svg'>
<style>
.icn-reset {
  transform-origin: center;
  transition: transform 500ms ease-out;
}

button:hover .icn-reset,
button:focus-visible .icn-reset {
  transform: rotate(45deg);
}

button:active .icn-reset {
  transform: rotate(405deg);
  transition: none;
}
</style>
<path d='M11 19.95C8.98333 19.7 7.31267 18.8207 5.988 17.312C4.66267 15.804 4 14.0333 4 12C4 10.9 4.21667 9.84567 4.65 8.837C5.08333 7.829 5.7 6.95 6.5 6.2L7.925 7.625C7.29167 8.19167 6.81267 8.85 6.488 9.6C6.16267 10.35 6 11.15 6 12C6 13.4667 6.46667 14.7623 7.4 15.887C8.33333 17.0123 9.53333 17.7 11 17.95V19.95ZM13 19.95V17.95C14.45 17.6833 15.6457 16.9917 16.587 15.875C17.529 14.7583 18 13.4667 18 12C18 10.3333 17.4167 8.91667 16.25 7.75C15.0833 6.58333 13.6667 6 12 6H11.925L13.025 7.1L11.625 8.5L8.125 5L11.625 1.5L13.025 2.9L11.925 4H12C14.2333 4 16.125 4.775 17.675 6.325C19.225 7.875 20 9.76667 20 12C20 14.0167 19.3377 15.7793 18.013 17.288C16.6877 18.796 15.0167 19.6833 13 19.95Z' />
</svg>`;
