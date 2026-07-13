# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`orelia-mc.github.io` is the official website (still in development) for the Minecraft RPG plugin suite **Orelia**. It's a Next.js 14 app router project built as a static export (`output: "export"` in `next.config.mjs`) with no backend, deployed as a GitHub Pages user/org page — repo name `orelia-mc.github.io` (renamed from `orelia-web`) so it publishes at the account root with no `basePath`.

This repo contains no plugin logic; it just presents the two gameplay plugins (`orelia-core`, `orelia-world`) and the docs site (`orelia-docs`) that live in sibling repos.

## Commands

```
npm install
npm run dev     # live preview at http://localhost:3000
npm run build   # static export to out/
npm run lint
```

Pushing to `main` runs GitHub Actions (`.github/workflows/deploy.yml`), which runs `npm run build` and deploys `out/` to GitHub Pages. There is no test suite.

## Architecture

- `app/layout.tsx` — root layout. Sets `<html lang="ja">`, loads fonts, and defines page `metadata` (title/description) used for the `<head>`.
- `app/page.tsx` — the entire top page (Hero / About / Development Status / Systems / Footer sections) — this is a single-page site, not a multi-route app.
- `app/globals.css` — all styling: design tokens (color/font custom properties) plus layout. The background image (`public/assets/bg.jpg`) is `position: fixed`; sections scrolled over it get a frosted-glass look via `backdrop-filter: blur()`.
- `components/RepoStatusCard.tsx` — the one interactive piece. A `"use client"` component that `fetch`es `api.github.com/repos/{owner}/{repo}` directly from the browser (no backend/API route) to show a repo's last-push time, stars, and open issues. Because it's unauthenticated, it can hit GitHub's 60 req/h/IP rate limit — on any fetch failure it falls back to rendering a plain link to the GitHub repo instead of erroring. When adding more repo cards, reuse this component rather than writing a new fetch.
- `public/assets/` — logo/background images, copied from `orelia-docs/assets` (that repo is the source of truth for the logo asset; keep them in sync manually if the logo changes there). `app/icon.jpg` (favicon) reuses the same logo.

### Fonts

Three fonts, each loaded a different way (see `app/layout.tsx`):

- **Story Script** (logo heading) — not in `next/font/google`'s catalog yet, so it's a plain Google Fonts `<link>` in `<head>`.
- **Zen Kaku Gothic New** (body text) and **JetBrains Mono** (numbers/labels) — self-hosted via `next/font/google`, exposed as CSS variables (`--font-body`, `--font-mono`) consumed in `globals.css`.

### Icons

Uses [Iconify](https://iconify.design/) via `@iconify/react`, `mdi` icon set (e.g. `<Icon icon="mdi:github" />` in `RepoStatusCard.tsx`). Prefer the `mdi` set for new icons to avoid pulling in another icon collection.

## Conventions

- This is a static-export site — do not add anything that requires a Node.js server at runtime (API routes, server actions, middleware, ISR). Data that needs to be live (like repo stats) must be fetched client-side, following `RepoStatusCard.tsx`'s pattern.
- Since there's no `basePath`, all internal links/asset paths are root-relative (`/assets/...`), not repo-name-prefixed.

## Committing changes

When committing, also update README.md and README_EN.md accordingly.
