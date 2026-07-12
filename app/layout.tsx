import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// "Story Script" isn't in the font catalog next/font/google bundles yet,
// so it's loaded via a plain Google Fonts <link> in <head> below instead.

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orelia — Minecraft RPG Plugin",
  description:
    "Orelia は Minecraft 向け RPG プラグイン群。現在開発中の公式サイトで、開発状況とロードマップを公開しています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Story+Script&display=swap"
        />
      </head>
      <body
        className={`${zenKakuGothicNew.variable} ${jetbrainsMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
