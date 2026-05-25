# Information Architecture

Version: v0.4.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Draft

## First Version Structure

The first version should be a one-page publication homepage plus post detail pages.

Recommended pages:

- Home: short about / identity section followed by latest posts
- Post detail: individual article pages opened from the post list

Optional later pages:

- About
- Archive or all posts
- Signals
- Systems
- Products
- RSS
- Podcast
- Search

## Home

The homepage should prioritize the latest posts list.

The page should begin with a concise about / identity section. This section should quickly explain who the owner is, what the publication is about, and why the point of view is distinct.

Primary pattern:

- Large date on the left.
- Post title and summary on the right.
- Reverse chronological order.
- No required category grouping in the first version.

Homepage content order:

1. Concise about / identity section.
2. Latest posts list.
3. Footer or quiet external links.

The identity section may include a non-clickable editorial subline below the owner name. It should describe the owner and publication viewpoint in sentence form, not as article categories. It should remain visually quiet and distinct from post tags.

## Navigation

Do not use a traditional navigation bar in the first version.

The site should not feel like a conventional multi-page website with navbar buttons.

Allowed navigation elements:

- Post links from the latest-posts list.
- Icon-only external links such as GitHub, email, or professional profiles.
- A quiet return link from post detail pages to the homepage.
- RSS link if implemented, preferably as a small icon or text link in the footer.

Avoid creating navigation for categories or internal sections until the content volume supports it.

## Post Detail

Each post detail page should include:

- Tags for future indexing, recommendation, and discovery.
- Title.
- Subtitle, description, or dek.
- Published date.
- Updated date when applicable.
- Estimated reading time.
- Author byline.
- Main written body.
- Optional media inserts.
- Optional references or footnotes.
- Previous / next post links.
- Optional "You might also like" recommendation module.
- Quiet return-to-home link if needed.

Preferred post detail order:

1. Tags.
2. Title.
3. Subtitle / dek.
4. Date, updated date when applicable, and estimated reading time.
5. Main written body.
6. References, footnotes, or source notes when applicable.
7. Previous / next post navigation.
8. Optional "You might also like" recommendations.
9. Footer or quiet return link.

The "You might also like" module is a future enhancement. If implemented in the first version, it should use static recommendations derived from tags, recency, or manual frontmatter rather than a backend service.

## Content Hierarchy

Every standalone post must remain text-first.

The hierarchy should be:

1. Written argument, transcript, or essay body.
2. Supporting images, videos, audio, charts, or diagrams.
3. Metadata and navigation.

## Future Taxonomy

Signals / Systems / Products should remain brand and editorial lenses in the first version.

They should not become required technical categories until a future decision confirms the need for taxonomy pages, filters, or category navigation.
