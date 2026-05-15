# Documentation Source of Truth

Version: v0.1.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Draft

## Purpose

This directory is the source of truth for the personal blog product, brand, UI/UX, engineering standards, and human decisions.

The site is a finance + technology + product personal blog. The documentation here should guide future design, implementation, content structure, and tradeoff decisions before code changes are made.

## Directory Structure

```text
docs/
+-- product/      # Product positioning, audience, content strategy, roadmap
+-- branding/     # Personal IP, voice, naming, visual identity, content tone
+-- uiux/         # Information architecture, page flows, layout, interaction rules
+-- engineering/  # Technical architecture, coding standards, deployment notes
+-- decisions/    # Human-in-the-loop decisions and exception records
+-- README.md     # Documentation governance and workflow rules
```

## Working Rules

1. Documentation guides implementation.
   Before changing behavior, structure, visual language, or architecture, check the relevant document under `docs/`.

2. Code and documentation must stay aligned.
   If code conflicts with the documented source of truth, do not silently choose one side. The conflict must be reviewed by the human project owner.

3. Human decisions must be captured.
   When a conflict, exception, or major product/design/engineering choice is resolved by a human, record it in `docs/decisions/`.

4. Source-of-truth changes require HITL.
   Changes to core documents under `docs/product/`, `docs/branding/`, `docs/uiux/`, `docs/engineering/`, and this README require human-in-the-loop confirmation before being treated as accepted guidance.

5. Implementation may propose documentation changes.
   An implementation task can suggest updates to documentation, but the documentation only becomes authoritative after human review.

## Document Standard

Every core document should start with this metadata block:

```markdown
# Document Title

Version: v0.1.0
Last Updated: YYYY-MM-DD
Owner: Human project owner
Status: Draft | Approved | Deprecated
```

Versioning should follow these rules:

- `v0.x.x`: exploration or draft direction
- `v1.x.x`: approved baseline direction
- Patch version changes: clarifications that do not change intent
- Minor version changes: meaningful additions or scoped behavior changes
- Major version changes: direction changes that affect product, brand, UX, or engineering choices

## Change Process

Use this flow for documentation that acts as source of truth:

1. Identify the affected document.
2. Propose the change with a clear reason.
3. Ask for human confirmation if the change affects source-of-truth behavior.
4. Update the document metadata: version, last updated date, and status if needed.
5. If the change resolves a conflict or exception, add a decision record under `docs/decisions/`.

## Decision Records

Decision records should be stored in `docs/decisions/` using this naming format:

```text
YYYY-MM-DD-short-decision-title.md
```

Each decision record should include:

```markdown
# Decision Title

Version: v1.0.0
Last Updated: YYYY-MM-DD
Owner: Human project owner
Status: Approved

## Context

What triggered the decision.

## Options Considered

The realistic alternatives.

## Decision

The selected direction.

## Rationale

Why this direction was chosen.

## Impact

What must change in product, brand, UI/UX, engineering, or content.
```

## Conflict Handling

When implementation and documentation disagree:

1. Pause the affected change if the conflict can alter user-facing behavior, brand positioning, content structure, architecture, or deployment behavior.
2. Summarize the conflict in plain language.
3. Ask the human project owner to decide whether to update code, update documentation, or create an explicit exception.
4. Record the final decision in `docs/decisions/` if it changes direction or creates a reusable precedent.

## Initial Document Backlog

Recommended first documents:

- `docs/product/positioning.md`
- `docs/product/content-strategy.md`
- `docs/branding/personal-ip.md`
- `docs/branding/voice-and-tone.md`
- `docs/uiux/information-architecture.md`
- `docs/uiux/visual-direction.md`
- `docs/engineering/architecture.md`
- `docs/engineering/development-workflow.md`
