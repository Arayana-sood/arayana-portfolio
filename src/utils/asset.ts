/**
 * Resolves a public asset path taking into account Vite's base URL (e.g. on GitHub Pages).
 * Ensures that paths like '/Arayana_Sood_CV.pdf' become '/arayana-portfolio/Arayana_Sood_CV.pdf'
 * when deployed, and work smoothly in local development.
 */
export function getAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
