export function getImagePath(path) {
  // For development
  if (import.meta.env.DEV) {
    return path;
  }
  // For production (GitHub Pages)
  return `/Portfolio${path}`;
}