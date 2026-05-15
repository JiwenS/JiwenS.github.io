# Date Sorted Posts and Text First Content

Version: v1.0.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Approved

## Context

The owner does not want to classify posts in the first version of the blog. The homepage should show latest posts ordered by date, similar to a simple publication archive.

The owner also clarified that each standalone post must contain a meaningful written component. Images, video, and audio are optional supporting media, not replacements for text.

For podcast-style posts, the written content should be the complete conversation transcript.

## Options Considered

- Multiple content collections by category from the first version.
- A single posts collection with optional tags and future classification support.
- A homepage grouped by Signals / Systems / Products.
- A homepage showing posts by reverse chronological order.

## Decision

Use a single posts-first content model for the initial version.

The homepage should list latest posts by reverse chronological order.

Post classification, category pages, or grouped navigation can be added later if needed.

Every standalone post must include text. Multimodal assets are optional enhancements.

## Rationale

Date-sorted posts reduce implementation complexity and keep the first version focused on publishing, reading experience, SEO, and personal brand clarity.

Avoiding early classification also prevents the content system from forcing premature editorial boundaries.

Text-first publishing preserves SEO, accessibility, and generative engine readability while still allowing images, YouTube videos, and audio to enrich articles.

## Impact

- Architecture should use one primary `posts` collection for the first version.
- Homepage design should prioritize a latest-posts list ordered by publish date.
- Category fields should be optional or deferred.
- Multimodal content should be modeled as optional supporting content.
- Podcast-style posts should include full transcripts.
