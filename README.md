# JiwenS.github.io

English-first personal publication built with Astro, MDX content collections, and GitHub Pages.

这是一个使用 Astro、MDX 内容集合和 GitHub Pages 构建的英文个人出版站点。

## Overview / 项目概览

This site is a static editorial blog focused on finance, technology, AI products, and product strategy. It is designed as a lightweight publication archive: a concise homepage, date-sorted post list, and text-first article pages with optional media embeds.

本站是一个静态 editorial blog，内容方向聚焦金融、技术、AI 产品与产品策略。当前形态是轻量出版归档：简洁首页、按日期排序的文章列表，以及以文字为主、可嵌入多媒体的文章详情页。

## Tech Stack / 技术栈

- Astro static output / Astro 静态生成
- MDX posts through Astro content collections / 通过 Astro content collections 管理 MDX 文章
- CSS custom properties for design tokens / 使用 CSS custom properties 管理设计 token
- GitHub Actions + GitHub Pages deployment / 通过 GitHub Actions 部署到 GitHub Pages

## Project Structure / 项目结构

```text
src/
  components/      Reusable Astro components / 可复用 Astro 组件
  content/posts/   MDX posts / MDX 文章
  layouts/         Shared page layouts / 页面布局
  lib/             Utilities and site config / 工具函数与站点配置
  pages/           Routes and static endpoints / 页面路由与静态端点
  styles/          Global CSS / 全局样式
public/            Static assets copied as-is / 原样复制的静态资源
docs/              Product, design, and engineering docs / 产品、设计与工程文档
.github/workflows/ GitHub Pages deployment workflow / GitHub Pages 部署流程
```

## Local Development / 本地开发

Install dependencies:

安装依赖：

```bash
npm install
```

Start the development server:

启动开发服务器：

```bash
npm run dev
```

Run Astro checks:

运行 Astro 检查：

```bash
npm run check
```

Build the static site:

构建静态站点：

```bash
npm run build
```

Preview the built site:

预览构建产物：

```bash
npm run preview
```

## Writing Posts / 写作与发布文章

Posts live in `src/content/posts/`.

文章存放在 `src/content/posts/`。

Required frontmatter:

必填 frontmatter：

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

注意事项：

- Keep posts text-first; images, video, and audio should support the written argument.
- 保持文章以文字为主；图片、视频和音频应作为正文论点的补充。
- Set `draft: true` while drafting. Draft posts are excluded from public routes and lists.
- 写作中使用 `draft: true`。草稿不会出现在公开路由和列表中。
- Use lowercase kebab-case tags in frontmatter. Tags render as display labels on post pages.
- frontmatter 中使用小写 kebab-case 标签；文章页会将其渲染为展示标签。
- Choose `themeColor` from the approved tokens in `src/content.config.ts`.
- `themeColor` 需要从 `src/content.config.ts` 中允许的 token 里选择。

## Media Embeds / 多媒体嵌入

MDX posts can import local Astro components:

MDX 文章可以导入本地 Astro 组件：

```mdx
import YouTubeEmbed from "../../components/YouTubeEmbed.astro";

<YouTubeEmbed
  videoId="aircAruvnKk"
  title="But what is a neural network?"
  caption="A supporting reference for the surrounding text."
/>
```

Audio embeds are available through `AudioEmbed.astro`.

音频嵌入可使用 `AudioEmbed.astro`。

## Site Configuration / 站点配置

Core site metadata is centralized in `src/lib/site.ts`.

核心站点信息集中在 `src/lib/site.ts`。

Update this file when changing:

如需修改以下内容，请更新该文件：

- Site title / 站点标题
- Site description / 站点描述
- Canonical site URL / canonical 站点地址
- Author name / 作者名称
- Author links / 作者外链

## Deployment / 部署

This repository deploys to GitHub Pages through `.github/workflows/deploy.yml`.

本仓库通过 `.github/workflows/deploy.yml` 部署到 GitHub Pages。

Deployment flow:

部署流程：

1. Push changes to `main`.
2. GitHub Actions runs `npm ci` and `npm run build`.
3. The generated `dist/` artifact is uploaded to GitHub Pages.

4. 推送变更到 `main`。
5. GitHub Actions 执行 `npm ci` 和 `npm run build`。
6. 生成的 `dist/` 构建产物会部署到 GitHub Pages。

For this repository, the production URL is:

当前仓库的生产地址：

```text
https://jiwens.github.io
```

GitHub Pages should be configured to use **GitHub Actions** as the source.

GitHub Pages 的 Source 应配置为 **GitHub Actions**。

## Documentation / 文档

The `docs/` directory is the source of truth for product direction, branding, UI/UX, engineering conventions, and decision records.

`docs/` 目录是产品方向、品牌、UI/UX、工程规范与决策记录的 source of truth。

Before making structural, visual, routing, content model, SEO, or deployment changes, check the relevant document under `docs/`.

在修改结构、视觉、路由、内容模型、SEO 或部署方式前，请先查阅 `docs/` 下的相关文档。
