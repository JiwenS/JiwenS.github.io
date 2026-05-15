import type { APIRoute } from "astro";
import { getPublishedPosts } from "../lib/posts";
import { SITE_URL, getCanonicalUrl } from "../lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts();
  const newestUpdate = posts.reduce(
    (latest, post) => Math.max(latest, post.data.updatedAt.getTime()),
    0,
  );
  const urls = [
    {
      loc: SITE_URL,
      lastmod: new Date(newestUpdate).toISOString(),
    },
    ...posts.map((post) => ({
      loc: getCanonicalUrl(`/post/${post.id}/`),
      lastmod: post.data.updatedAt.toISOString(),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
