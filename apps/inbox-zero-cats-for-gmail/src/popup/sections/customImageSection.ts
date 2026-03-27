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

export const customImageSection = (catImageUrls: Data['catImageUrls']) => {
  const isPopup = location.pathname === '/popup/index.html';
  const isFirefox = browser.runtime.getURL('').startsWith('moz-extension://');
  const isLinux = navigator.userAgent.includes('Linux');

  const needsOptionsPage = isPopup && (isFirefox || isLinux);

  return html`
    <div class="content-container">
      <ul class="image-grid">
        ${imageList('catImageUrls', catImageUrls || defaultCatImages)}
      </ul>
      ${needsOptionsPage
        ? html`
            <p class="firefox-notice">
              <strong
                >${isFirefox ? 'Firefox users 🦊' : 'Linux users 🐧'}</strong
              >
              can only upload images from a browser tab.
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
            <label for="upload-image" class="upload-label">
              Upload image
            </label>
          `}
    </div>
  `;
};
