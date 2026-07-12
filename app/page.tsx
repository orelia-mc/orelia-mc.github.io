import { Icon } from "@iconify/react";
import RepoStatusCard from "@/components/RepoStatusCard";

const coreModules = [
  "Item",
  "Skill",
  "Job",
  "Status",
  "Accessory",
  "Monster",
  "Boss",
  "Effect",
  "Economy",
  "GUI",
];

const worldModules = [
  "Quest",
  "NPC",
  "Dialogue",
  "Story",
  "Dungeon",
  "Region",
  "CutScene",
  "Event",
];

export default function Home() {
  return (
    <>
      <div className="bg-fixed" style={{ backgroundImage: "url(/assets/bg.jpg)" }} />

      <main>
        <section className="hero">
          <span className="hero-badge">Work in Progress</span>
          <h1 className="hero-title">Orelia</h1>
          <p className="hero-sub">
            Minecraft のための RPG プラグイン群 — 現在開発中
          </p>
          <div className="hero-scroll">
            <Icon icon="mdi:chevron-down" width={20} />
            scroll
          </div>
        </section>

        <section className="section panel">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            About
          </span>
          <h2 className="heading-xl">
            氷の大地に、
            <br />
            物語とシステムを積み上げる。
          </h2>
          <p className="lede">
            Orelia は Minecraft サーバー向けに設計された RPG プラグイン群です。
            戦闘・成長・経済などのゲームシステムを担う <strong>orelia-core</strong>、
            クエストや会話・ダンジョンなどの世界コンテンツを担う{" "}
            <strong>orelia-world</strong> の 2 プラグインを中心に構成されています。
          </p>

          <div className="card-grid">
            <div className="card">
              <div className="card-icon">
                <Icon icon="mdi:sword-cross" width={28} />
              </div>
              <div className="card-title">orelia-core</div>
              <p className="card-desc">
                アイテム・スキル・ジョブ・ステータス・モンスター・経済などの
                ゲームプレイシステム本体。他プラグインは公開 API を通じてのみ連携する。
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Icon icon="mdi:earth" width={28} />
              </div>
              <div className="card-title">orelia-world</div>
              <p className="card-desc">
                クエスト・NPC・ダイアログ・ストーリー・ダンジョンなど、
                プレイヤーが実際に触れる世界のコンテンツを構築するプラグイン。
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <Icon icon="mdi:book-open-page-variant-outline" width={28} />
              </div>
              <div className="card-title">orelia-docs</div>
              <p className="card-desc">
                両プラグインの設計・仕様をまとめたドキュメントサイト。
                アーキテクチャから API リファレンスまでを収録。
              </p>
              <div className="card-desc" style={{ marginTop: "0.75rem" }}>
                <a
                  href="https://orelia-mc.github.io/orelia-docs/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
                >
                  ドキュメントを見る →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section panel">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            開発状況
          </span>
          <h2 className="heading-xl">Live Repository Status</h2>
          <p className="lede">
            GitHub API から取得したリアルタイムの状態です。表示にはブラウザからの直接
            アクセスを利用しているため、アクセスが集中すると一時的に取得できない場合があります。
          </p>

          <div className="repo-grid">
            <RepoStatusCard owner="orelia-mc" repo="orelia-core" />
            <RepoStatusCard owner="orelia-mc" repo="orelia-world" />
          </div>
        </section>

        <section className="section panel">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Systems
          </span>
          <h2 className="heading-xl">
            積み重なる
            <br />
            氷層のように、モジュールを実装中。
          </h2>
          <p className="lede">
            それぞれのモジュールは独立して設計され、公開 API を介して組み合わさります。
          </p>

          <div className="module-grid">
            <span className="module-group-label">orelia-core</span>
            {coreModules.map((m) => (
              <span key={m} className="module-chip">
                {m}
              </span>
            ))}
            <span className="module-group-label">orelia-world</span>
            {worldModules.map((m) => (
              <span key={m} className="module-chip world">
                {m}
              </span>
            ))}
          </div>
        </section>

        <footer className="section footer" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
          <span>&copy; Orelia — An ongoing Minecraft RPG project</span>
          <div className="footer-links">
            <a href="https://github.com/orelia-mc" target="_blank" rel="noreferrer">
              <Icon icon="mdi:github" width={16} />
              GitHub
            </a>
            <a
              href="https://orelia-mc.github.io/orelia-docs/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:book-open-page-variant-outline" width={16} />
              Docs
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
