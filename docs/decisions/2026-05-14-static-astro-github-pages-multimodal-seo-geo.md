# Static Astro GitHub Pages Multimodal SEO GEO

Version: v1.0.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Approved

## Context

The owner does not plan to build a heavy backend in the current phase. The blog should be deployed as a static website on GitHub Pages.

The site should still preserve room for multimodal publishing, including images, embedded YouTube videos, audio blog posts, and other rich media.

Login, membership, account systems, and other backend-server features are out of scope for now.

SEO and generative engine optimization should be treated as first-class engineering and content requirements.

## Options Considered

- Static site with GitHub Pages deployment.
- Static site with a headless CMS.
- Dynamic application with backend services.
- Hybrid site with server-rendered features.

## Decision

Use a static-first architecture for the current phase.

Adopt Astro as the preferred framework, with GitHub Pages as the initial deployment target.

Support multimodal content through Markdown / MDX, local assets, optimized images, embedded third-party video, and static audio files or externally hosted audio embeds.

Do not introduce login, membership, database, or custom backend services unless a future decision explicitly changes scope.

## Rationale

The project is an English personal publication and thought platform. Static-first architecture keeps the site fast, durable, inexpensive, and easy to deploy.

Astro is a strong fit because it supports static output, Markdown / MDX content, content collections, and selective interactive components without forcing the whole site into a client-side application.

GitHub Pages matches the owner's current deployment preference and keeps operational complexity low.

## Impact

- Engineering should prioritize static generation, content modeling, SEO metadata, sitemap generation, robots.txt, and structured data.
- Content should be stored as source-controlled Markdown / MDX.
- Rich media should be embedded or referenced in a way that preserves page performance and crawlability.
- Backend-dependent features should be deferred unless approved in a future decision record.
- GEO work should focus on crawlable static HTML, explicit metadata, structured summaries, clean content hierarchy, and crawler access policy.
