# JiwenS.github.io

[![Deploy to GitHub Pages](https://github.com/JiwenS/JiwenS.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/JiwenS/JiwenS.github.io/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![MDX](https://img.shields.io/badge/Content-MDX-1B1F24)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=githubpages&logoColor=white)

[中文 README](README.zh-CN.md)

## Overview

English-first personal publication built with Astro, MDX content collections, and GitHub Pages.

This site is a static editorial blog focused on finance, technology, AI products, and product strategy. It is designed as a lightweight publication archive: a concise homepage, date-sorted post list, and text-first article pages with optional media embeds.

## Tech Stack

- Astro static output
- MDX posts through Astro content collections
- CSS custom properties for design tokens
- GitHub Actions + GitHub Pages deployment
- Google Analytics through a shared layout component

## Project Structure

```text
src/
  components/      Reusable Astro components
  content/posts/   MDX posts
  layouts/         Shared page layouts
  lib/             Utilities and site config
  pages/           Routes and static endpoints
  styles/          Global CSS
public/            Static assets copied as-is
docs/              Product, design, and engineering docs
.github/workflows/ GitHub Pages deployment workflow
```

## Local Development

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run check
npm run lint
npm run format
npm run build
npm run preview
```

## Writing Posts

Posts live in `src/content/posts/`.

Required frontmatter:

```yaml
title: ""
description: ""
subtitle: ""
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
tags: []
heroImage: ""
heroAlt: ""
themeColor: "dust-blue"
canonicalUrl: ""
recommendedPosts: []
draft: true
```

Notes:

- Keep posts text-first; images, video, and audio should support the written argument.
- Set `draft: true` while drafting. Draft posts are excluded from public routes and lists.
- Use lowercase kebab-case tags in frontmatter. Tags render as display labels on post pages.
- Choose `themeColor` from the approved tokens in `src/content.config.ts`.

## Media Embeds

MDX posts can import local Astro components:

```mdx
import YouTubeEmbed from "../../components/YouTubeEmbed.astro";

<YouTubeEmbed
  videoId="aircAruvnKk"
  title="But what is a neural network?"
  caption="A supporting reference for the surrounding text."
/>
```

Audio embeds are available through `AudioEmbed.astro`.

## Site Configuration

Core site metadata is centralized in `src/lib/site.ts`.

Update this file when changing:

- Site title
- Site description
- Canonical site URL
- Author name
- Author links

Google Analytics is mounted through `src/components/GoogleAnalytics.astro` and included by `src/layouts/BaseLayout.astro`.

## Deployment

This repository deploys to GitHub Pages through `.github/workflows/deploy.yml`.

Deployment flow:

1. Push changes to `main`.
2. GitHub Actions runs `npm ci` and `npm run build`.
3. The generated `dist/` artifact is uploaded to GitHub Pages.

Production URL:

```text
https://jiwens.github.io
```

GitHub Pages should be configured to use **GitHub Actions** as the source.

## Documentation

The `docs/` directory is the source of truth for product direction, branding, UI/UX, engineering conventions, and decision records.

Before making structural, visual, routing, content model, SEO, or deployment changes, check the relevant document under `docs/`.
