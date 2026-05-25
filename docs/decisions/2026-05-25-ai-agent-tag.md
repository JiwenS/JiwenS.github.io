# Add AI Agent Tag

Version: v1.0.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Approved

## Context

A new draft article about building a personal blog with AI-assisted development needed a more specific tag than the existing `notes` tag. The approved tag library did not yet include a tag for AI agent workflows or agent-assisted development practices.

## Options Considered

- Use `notes` for the article and avoid expanding the tag library.
- Add a new `ai-agent` tag for agent workflow and AI-assisted development content.
- Add a broader `ai` tag.

## Decision

Add `ai-agent` to the approved post tag library and to `approvedPostTags` in `src/content.config.ts`.

## Rationale

`ai-agent` is specific enough to organize posts about agent-assisted development, HITL workflows, prompt-to-code systems, and harness engineering without becoming a generic AI bucket.

## Impact

Future publishable posts may use `ai-agent` when the article is primarily about AI agent workflows, agent-assisted development, or the operating systems around AI coding. The tag remains an editorial indexing signal and does not create a first-version navigation route.
