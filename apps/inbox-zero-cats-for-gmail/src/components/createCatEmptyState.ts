import { setCatImage } from '../utils/setCatImage';
import { setCatTitle } from '../utils/setCatTitle';

export const MOUNTED_INDICATION = 'ibxzc-mounted';

export const createCatEmptyState = (emptyState: Element) => {
  emptyState.textContent = '';
  const catContainer = document.createElement('div');
  catContainer.className = 'cat-container';
  emptyState.appendChild(catContainer);

  const catTitle = document.createElement('h1');
  setCatTitle(catTitle);
  catTitle.className = 'cat-title TB';
  catTitle.dir = 'auto';
  catContainer.appendChild(catTitle);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'cat-image-container';
  catContainer.appendChild(imageContainer);

  const catBackdrop = document.createElement('img');
  const catImage = document.createElement('img');
  setCatImage([catBackdrop, catImage]);
  catBackdrop.className = 'cat-backdrop';
  catImage.className = 'cat-image';
  catImage.loading = 'eager';

  imageContainer.appendChild(catBackdrop);
  imageContainer.appendChild(catImage);

  const catText = document.createElement('span');
  catText.className = 'cat-text l6';
  catText.textContent = 'Go outside and play with a cat!';
  catContainer.appendChild(catText);

  const mountIndication = document.createElement('span');
  mountIndication.ariaHidden = 'true';
  mountIndication.style.setProperty('visibility', 'hidden');
  mountIndication.style.setProperty('position', 'absolute');
  mountIndication.style.setProperty('top', '-99999px');
  mountIndication.style.setProperty('left', '-99999px');
  mountIndication.textContent = MOUNTED_INDICATION;
  catContainer.appendChild(mountIndication);
};
