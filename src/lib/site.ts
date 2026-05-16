export const SITE_TITLE = "Jiwen Song";
export const SITE_DESCRIPTION =
  "Notes on AI workflows, product systems, financial infrastructure, and ideas worth thinking about.";
export const SITE_URL = "https://jiwens.github.io";
export const AUTHOR_NAME = "Jiwen Song";
export const AUTHOR_SUMMARY =
  "Jiwen Song writes about AI workflows, product systems, operational infrastructure, and ideas shaped by brokerage clearing work on Wall Street.";
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
