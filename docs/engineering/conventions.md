# Engineering Conventions

Version: v0.3.0
Last Updated: 2026-05-17
Owner: Human project owner
Status: Draft

## Purpose

This document defines implementation conventions for the blog.

Use it when creating files, components, styles, content schemas, and page behavior.

## Project Structure

Recommended Astro structure:

```text
src/
+-- components/
+-- content/
|   +-- drafts/
|   +-- posts/
+-- layouts/
+-- lib/
+-- pages/
+-- styles/
public/
+-- assets/
+-- robots.txt
docs/
```

Conventions:

- `src/content/drafts/` stores unpublished local working drafts and review notes before editorial review and HITL approval. This directory is gitignored and must not be committed.
- `src/content/posts/` stores reviewed Markdown / MDX posts that are ready for the Astro content collection.
- `src/layouts/` stores page-level layouts.
- `src/components/` stores reusable UI components.
- `src/lib/` stores utility functions such as reading time, date formatting, and SEO helpers.
- `src/styles/` stores global CSS and design tokens.
- `public/` stores static files that should be copied as-is.

## Naming

Files:

- Components: `PascalCase.astro`
- Layouts: `PascalCase.astro`
- Utility files: `kebab-case.ts`
- Content slugs: `kebab-case.mdx`
- Draft filenames: human-readable Markdown names are acceptable while drafting; convert to kebab-case when publishing.
- CSS files: `kebab-case.css`

Examples:

- `PostList.astro`
- `PostMeta.astro`
- `BaseLayout.astro`
- `reading-time.ts`
- `farewell-rust.mdx`

## Content Frontmatter

Plain Markdown drafts in `src/content/drafts/` do not need frontmatter. Draft review files should live beside their source drafts and use a suffix such as `.review.md`. Publishable posts in `src/content/posts/` must include frontmatter.

Required post frontmatter:

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

Rules:

- `title` is the primary article title.
- `subtitle` or `description` can be used as the visible dek.
- `description` must work as SEO meta description.
- `publishedAt` controls homepage ordering.
- `updatedAt` is required when the article has meaningful updates.
- `tags` must come from the approved tag library.
- `themeColor` must use an approved token unless a future decision allows arbitrary values.
- `draft: true` posts must not be publicly rendered.

## Tag Convention

Tags are intentionally limited to a small approved library so posts remain easy to organize.

Approved tags:

- `notes`: General personal notes, reflections, launch posts, and essays that do not yet require a more specific recurring category.

Rules:

- Lowercase.
- Kebab-case.
- Reusable.
- Specific enough to aid future indexing.
- Not used as first-version navigation.
- Defined in both this document and `approvedPostTags` in `src/content.config.ts`.

Avoid:

- One-off sentence-like tags.
- Duplicates with different spelling.
- Tags used only for decoration.

Before publishing a post:

1. Check whether the article fits an approved tag.
2. Reuse the existing tag if it fits.
3. If no approved tag fits, stop for HITL confirmation.
4. After HITL approval, add the new tag to this library and to `approvedPostTags` in `src/content.config.ts`.

## Theme Color Convention

Approved initial theme tokens:

- `olive`
- `dust-blue`
- `clay`
- `pale-gold`
- `sage`
- `plum-gray`
- `oxide`
- `slate-teal`

Implementation rules:

- Map `themeColor` to CSS variables.
- Keep theme color as accent, not full-page decoration by default.
- Ensure contrast is readable.
- If missing, fall back to the default paper / ink system.

## CSS Convention

Use CSS custom properties for design tokens.

Recommended token groups:

```css
:root {
  --color-paper: #f4f0e8;
  --color-ink: #171717;
  --color-muted-ink: #6d6860;
  --color-rule: #d8d0c3;
  --color-theme: var(--color-dust-blue);
}
```

Rules:

- Do not use viewport-width font scaling.
- Keep letter spacing at `0` unless a specific UI label needs a documented exception.
- Prefer layout primitives over nested card structures.
- Do not introduce decorative gradient blobs, particles, or animated backgrounds.
- Use stable dimensions for dates, embeds, and media.

## Component Convention

Recommended first-version components:

- `ExternalIconLink.astro`
- `PostList.astro`
- `PostListItem.astro`
- `PostMeta.astro`
- `PostTags.astro`
- `PostNavigation.astro`
- `Seo.astro`
- `YouTubeEmbed.astro`
- `AudioEmbed.astro`

Rules:

- Components should be small and purpose-specific.
- UI components should not fetch remote data.
- Components should accept typed props where practical.
- Icon-only components require accessible labels.

## Routing Convention

Recommended routes:

- `/`
- `/post/[slug]/`

Avoid adding routes for About, Archive, categories, tags, search, or podcast until a future decision approves them.

## SEO Convention

Use one shared SEO component or helper for:

- `title`
- `description`
- canonical URL
- Open Graph tags
- Twitter / X card tags
- JSON-LD

Rules:

- Do not duplicate analytics snippets.
- Do not create public pages without metadata.
- Do not rely on client-side JavaScript to create core metadata.

## Motion Convention

Use Astro view transitions where feasible.

Rules:

- Add transitions only where they improve continuity.
- Respect `prefers-reduced-motion`.
- Avoid animations that delay reading.
- Avoid parallax-heavy motion.

## Accessibility Convention

Rules:

- Icon-only links must have `aria-label`.
- Keyboard focus must be visible.
- Images that carry meaning must have alt text.
- Decorative images should use empty alt text.
- Embedded media needs surrounding text context.
- Color must not be the only indicator of meaning.

## Dependency Convention

Prefer minimal dependencies.

Allowed by default:

- Astro official integrations needed for sitemap, MDX, or checking.
- Formatting and type-checking tools.
- Small utilities for reading time or dates if they reduce custom code.

Needs explicit review:

- UI component libraries.
- Animation libraries.
- CMS packages.
- Search libraries.
- Analytics beyond Google Analytics.
- Any package that adds client-side application weight.
