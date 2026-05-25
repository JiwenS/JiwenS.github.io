# Architecture

Version: v0.5.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Draft

## Architecture Direction

The blog should use a static-first architecture.

Recommended stack:

- Framework: Astro
- Rendering: Static output
- Content: Markdown / MDX through Astro content collections
- Deployment: GitHub Pages
- Styling: CSS-first, with Tailwind considered only if it improves implementation speed
- Analytics: Google Analytics, injected once through a shared layout

## Why Astro

Astro fits this project because the site is content-heavy, English-first, and publication-oriented. It can generate static pages while still allowing selective interactive components later.

The first version should avoid unnecessary application complexity. The site should not be built as a full client-side app.

## Deployment Target

The initial deployment target is GitHub Pages.

Implementation implications:

- Use GitHub Actions to build and publish the generated static output.
- Configure Astro `site` and `base` correctly for the chosen GitHub Pages URL.
- Build output should be treated as generated deployment output, not the source of truth.
- The repository should keep editorial source content, templates, components, styles, and documentation under version control.
- Editorial source content should live in the root `content/` directory so article work is separated from application source code in `src/`.

## Content Model

Use a single primary content collection in the first version:

- `posts`: all published articles, essays, notes, and podcast transcript posts

The homepage should show latest posts in reverse chronological order, similar to a publication archive.

Do not introduce required category pages or collection-level classification in the initial version. Signals / Systems / Products can remain a brand and editorial lens, but should not be forced into the first technical content model.

Each post should include frontmatter:

```yaml
title: ""
description: ""
subtitle: ""
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
tags: []
heroImage: ""
heroAlt: ""
themeColor: ""
canonicalUrl: ""
recommendedPosts: []
draft: true
```

Optional future fields:

```yaml
category: signals | systems | products | notes
featured: false
mediaType: article | essay | podcast | video-supported
themeSource: manual | hero-image | default
readingTimeMinutes: 0
```

Categories, collection grouping, and taxonomy pages can be added later through a separate decision if the content volume or navigation needs justify it.

Theme color implementation:

- `themeColor` should be specified when publishing a post if the article needs a distinct editorial accent.
- The value should map to an approved design token or controlled hex value from the UI/UX palette.
- The post layout should expose the theme color through CSS variables.
- Automatic hero-image color extraction can be considered later, but manual selection should be the first implementation.

Reading time implementation:

- Estimated reading time should be generated from the written body where possible.
- Manual `readingTimeMinutes` may be used only when generation is not practical or when a post format needs an override.
- Reading time should be displayed on post detail pages.

Recommendation implementation:

- `recommendedPosts` may be used for manual static recommendations.
- Automated "You might also like" recommendations can be added later using tags, recency, or generated static indexes.
- Recommendations must not require a backend service in the first version.

## Multimodal Support

The architecture should support rich media without introducing backend services.

Every standalone post must include a meaningful text body. Images, videos, and audio are optional supporting media, not replacements for the written article.

Images:

- Prefer local images when they are part of the article's long-term value.
- Store durable site assets in the project and optimize them at build time when possible.
- Every meaningful image needs alt text.

YouTube:

- Support YouTube embeds inside MDX posts.
- Prefer lightweight embed components over loading heavy third-party scripts immediately.
- Each video embed should support the surrounding written argument, explanation, or example.
- Video should not be the only source of the post's core meaning.

Audio:

- Support audio blog posts through static audio files or external audio embeds.
- Each audio post should include a written body to preserve accessibility, search value, and LLM readability.
- Podcast-style posts should include the complete conversation transcript.
- Audio should be treated as supporting or parallel media, not as a replacement for text.

Charts and diagrams:

- Prefer static SVG, images, or lightweight client-side components.
- Avoid making core article meaning depend on JavaScript-only rendering.

## Out of Scope

The following are out of scope for the current phase:

- Login
- Membership
- User accounts
- Comments requiring a custom backend
- Database-backed content management
- Server-rendered personalization
- Paid content infrastructure

## Future Extension Points

Potential future additions:

- Category pages for Signals / Systems / Products
- Automatic theme color suggestion from hero images
- Static search with a generated index
- RSS feed
- Newsletter capture through a third-party form
- Headless CMS or Git-based CMS
- Podcast feed
- Interactive product or market explainers
- Lightweight analytics events for content engagement

## References

- Astro deployment guide: https://docs.astro.build/en/guides/deploy/
- Astro GitHub Pages guide: https://v4.docs.astro.build/en/guides/deploy/github/
- Astro Markdown guide: https://docs.astro.build/en/guides/markdown-content/
- Astro sitemap integration: https://docs.astro.build/ja/guides/integrations-guide/sitemap/
