export function isMobile() {
  return window.innerWidth <= 768;
}

export function reduceAnimations() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}