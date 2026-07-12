function hasFinePointer(): boolean {
  return window.matchMedia('(pointer: fine)').matches;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initializeCursor(): void {
  const cursor = document.querySelector<HTMLElement>('.custom-cursor');

  if (!cursor || !hasFinePointer() || prefersReducedMotion()) return;

  let pointerX = 0;
  let pointerY = 0;
  let animationFrame: number | undefined;

  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (animationFrame) return;

    animationFrame = window.requestAnimationFrame(() => {
      cursor.style.setProperty('--cursor-x', `${pointerX}px`);
      cursor.style.setProperty('--cursor-y', `${pointerY}px`);
      cursor.classList.add('is-visible');
      animationFrame = undefined;
    });
  });

  window.addEventListener('pointerdown', () =>
    cursor.classList.add('is-pressed'),
  );
  window.addEventListener('pointerup', () =>
    cursor.classList.remove('is-pressed'),
  );
  document.documentElement.addEventListener('pointerleave', () => {
    cursor.classList.remove('is-visible');
  });

  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('pointerenter', () =>
      cursor.classList.add('is-link'),
    );
    link.addEventListener('pointerleave', () =>
      cursor.classList.remove('is-link'),
    );
  });
}
