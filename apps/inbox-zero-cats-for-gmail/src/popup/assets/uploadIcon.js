// @ts-check

import { svg } from 'lit-html';

export const uploadIcon = svg`<svg
alt="upload icon"
class="icn-upload"
width='24'
height='24'
viewBox='0 0 24 24'
overflow='visible'
xmlns='http://www.w3.org/2000/svg'>
<style>
.icn-upload-arrow {
  transform-origin: center;
  transition: transform 500ms ease-out;
}

.btn:hover .icn-upload-arrow,
.btn:focus-visible .icn-reset {
  transform: translateY(-3px);
}

.btn:active .icn-upload-arrow {
  transform: translateY(0);
  transition: none;
}
</style>
<path d='M4 20V15H6V18H18V15H20V20H4Z' />
<path class="icn-upload-arrow"
  d='M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11Z'
/>
</svg>`;
