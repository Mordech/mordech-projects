import { html } from 'lit-html';
import browser from 'webextension-polyfill';

import { defaultCatImages } from '../../data/index';
import { Data } from '../@types/index';
import { imageList } from '../components/index';
import { getAndAddValue } from '../utils/index';

export const addImage = async () => {
  const images = document.getElementById('upload-image');
  if (images instanceof HTMLInputElement && images.files) {
    const files = images.files;
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);

    reader.onloadend = async () => {
      const res = reader.result?.toString();
      res && getAndAddValue('catImageUrls', res);
    };

    reader.onerror = (error) => {
      error;
    };
  }
};

const triggerUpload = () => {
  const input = document.getElementById('upload-image');
  if (input) input.click();
};

export const customImageSection = (catImageUrls: Data['catImageUrls']) => {
  const isFirefoxPopup =
    browser.runtime.getURL('').startsWith('moz-extension://') &&
    location.pathname === '/popup/index.html';

  return html`
    <div class="content-container">
      <ul class="image-grid">
        ${imageList('catImageUrls', catImageUrls || defaultCatImages)}
      </ul>
    </div>
    ${isFirefoxPopup
      ? html`
          <p class="firefox-notice">
            <strong>Firefox users 🦊</strong> can only upload images from a
            browser tab.
            <a
              href=${browser.runtime.getURL('options/index.html')}
              target="_blank"
              >Go to the options tab</a
            >
            to upload a photo.
          </p>
        `
      : html`
          <input
            aria-label="Upload an image"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            id="upload-image"
            name="upload-image"
            @change=${addImage}
          />
          <mrd-button
            size="tiny"
            variant="fill"
            class="full-width"
            @click=${triggerUpload}
          >
            Upload image
          </mrd-button>
        `}
  `;
};
