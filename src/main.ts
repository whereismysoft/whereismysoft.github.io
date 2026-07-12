import artworkTemplate from './templates/artwork.html?raw';
import { initializeArtworkInteractions } from './interactions/artwork';
import { initializeCursor } from './interactions/cursor';
import { initializeLinkPressStates } from './interactions/links';

const artwork = document.querySelector<HTMLElement>('[data-artwork]');
const year = document.querySelector<HTMLElement>('#current-year');

if (!artwork || !year) {
  throw new Error('Required page elements were not found.');
}

artwork.innerHTML = artworkTemplate;
year.textContent = String(new Date().getFullYear());

initializeArtworkInteractions(artwork);
initializeCursor();
initializeLinkPressStates();
