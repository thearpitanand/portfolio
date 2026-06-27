# thearpitanand.com

Personal portfolio and technical blog for Arpit Anand, built with the Next.js App Router.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Styling:** Tailwind CSS v4 with `@tailwindcss/typography`
- **Content:** MDX via `next-mdx-remote`, with `remark-gfm`, `rehype-pretty-code` (syntax highlighting), `rehype-slug` and `rehype-autolink-headings`
- **Diagrams:** Mermaid (client-rendered)
- **Fonts:** Inter via `next/font/google`
- **Analytics:** Vercel Analytics
- **Hosting:** Vercel

## Getting started

Requires Node `>=20.9.0` and pnpm `>=11`.

```bash
pnpm install
pnpm dev      # start the dev server on http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # eslint
```

## Project structure

```
src/
  app/                 # App Router routes (home, /blog, /blog/[slug], sitemap, layout)
  components/          # layout, sections, blog renderers, UI primitives
  config/site.ts       # site metadata, social links, SEO keywords
  data/experience.ts   # work-experience entries (edit here, not in the component)
  content/blog/        # MDX blog posts
  types/               # shared TypeScript types (blog, experience)
  lib/                 # blog loading, experience calc, utils
```

Imports use the `@thearpitanand/*` path alias (see `tsconfig.json`).

## Adding a blog post

Drop a `.mdx` file into `src/content/blog/`. The frontmatter follows the schema in `src/types/blog.ts`:

```mdx
---
title: "Post title"
description: "One-line summary used for SEO and the blog index."
date: "2026-06-27"            # ISO date
slug: "post-title"
tags: ["nextjs", "typescript"]
category: "Engineering"
coverImage: "/assets/blog/post-title/cover.png"
author: "Arpit Anand"
draft: false
---

Your MDX content. Supports GFM, code blocks, callouts, FAQ, and Mermaid diagrams.
```

Cover/OG images live under `public/assets/blog/`. The sitemap and per-post OG images are generated automatically.

## Updating experience

Edit `src/data/experience.ts` - the `ExperienceSection` component renders straight from that array, so no component changes are needed.

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to the production branch trigger a build; the home page uses ISR (`revalidate = 86400`) to refresh the blended Medium feed daily.
