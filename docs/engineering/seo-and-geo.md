# SEO and GEO

Version: v0.2.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Draft

## Purpose

SEO and Generative Engine Optimization (GEO) are first-class requirements for the blog.

The site should be easy for search engines, social platforms, and AI-assisted discovery systems to crawl, understand, cite, and summarize.

## Principles

- Human clarity comes first.
- Important content should exist in crawlable HTML.
- Metadata should be explicit, accurate, and consistent.
- Rich media should have text equivalents.
- JavaScript should enhance pages, not hide core meaning.
- Avoid SEO tricks that do not improve reader understanding.

## Required Technical SEO

Every public page should support:

- Unique page title.
- Unique meta description.
- Canonical URL.
- Open Graph metadata.
- Twitter / X card metadata.
- Article metadata for published posts.
- Clean semantic heading hierarchy.
- Descriptive internal links.
- Sitemap generation.
- Robots.txt.
- Valid responsive layout.

## Structured Data

Use JSON-LD structured data where it matches visible page content.

Recommended types:

- `WebSite` for the site.
- `Person` for the owner / author identity.
- `BlogPosting` or `Article` for posts.
- `BreadcrumbList` for navigational hierarchy.

Structured data must not describe content that is not visible to users.

## Multimodal SEO

Every standalone post must be text-first. The page should still communicate its core value if images, video embeds, or audio players do not load.

Multimodal assets are optional enhancements:

- Images can illustrate, summarize, or provide visual evidence.
- YouTube videos can support understanding or provide external context.
- Audio can provide an alternate consumption format.
- Podcast posts should publish the full conversation transcript as the written body.

Images:

- Use descriptive filenames when practical.
- Add meaningful alt text.
- Put images near the relevant text.
- Use image dimensions or layout constraints to reduce layout shift.

Video:

- Use YouTube embeds when appropriate.
- Add surrounding text that explains the video's relevance.
- For original video content, include title, description, thumbnail, and transcript or summary when practical.
- Video should supplement the written article, not replace it.

Audio:

- Audio posts should include a written body.
- Podcast-style posts should include the complete transcript.
- The page should be useful even if the visitor or crawler cannot play the audio.
- If a podcast feed is added later, define it through a separate decision and engineering document.

## GEO Requirements

Treat GEO as a practical extension of content accessibility and machine readability.

The site should:

- Publish clear bylines and author context.
- Keep article claims specific and well-structured.
- Use summaries, section headings, and definitions where helpful.
- Make source links visible and descriptive.
- Keep evergreen pages updated with `updatedAt` metadata.
- Expose crawlable static HTML for article content.
- Use robots.txt intentionally for search and AI crawler policy.

Optional later addition:

- `llms.txt` may be considered as an experimental helper file, but it should not be treated as a replacement for sitemap, robots.txt, structured data, or high-quality HTML content.

## Crawler Policy

Default direction:

- Allow standard search engine crawlers.
- Allow crawlers used for search discovery where the owner wants visibility.
- Do not block important public content unless there is a clear privacy, copyright, or strategic reason.

OpenAI-specific note:

- OpenAI documents separate crawler controls for search visibility and model training. This distinction should be reviewed before finalizing robots.txt.

## Content-Level Checklist

Before publishing a post:

- The title is clear and specific.
- The description summarizes the value of the post.
- The first screen communicates the topic quickly.
- The post has a logical heading structure.
- Important images have alt text.
- Embedded videos or audio have text context.
- Podcast-style posts include the full transcript.
- External references use descriptive links.
- Draft status is removed only when ready to publish.

## References

- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Image SEO best practices: https://developers.google.com/search/docs/advanced/guidelines/google-images
- Google Video SEO best practices: https://developers.google.com/search/docs/appearance/video
- Google structured data introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google supported structured data gallery: https://developers.google.com/search/docs/guides/search-gallery
- OpenAI crawler overview: https://platform.openai.com/docs/bots/overview-of-openai-crawlers.pls
