# Editorial Code Blocks

Version: v1.1.0
Last Updated: 2026-05-25
Owner: Human project owner
Status: Approved

## Context

The AI agent blog draft includes a fenced code block. The first custom treatment added a light editorial shell with a copy control, but the result had too many visible borders and not enough contrast against the article's paper background.

## Options Considered

- Keep the light editorial code block shell.
- Add a heavy syntax-highlighting or code UI dependency.
- Use Astro's existing Markdown output with a restrained dark editor-style panel, language label, and ghost copy button.

## Decision

Use a restrained dark editor-style code block treatment across Markdown / MDX content. Fenced code blocks should display a language label and copy button while keeping the surrounding UI minimal and avoiding heavy borders.

## Rationale

The blog is text-first, but code needs stronger contrast against the light article background. A dark local code panel improves scanability and syntax highlighting while remaining a component-level treatment rather than a site-wide dark theme. Progressive enhancement keeps the static HTML readable, avoids new dependencies, and gives readers a standard copy interaction.

## Impact

Astro Markdown uses a dark Shiki theme. The shared layout enhances rendered code blocks on page load and Astro view transitions. Future posts can use normal fenced Markdown code blocks and receive the same language label and copy behavior.
