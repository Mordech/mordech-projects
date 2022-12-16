import { svg } from 'lit-html';

export const logo = svg`<svg alt="Elad Mizrahi's logo" class="logo" height="42px" viewBox="0 0 240 262" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
  .logo path {
    fill: var(--mrd-color-primary-base, #000);
    will-change: transform;
  }

  @keyframes reveal {
    0% {
      transform: scale(0);
    }

    2%,
    95% {
      transform: scale(1);
    }

    97%,
    100% {
      transform: scale(0);
    }
  }

  #logo-clip-top circle {
    animation: reveal 60s ease-in infinite;
  }

  #logo-clip-middle circle {
    animation: reveal 60s ease-in infinite;
    animation-delay: 0.5s;
  }

  #logo-clip-bottom circle {
    animation: reveal 60s ease-in infinite;
    animation-delay: 0.9s;
  }
</style>
<defs>
  <clipPath id="logo-clip-top">
    <circle cx="0" cy="0" r="200%" transform="scale(0)" />
  </clipPath>

  <clipPath id="logo-clip-middle">
    <circle cx="0" cy="0" r="200%" transform="scale(0)" />
  </clipPath>

  <clipPath id="logo-clip-bottom">
    <circle cx="0" cy="0" r="200%" transform="scale(0)" />
  </clipPath>
</defs>
<path clip-path="url(#logo-clip-top)"
  d="M209.554 115.879C212.727 118.53 217.496 125.175 217.496 125.175C217.496 125.175 219.688 119.563 220.607 117.736C220.81 117.333 220.949 117.056 220.986 116.969C226.429 103.683 231.744 90.3351 236.88 76.9277C237.135 76.2649 237.516 75.4691 237.925 74.616C238.901 72.579 240.034 70.215 239.981 68.5536C239.897 65.8427 235.232 61.9366 232.055 59.2764C231.101 58.4777 230.281 57.7913 229.759 57.2832C211.24 39.2028 188.86 23.1799 172.96 2.55939C172.96 2.55939 168.798 15.3323 165.634 21.7339C162.791 27.4863 160.388 33.4194 157.651 39.2203C154.57 45.7488 151.304 52.6712 150.475 59.1916C150.214 61.2699 155.398 65.5747 158.488 68.1403C176.39 83.0037 191.703 100.968 209.554 115.879Z" />
<path clip-path="url(#logo-clip-middle)"
  d="M232.579 194.929C169.86 131.085 40.7652 7.1169 40.7652 7.1169C38.4631 4.79231 36.1444 2.61038 34.1203 0C27.5908 16.8019 21.4739 34.2989 13.6939 50.5557C12.7202 52.5902 11.5903 54.9514 11.636 56.6209C11.6689 57.8113 14.1985 59.9883 15.8183 61.3823C16.3216 61.8155 16.7372 62.1732 16.9626 62.402C81.8409 128.74 152.355 189.346 215.541 257.399C215.541 257.399 219.117 248.957 219.03 249.193C224.474 235.907 229.788 222.559 234.924 209.152C235.127 208.623 235.488 207.882 235.894 207.047C236.937 204.904 238.282 202.143 238.025 200.778C237.771 199.415 235.599 197.561 233.987 196.185C233.407 195.689 232.899 195.256 232.579 194.929Z" />
<path clip-path="url(#logo-clip-bottom)"
  d="M104.502 195.199C105.744 195.827 106.598 196.579 106.889 197.5C107.239 198.647 105.744 201.739 104.674 203.953C104.288 204.752 103.957 205.436 103.788 205.874C97.5867 222.063 90.8117 238.022 84.405 254.132L82.0064 251.808C65.1747 243.402 27.6662 249.543 16.5521 261.799C17.5 259 26.8773 224.675 36.9079 208.097C28.8477 200.239 20.7983 192.37 12.8245 184.422C12.1716 183.77 11.0438 182.827 9.71918 181.721C5.89205 178.523 0.42235 173.952 0.0210188 171.042C-0.179655 169.582 1.09713 166.954 2.12264 164.844C10.0431 148.543 15.4288 131.099 22.5054 114.421C45.9171 144.21 77.3695 169.031 104.502 195.199Z" />
</svg>`;
