# Development Workflow

Version: v0.4.0
Last Updated: 2026-05-17
Owner: Human project owner
Status: Draft

## Purpose

This document defines the repeatable workflow for implementing changes.

It should not restate product or design direction. Use it to decide how to work, what to check, and when to update source-of-truth documents.

## Related Documents

- Development plan: `docs/engineering/development-plan.md`
- Engineering conventions: `docs/engineering/conventions.md`
- Acceptance criteria: `docs/engineering/acceptance-criteria.md`
- Architecture: `docs/engineering/architecture.md`
- SEO/GEO: `docs/engineering/seo-and-geo.md`

## Task Workflow

For every implementation task:

1. Read the relevant source-of-truth document.
2. Confirm the task belongs to the current development phase.
3. Check whether the change affects product, brand, UI/UX, engineering, SEO/GEO, or content rules.
4. If it changes a rule, update docs or create a decision record before treating the implementation as final.
5. Implement the smallest coherent change.
6. Run the relevant checks.
7. Verify against acceptance criteria.
8. Summarize changed files, verification results, and open risks.

## Source of Truth Precedence

Use this precedence when documents and code disagree:

1. Approved decision records in `docs/decisions/`
2. Product, branding, UI/UX, and engineering documents
3. Existing implementation

If there is a meaningful conflict, stop and capture a human decision rather than silently choosing the code path.

## Local Commands

Expected commands after Astro is initialized:

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
npm run lint
```

Recommended script contract:

```json
{
  "scripts": {
    "dev": "astro dev",
    "check": "astro check",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "lint": "prettier --check .",
    "format": "prettier --write ."
  }
}
```

If the final implementation uses different tools, update this document.

## Definition of Done for a Task

A task is done only when:

- Code is implemented.
- Required docs or decisions are updated.
- Relevant checks pass.
- Desktop, tablet, and mobile behavior have been considered for UI changes.
- SEO/GEO behavior is preserved for public pages.
- No first-version non-goal has been introduced.
- Any unresolved risk is documented in the final summary.

## When to Add a Decision Record

Add a decision record when a change:

- Changes framework, deployment, routing, or content model.
- Changes homepage or post detail structure.
- Changes visual direction, motion direction, or color system.
- Adds backend, account, membership, comments, CMS, or paid-content behavior.
- Changes SEO/GEO crawler policy.
- Creates an exception to an accepted rule.

Do not add a decision record for routine implementation details that do not create a reusable rule.

## Content Publishing Workflow

All article ideas start in `src/content/drafts/` as plain Markdown unless there is a clear reason to draft directly in MDX.

For a new post:

1. Create or update a plain Markdown draft in `src/content/drafts/`.
2. Run an editorial review before publication. The review must cover quality, structure, clarity, originality, credibility, audience fit, distribution potential, SEO/GEO readiness, and multimedia opportunities.
3. Record concrete revision notes next to the draft in `src/content/drafts/`, using a review file such as `<draft-name>.review.md`.
4. Revise the draft until the main issues from the review are addressed.
5. Stop for HITL confirmation. Do not move the article into `src/content/posts/` before the human owner approves the reviewed draft for publication.
6. After HITL approval, render the draft into a publishable Markdown / MDX post in `src/content/posts/`.
7. Fill required frontmatter.
8. Check the approved tag library in `docs/engineering/conventions.md` and `src/content.config.ts`.
9. Reuse an approved tag when one fits. Use `notes` for general personal notes and reflection posts.
10. If no approved tag fits, stop for HITL confirmation before adding a new tag. After approval, add the tag to the documented tag library and the `approvedPostTags` schema in `src/content.config.ts`.
11. Select `themeColor` from approved tokens when needed.
12. Ensure the written body is meaningful and text-first.
13. Add optional images, YouTube embeds, audio, charts, references, or transcripts only when they improve the article. Rich media must have surrounding text context and accessible alt text or captions.
14. Verify title, description, canonical behavior, social metadata, and structured data behavior.
15. Publish with `draft: false` only after HITL approval and successful checks.
16. After the post enters `src/content/posts/`, keep the draft and review file until the post has been preview-reviewed. Some issues, such as image balance, media sizing, link density, layout rhythm, or visual hierarchy, may only become clear after rendering the post page.
17. If post-preview review finds issues, treat the article as temporarily returned to the draft/review loop. Update the review file with the new findings, update the Markdown draft in `src/content/drafts/`, and update the publishable Markdown / MDX file in `src/content/posts/` so local preview reflects the latest revision.
18. After the post is approved in rendered preview and the final `src/content/posts/` version is stable, remove the local source draft and local review file from `src/content/drafts/`.

The `src/content/drafts/` directory is gitignored. Drafts and review notes are local working material and must not be committed or published to the repository.

### Editorial Review Dimensions

Before HITL approval, evaluate each draft on:

- Reader goal: for public explanatory posts, prioritize understandability, shareability, and reader confidence for general and semi-professional readers. Reviews should not push the draft toward specialist handbook precision unless the article's promise requires it. Technical simplification is acceptable when it improves comprehension and does not create a materially misleading claim.
- Quality: the core idea is worth publishing and avoids filler.
- Structure: the article has a clear opening, logical progression, and intentional ending.
- Clarity: sentences are understandable, claims are concrete enough to be useful, and jargon is limited, translated, or explained through examples.
- Originality: the piece reflects a distinct point of view or lived experience.
- Credibility: factual claims are supportable, sourced when needed, and not overstated. Credibility should serve trust with the target reader, not turn every explanation into a compliance or operations manual.
- Audience fit: the article fits the blog's finance, product, AI, systems, or personal-reflection direction and speaks to smart general readers or semi-professional readers, not only deep domain specialists.
- Distribution potential: the title, hook, excerpt, and shareable takeaway are easy to communicate.
- SEO/GEO readiness: metadata can summarize the article accurately, headings are crawlable, and references are descriptive.
- Multimedia readiness: any image, video, audio, chart, or transcript addition strengthens the text-first article rather than replacing it. When a review recommends existing media, it must include the source or reference URL and note any attribution / licensing concern that needs human review. When a review recommends making a custom image, chart, diagram, or generated visual, it must include a concrete production brief or image-generation prompt, plus the intended alt text.

## Deployment Workflow

First-version deployment target: GitHub Pages.

Deployment should:

- Build from source through GitHub Actions.
- Publish generated static output.
- Use correct Astro `site` and `base` settings.
- Avoid committing generated output unless the deployment strategy explicitly requires it.

## Pre-Release Verification

Before the first release:

1. Run `npm run build`.
2. Run local preview.
3. Verify homepage layout.
4. Verify at least one post detail page.
5. Verify sitemap and robots.txt.
6. Inspect rendered HTML for metadata and structured data.
7. Check desktop, tablet, and mobile layouts.
8. Check reduced-motion behavior.
9. Confirm GitHub Pages deployment output.
