# Acceptance Criteria

Version: v0.2.0
Last Updated: 2026-05-15
Owner: Human project owner
Status: Draft

## Purpose

This document defines testable criteria for the first working version.

It intentionally avoids repeating the full product and design direction. Those details live in the source-of-truth documents. This file is a release checklist.

## Build and Project Setup

- `npm install` completes successfully.
- `npm run check` passes.
- `npm run build` passes.
- `npm run preview` serves the built site locally.
- The site builds to static output.
- No custom backend service is required.

## Routes

Required routes:

- `/`
- `/post/[slug]/` for each published post

Not present in first version unless a later decision approves them:

- `/about/`
- `/archive/`
- `/tags/`
- `/signals/`
- `/systems/`
- `/products/`
- `/search/`

## Homepage Acceptance

The homepage passes when:

- It starts with a concise about / identity section.
- It lists published posts by `publishedAt` descending.
- It excludes draft posts.
- Desktop layout uses a large-date plus title-summary pattern.
- Mobile layout remains readable without horizontal scroll.
- There is no traditional navigation bar.
- External icon links have accessible labels.

## Post Detail Acceptance

Each post detail page passes when it renders:

- Tags.
- Title.
- Subtitle or dek.
- Published date.
- Updated date when applicable.
- Estimated reading time.
- Author byline.
- Main written body.
- Optional media inserts without breaking layout.
- Previous / next links when adjacent posts exist.
- Optional static recommendations when configured.

## Content Model Acceptance

The `posts` collection passes when:

- Required frontmatter is validated.
- `tags` accept reusable lowercase kebab-case values.
- `themeColor` maps to approved tokens.
- `draft: true` excludes a post from public lists and routes.
- Reading time is generated or explicitly overridden.
- Manual `recommendedPosts` can be resolved when provided.

## Visual Acceptance

The visual implementation passes when:

- The site uses the approved editorial color tokens.
- Article theme colors affect the page through CSS variables.
- Typography is stable and does not scale directly with viewport width.
- Layout does not use heavy card stacks or marketing-style sections.
- Text never visibly overflows buttons, links, metadata, or article containers.
- The page is not dominated by one hue family.

## Motion Acceptance

Motion passes when:

- Homepage-to-post navigation uses smooth transition behavior where feasible.
- Motion does not block or delay navigation.
- Hover states are subtle.
- `prefers-reduced-motion` disables or simplifies nonessential motion.
- No decorative particles, blobs, parallax-heavy effects, or animated backgrounds are present.

## SEO and GEO Acceptance

Rendered public pages include:

- Unique document title.
- Meta description.
- Canonical URL.
- Open Graph metadata.
- Twitter / X card metadata.
- Semantic heading hierarchy.
- Crawlable static HTML body content.

Build output includes:

- Sitemap.
- Robots.txt.

Post pages include:

- Article metadata.
- Published date.
- Updated date when applicable.
- Author context.
- JSON-LD where appropriate.
- Descriptive links.
- Text context for rich media.

## Accessibility Acceptance

Accessibility passes when:

- Keyboard focus is visible.
- Icon-only links have accessible names.
- Meaningful images have alt text.
- Decorative images use empty alt text.
- Color is not the only way to communicate meaning.
- Text contrast is readable.
- Reduced-motion preference is respected.

## Performance Acceptance

Performance passes when:

- Core article content is available without client-side JavaScript.
- Third-party embeds are lazy-loaded or controlled where practical.
- Images and embeds use stable dimensions or layout constraints.
- Analytics is injected once through a shared layout.
- No unnecessary client-side application shell is introduced.

## GitHub Pages Acceptance

Deployment passes when:

- GitHub Actions builds the site from source.
- Astro `site` and `base` are correct for the GitHub Pages URL.
- Homepage works at the deployed URL.
- Post detail routes work at the deployed URL.
- Assets resolve correctly.
- Sitemap and robots.txt resolve correctly.

## Manual QA Viewports

Check at minimum:

- Mobile: 390px wide
- Tablet: 768px wide
- Desktop: 1440px wide

For each viewport:

- Homepage is readable.
- Post list date rhythm works or collapses cleanly.
- Post detail body is comfortable to read.
- No horizontal scrolling appears.
- Media embeds fit the viewport.

## Release Blockers

Do not release if:

- Build fails.
- Draft posts are published.
- Public pages lack metadata.
- Homepage has a traditional navbar.
- A backend dependency is introduced.
- Text-first content is violated.
- Mobile layout has horizontal overflow.
- Source-of-truth conflicts remain unresolved.
