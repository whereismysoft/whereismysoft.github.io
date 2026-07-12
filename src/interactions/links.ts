export function initializeLinkPressStates(): void {
  document
    .querySelectorAll<HTMLAnchorElement>('.social-links a')
    .forEach((link) => {
      link.addEventListener('pointerdown', () =>
        link.classList.add('is-pressed'),
      );
      link.addEventListener('pointerup', () =>
        link.classList.remove('is-pressed'),
      );
      link.addEventListener('pointerleave', () =>
        link.classList.remove('is-pressed'),
      );
    });
}
