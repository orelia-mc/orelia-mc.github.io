<img src="https://orelia-mc.github.io/assets/logo_wide.jpg" />
<h1 align="center">Orelia Web</h1>
<p align="center">Official Website of Orelia-MC</p>

## About

`orelia-mc.github.io` is the official website (in development) of the Minecraft RPG plugin suite **Orelia**. It's built as a Next.js static export (`output: "export"`) and hosted on GitHub Pages with no backend. The repo is named `orelia-mc.github.io` (formerly `orelia-web`) so it publishes at the root domain as a GitHub Pages user/org page.

Live site: https://orelia-mc.github.io/

## Setup

```bash
npm install
npm run dev     # live preview at http://localhost:3000
npm run build   # outputs the static site to out/
```

Pushing to `main` runs GitHub Actions (`.github/workflows/deploy.yml`), which executes `npm run build` and deploys `out/` to GitHub Pages.

## Structure

- `app/page.tsx` — the top page itself (Hero / About / Development Status / Systems / Footer)
- `components/RepoStatusCard.tsx` — fetches the GitHub REST API (`api.github.com/repos/...`) directly on the client to show `orelia-core` / `orelia-world`'s last update date, stars, and open issues. Since there's no backend, it falls back to a GitHub link once the unauthenticated API's rate limit (60 req/h/IP) is hit
- `app/globals.css` — design tokens (colors/fonts) and layout. The background (`public/assets/bg.jpg`) is `position: fixed`, and sections below the fold get a darkened frosted-glass effect via `backdrop-filter: blur()`
- `public/assets/` — logo/background images copied from `orelia-docs/assets`. `app/icon.jpg` (favicon) uses the same logo

## Notes

- No `basePath` is set in `next.config.mjs` since this is a user/org page published at the root domain
- Fonts: Story Script (logo heading, via Google Fonts `<link>`) / Zen Kaku Gothic New (body text, self-hosted via `next/font/google`) / JetBrains Mono (numbers/labels, self-hosted via `next/font/google`)
- Icons use [Iconify](https://iconify.design/) (`@iconify/react`, `mdi` set)
