# Post Detail Content Hierarchy

Version: v1.0.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Approved

## Context

The owner wants article detail pages to follow a complete editorial post structure inspired by reference blogs such as Yield Code.

The desired structure includes tags, title, subtitle, publish date, estimated reading time, article body, previous / next post navigation, and a future "You might also like" recommendation area.

## Options Considered

- Minimal post pages with title, date, and body only.
- Complete editorial post pages with metadata, content, and post-to-post navigation.
- Recommendation-heavy article pages from the first version.

## Decision

Use a complete editorial post detail structure in the first version, while keeping recommendations lightweight and optional.

Tags should be included from the beginning for future indexing, recommendation, and discovery features.

Estimated reading time should be shown on post detail pages and preferably generated from the written body.

"You might also like" should be treated as a future enhancement unless an initial static recommendation list is easy to generate.

## Rationale

This gives each article the structure of a serious publication entry while preserving the current static-first architecture.

Tags and reading time improve scanning, SEO, and future content operations without forcing category pages in the first version.

## Impact

- Post detail IA should include tags, title, subtitle / dek, date, reading time, body, references, previous / next post links, and optional recommendations.
- Engineering should support tags in frontmatter and computed reading time.
- Recommendation modules should not require a backend in the first version.
