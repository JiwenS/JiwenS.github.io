# Move Editorial Content To Root Content Directory

Version: v1.0.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Approved

## Context

Article work previously lived under `src/content/`, which made editorial publishing feel like direct source-code modification. The owner wanted a clearer separation between application source code and editorial source content, while preserving Astro content collection validation and static generation.

## Options Considered

- Keep posts and drafts under `src/content/`.
- Move posts and drafts into `public/`.
- Move posts and drafts into a root-level `content/` directory.

## Decision

Move editorial source content into a root-level `content/` directory:

```text
content/
+-- drafts/
+-- posts/
```

Keep article assets such as images under `public/assets/posts/`.

## Rationale

`public/` is for already-public static assets that should be copied as-is. Drafts and source posts need content validation, metadata handling, route generation, SEO behavior, and draft controls, so they should not live in `public/`.

A root-level `content/` directory separates editorial source content from application code in `src/` while preserving Astro content collection behavior.

## Impact

The `posts` content collection loads from `./content/posts`. Drafts and review notes live in `content/drafts/`, which remains gitignored. Documentation and README references should use `content/posts/` and `content/drafts/` for editorial content paths.
