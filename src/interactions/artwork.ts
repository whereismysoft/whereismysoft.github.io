const PERSONAL_SPACE = 190;
const MAX_ESCAPE_DISTANCE = 42;

function hasFinePointer(): boolean {
  return window.matchMedia('(pointer: fine)').matches;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function setArtworkMotion(
  artwork: HTMLElement,
  motifs: SVGGElement[],
  relativeX: number,
  relativeY: number,
): void {
  motifs.forEach((motif) => {
    const depth = Number(motif.dataset.depth);

    motif.style.setProperty('--move-x', `${relativeX * depth}px`);
    motif.style.setProperty('--move-y', `${relativeY * depth}px`);
  });

  artwork.style.setProperty('--tilt-x', `${relativeY * -3}deg`);
  artwork.style.setProperty('--tilt-y', `${relativeX * 3}deg`);
}

function updateCatResponse(
  cat: SVGGElement,
  pointerX: number,
  pointerY: number,
): void {
  const bounds = cat.getBoundingClientRect();
  const distanceX = pointerX - (bounds.left + bounds.width / 2);
  const distanceY = pointerY - (bounds.top + bounds.height / 2);
  const distance = Math.hypot(distanceX, distanceY);

  if (distance >= PERSONAL_SPACE) {
    cat.style.setProperty('--cat-escape-x', '0px');
    cat.style.setProperty('--cat-escape-y', '0px');
    cat.classList.remove('is-avoiding');
    return;
  }

  const strength =
    ((PERSONAL_SPACE - distance) / PERSONAL_SPACE) * MAX_ESCAPE_DISTANCE;
  const safeDistance = Math.max(distance, 1);

  cat.style.setProperty(
    '--cat-escape-x',
    `${(-distanceX / safeDistance) * strength}px`,
  );
  cat.style.setProperty(
    '--cat-escape-y',
    `${(-distanceY / safeDistance) * strength}px`,
  );
  cat.classList.add('is-avoiding');
}

export function initializeArtworkInteractions(artwork: HTMLElement): void {
  const motifs = Array.from(
    artwork.querySelectorAll<SVGGElement>('[data-depth]'),
  );
  const cat = artwork.querySelector<SVGGElement>('.cat');

  if (!cat) {
    throw new Error('Cat illustration was not found.');
  }

  if (!prefersReducedMotion() && hasFinePointer()) {
    let pointerX = 0;
    let pointerY = 0;
    let animationFrame: number | undefined;

    const update = (): void => {
      const bounds = artwork.getBoundingClientRect();
      const relativeX = (pointerX - bounds.left) / bounds.width - 0.5;
      const relativeY = (pointerY - bounds.top) / bounds.height - 0.5;

      setArtworkMotion(artwork, motifs, relativeX, relativeY);
      updateCatResponse(cat, pointerX, pointerY);
      animationFrame = undefined;
    };

    window.addEventListener('pointermove', (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(update);
      }
    });
  }

  if (!prefersReducedMotion()) {
    let resetTimer: number | undefined;

    artwork.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse') return;

      const bounds = artwork.getBoundingClientRect();
      const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

      setArtworkMotion(artwork, motifs, relativeX * 1.8, relativeY * 1.8);
      artwork.classList.add('is-touched');
      window.clearTimeout(resetTimer);

      resetTimer = window.setTimeout(() => {
        artwork.classList.remove('is-touched');
        setArtworkMotion(artwork, motifs, 0, 0);
      }, 700);
    });
  }
}
