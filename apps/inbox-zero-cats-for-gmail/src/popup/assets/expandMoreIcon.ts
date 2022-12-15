import { svg } from 'lit-html';

export const expandMoreIcon = svg`<svg alt="" class="expand-more-icon" xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
<style>
.expand-more-icon {
  transition: transform 250ms ease-out;
}

[open] .expand-more-icon {
  transform: rotate(-180deg);
}
</style>
<path d='m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z' />
</svg>`;
