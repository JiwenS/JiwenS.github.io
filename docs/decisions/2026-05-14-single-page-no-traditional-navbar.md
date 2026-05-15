# Single Page No Traditional Navbar

Version: v1.0.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Approved

## Context

The owner does not want the blog to feel like a traditional website with a navigation bar and button-driven page switching.

The first experience should be intuitive content: a short about / identity section at the top, followed directly by date-sorted posts.

The owner currently has no plan for additional pages beyond post detail pages. Small icon-only links, such as GitHub and email, may be used.

## Options Considered

- Traditional multi-page site with navbar.
- One-page publication homepage plus post detail pages.
- Single page only with no post detail pages.
- Multi-section landing page with navigation buttons.

## Decision

Use a one-page publication homepage for the first version.

Do not use a traditional navigation bar.

The homepage should include a concise about / identity section first, then the latest posts list ordered by date.

Icon-only links are allowed for external destinations such as GitHub, email, or other professional profiles.

## Rationale

This keeps the site aligned with the Editorial Minimalism direction and avoids a generic portfolio or product-site feel.

The site should feel like entering a focused personal publication, not navigating a conventional marketing website.

## Impact

- Information architecture should remove first-version standalone About and Archive page requirements.
- Homepage should carry the core identity, latest posts, and essential external links.
- Header treatment should be minimal and should not behave like a traditional navbar.
- Icon links must remain accessible through labels for screen readers and tooltips when useful.
