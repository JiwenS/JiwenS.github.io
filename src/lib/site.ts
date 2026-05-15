export const SITE_TITLE = "Jiwen Song";
export const SITE_DESCRIPTION =
  "Product-minded analysis across markets, systems, and AI products.";
export const SITE_URL = "https://jiwens.github.io";
export const AUTHOR_NAME = "Jiwen Song";
export const AUTHOR_LINKS = [
  "https://github.com/JiwenS",
  "https://www.linkedin.com/in/jiwensong/",
];

export function getCanonicalUrl(pathOrUrl: string = "/"): string {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, SITE_URL).toString();
}
