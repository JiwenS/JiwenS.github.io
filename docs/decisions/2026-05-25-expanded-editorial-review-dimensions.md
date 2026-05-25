# Expand Editorial Review Dimensions

Version: v1.0.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Approved

## Context

While reviewing a draft about building a personal blog with AI agents, the owner asked that repeatable evaluation criteria such as structural balance, detail density, and image or diagram opportunities be incorporated into the comprehensive editorial review process.

## Options Considered

- Keep the existing broad review dimensions and handle these concerns ad hoc in individual review notes.
- Add more specific review dimensions to the content publishing workflow.
- Create a separate editorial scoring rubric document.

## Decision

Expand `docs/engineering/development-workflow.md` with additional editorial review dimensions for structural balance, detail density, practical specificity, and visual explanation fit.

## Rationale

These dimensions are reusable across future posts and make reviews more consistent. They also prevent the review process from focusing only on correctness and metadata while missing article-level issues such as a weak ending, uneven section weight, insufficient examples, or missed diagram opportunities.

## Impact

Future draft reviews should explicitly assess whether the article feels balanced, whether major claims have enough concrete support, whether the reader receives practical value, and whether visual media would improve understanding without replacing text-first content.
