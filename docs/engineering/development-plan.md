# Development Plan

Version: v0.1.0
Last Updated: 2026-05-15
Owner: Human project owner
Status: Draft

## Purpose

This document defines the first-version implementation plan.

It should be used to sequence development work and avoid expanding scope before the core blog is working.

## Phase 0: Project Baseline

Goal: prepare the repository for Astro development.

Deliverables:

- Astro project scaffolded in the repository.
- Existing `index.html` behavior reviewed and either migrated or removed.
- Package scripts created.
- Basic project structure committed.
- Documentation remains in `docs/`.

Done when:

- `npm run dev` starts the site.
- `npm run build` succeeds.
- The homepage renders through Astro.

## Phase 1: Content Model

Goal: establish the post system.

Deliverables:

- One primary `posts` content collection.
- Frontmatter schema matching `docs/engineering/architecture.md`.
- Draft filtering.
- Date sorting.
- Reading time generation.
- Sample posts for homepage and detail testing.

Done when:

- Draft posts are excluded from public pages.
- Published posts render in reverse chronological order.
- At least one post detail page renders all required metadata.

## Phase 2: Base Layout and Design Tokens

Goal: implement the editorial visual foundation.

Deliverables:

- Global layout.
- Typography scale.
- Color tokens from `docs/uiux/visual-direction.md`.
- Theme color CSS variable support.
- Icon-only external link component.
- Responsive spacing system.

Done when:

- The site has one coherent editorial style system.
- No traditional navbar is present.
- Theme color can be set per post.

## Phase 3: Homepage

Goal: build the one-page publication homepage.

Deliverables:

- Concise about / identity section.
- Latest posts list.
- Large date plus title-summary desktop layout.
- Mobile-friendly compact post list.
- Quiet external links.

Done when:

- Homepage matches `docs/uiux/information-architecture.md`.
- Posts are sorted by `publishedAt` descending.
- Layout works on desktop, tablet, and mobile.

## Phase 4: Post Detail

Goal: build complete article reading pages.

Deliverables:

- Tags.
- Title.
- Subtitle / dek.
- Published and updated dates.
- Reading time.
- Author byline.
- MDX body rendering.
- Optional media inserts.
- Previous / next post links.
- Optional static recommendations if easy to support.

Done when:

- Post detail matches the required hierarchy.
- Main content is text-first.
- Previous / next links are generated from date order.

## Phase 5: SEO, GEO, and Metadata

Goal: make public pages machine-readable and shareable.

Deliverables:

- Page title and description helpers.
- Canonical URLs.
- Open Graph metadata.
- Twitter / X card metadata.
- JSON-LD for site, person, and posts where appropriate.
- Sitemap.
- Robots.txt.

Done when:

- Rendered HTML contains expected metadata.
- Sitemap and robots.txt are present in the build output.
- Public content is available as crawlable static HTML.

## Phase 6: Motion and Interaction

Goal: add restrained editorial motion.

Deliverables:

- Astro view transitions where feasible.
- Homepage-to-post continuity.
- Subtle hover states.
- Reduced-motion fallback.
- Stable embed and media dimensions.

Done when:

- Navigation feels smooth without blocking reading.
- Reduced-motion preference is respected.

## Phase 7: GitHub Pages Release

Goal: publish the first working version.

Deliverables:

- GitHub Actions workflow.
- Astro `site` and `base` configured.
- Build artifact deployed to GitHub Pages.
- Verification checklist completed.

Done when:

- The public GitHub Pages URL serves the built site.
- Homepage and post detail pages work at the deployed URL.
- Assets, links, metadata, sitemap, and robots.txt resolve correctly.

## Deferred Scope

Do not implement in the first version:

- Category pages.
- Search.
- Comments.
- Account system.
- Membership.
- CMS.
- Backend services.
- Paid content.
- Newsletter backend.
- Automatic hero-image color extraction.
