![orelia-mc.github.io](https://socialify.git.ci/orelia-mc/orelia-mc.github.io/image?description=1&language=1&name=1&owner=1&pattern=Plus&theme=Dark)

## About

`orelia-mc.github.io` は Minecraft RPG プラグイン群 **Orelia** の公式サイト(開発中)です。Next.js の静的エクスポート (`output: "export"`) でビルドし、backend なしで GitHub Pages にホストしています。GitHub Pages の user/org ページとしてルートドメインに公開するため、リポジトリ名は `orelia-mc.github.io`(旧 `orelia-web`)です。

公開サイト: https://orelia-mc.github.io/

## Setup

```bash
npm install
npm run dev     # http://localhost:3000 でライブプレビュー
npm run build   # out/ に静的サイトを出力
```

`main` への push で GitHub Actions (`.github/workflows/deploy.yml`) が `npm run build` を実行し、`out/` を GitHub Pages にデプロイします。

## Structure

- `app/page.tsx` — トップページ本体(Hero / About / 開発状況 / Systems / Footer)
- `components/RepoStatusCard.tsx` — GitHub REST API (`api.github.com/repos/...`) をクライアント側で直接 fetch し、`orelia-core` / `orelia-world` の最終更新日・stars・open issues を表示するコンポーネント。backend を持たないため、未認証 API のレート制限(60 req/h/IP)に達すると GitHub へのリンクにフォールバックする
- `app/globals.css` — デザイントークン(色・フォント)とレイアウト。背景は `public/assets/bg.jpg` を `position: fixed` で固定し、スクロールした先のセクションには `backdrop-filter: blur()` で暗めのすりガラス効果をかけている
- `public/assets/` — `orelia-docs/assets` からコピーしたロゴ・背景画像。`app/icon.jpg` (favicon) も同じロゴを使用

## Notes

- user/org ページ(ルートドメイン公開)のため `next.config.mjs` に basePath は設定していない
- フォントは Story Script(ロゴ見出し、Google Fonts の `<link>` 経由) / Zen Kaku Gothic New(本文、`next/font/google` で自己ホスト)/ JetBrains Mono(数値・ラベル、`next/font/google` で自己ホスト)
- アイコンは [Iconify](https://iconify.design/) (`@iconify/react`, `mdi` セット) を使用
