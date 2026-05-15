# Editorial Minimalism UI Direction

Version: v1.0.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Approved

## Context

The owner prefers an Editorial Minimalism direction inspired by Stripe Press. The desired visual language should use restrained typography, strong reading experience, and low-saturation colors across the color wheel rather than a single dominant hue family.

The owner selected the Muted Editorial Archive direction with Color Chapters influence.

The owner also confirmed that the site should use one coherent style system rather than separate light and dark design styles.

## Options Considered

- Pure minimal archive with very limited color.
- Editorial archive with muted multi-hue color tokens.
- Dark editorial ledger style.
- Separate light and dark themes.

## Decision

Adopt a single Editorial Minimalism design system.

Use a Muted Editorial Archive structure for the homepage and a Color Chapters approach for article-level theme accents.

The homepage should use a large date plus title and summary list pattern, ordered by publish date.

Article pages should support smooth entry transitions, including zoom-in, repositioning, and color interpolation where feasible.

Each article may specify a theme color at publish time. The theme color should be selected from a controlled low-saturation editorial palette or from rules informed by the article's hero image.

## Rationale

This direction matches the personal publication goal while keeping the reading experience restrained and credible.

A controlled article-level theme color gives the site visual range without fragmenting the brand.

One coherent design system avoids the maintenance and brand drift of separate light and dark themes.

## Impact

- UI/UX documentation should define one editorial style system, not a theme toggle.
- Article frontmatter should support `themeColor` and related presentation metadata.
- Motion should use Astro view transitions where appropriate, with accessible fallbacks and reduced-motion support.
- Homepage design should prioritize latest-post scanning and date rhythm.
- Color selection must remain controlled, low-saturation, and readability-first.
