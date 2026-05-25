# Homepage Identity Subline

Version: v1.1.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Approved

## Context

The homepage introduction needed a faster way for readers to understand the owner's background and point of view. Article tags already exist for content indexing, but the owner wanted a separate hard-coded identity signal that classifies the person and publication style rather than individual posts.

## Options Considered

- Use the existing article tags on the homepage.
- Add clickable category-style navigation.
- Add non-clickable identity lenses near the owner name.
- Add a non-clickable editorial subline below the owner name.

## Decision

Add a hard-coded, non-clickable homepage identity subline:

Product-minded notes on financial systems, AI workflows, and technology shifts.

## Rationale

The sentence-form subline communicates the owner's professional surface area while feeling more like an editorial publication than a resume skill tag row. Keeping it non-clickable avoids creating first-version taxonomy navigation or confusing it with article tags.

## Impact

The homepage shows the identity subline below the owner name and before the introductory copy. Article tags remain content metadata controlled by the content schema and approved tag library.
