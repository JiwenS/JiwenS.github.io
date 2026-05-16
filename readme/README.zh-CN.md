# JiwenS.github.io

[![Deploy to GitHub Pages](https://github.com/JiwenS/JiwenS.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/JiwenS/JiwenS.github.io/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![MDX](https://img.shields.io/badge/Content-MDX-1B1F24)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?logo=githubpages&logoColor=white)

[English README](README.en.md)

## 项目概览

这是一个使用 Astro、MDX 内容集合和 GitHub Pages 构建的英文个人出版站点。

本站是一个静态 editorial blog，内容方向聚焦金融、技术、AI 产品与产品策略。当前形态是轻量出版归档：简洁首页、按日期排序的文章列表，以及以文字为主、可嵌入多媒体的文章详情页。

## 技术栈

- Astro 静态生成
- 通过 Astro content collections 管理 MDX 文章
- 使用 CSS custom properties 管理设计 token
- 通过 GitHub Actions 部署到 GitHub Pages
- 通过共享布局组件接入 Google Analytics

## 项目结构

```text
src/
  components/      可复用 Astro 组件
  content/posts/   MDX 文章
  layouts/         页面布局
  lib/             工具函数与站点配置
  pages/           页面路由与静态端点
  styles/          全局样式
public/            原样复制的静态资源
docs/              产品、设计与工程文档
.github/workflows/ GitHub Pages 部署流程
```

## 本地开发

```bash
npm install
npm run dev
```

常用脚本：

```bash
npm run check
npm run lint
npm run format
npm run build
npm run preview
```

## 写作与发布文章

文章存放在 `src/content/posts/`。

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

注意事项：

- 保持文章以文字为主；图片、视频和音频应作为正文论点的补充。
- 写作中使用 `draft: true`。草稿不会出现在公开路由和列表中。
- frontmatter 中使用小写 kebab-case 标签；文章页会将其渲染为展示标签。
- `themeColor` 需要从 `src/content.config.ts` 中允许的 token 里选择。

## 多媒体嵌入

MDX 文章可以导入本地 Astro 组件：

```mdx
import YouTubeEmbed from "../../components/YouTubeEmbed.astro";

<YouTubeEmbed
  videoId="aircAruvnKk"
  title="But what is a neural network?"
  caption="A supporting reference for the surrounding text."
/>
```

音频嵌入可使用 `AudioEmbed.astro`。

## 站点配置

核心站点信息集中在 `src/lib/site.ts`。

如需修改以下内容，请更新该文件：

- 站点标题
- 站点描述
- canonical 站点地址
- 作者名称
- 作者外链

Google Analytics 通过 `src/components/GoogleAnalytics.astro` 挂载，并由 `src/layouts/BaseLayout.astro` 引入到全站。

## 部署

本仓库通过 `.github/workflows/deploy.yml` 部署到 GitHub Pages。

部署流程：

1. 推送变更到 `main`。
2. GitHub Actions 执行 `npm ci` 和 `npm run build`。
3. 生成的 `dist/` 构建产物会部署到 GitHub Pages。

生产地址：

```text
https://jiwens.github.io
```

GitHub Pages 的 Source 应配置为 **GitHub Actions**。

## 文档

`docs/` 目录是产品方向、品牌、UI/UX、工程规范与决策记录的 source of truth。

在修改结构、视觉、路由、内容模型、SEO 或部署方式前，请先查阅 `docs/` 下的相关文档。
