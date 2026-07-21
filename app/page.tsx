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

const extraModules = [
  "Party",
  "Guild",
  "Trade",
  "Mail",
  "Auction",
  "Housing",
  "Pet",
  "Mount",
  "Ranking",
  "Achievement",
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <span className="nav-mark">Orelia</span>
        <nav className="nav-links">
          <a href="https://github.com/orelia-mc" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://orelia-mc.github.io/orelia-docs/"
            target="_blank"
            rel="noreferrer"
          >
            Docs ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-kicker">Minecraft RPG Plugin — 開発中</p>
            <h1 className="hero-title">Orelia</h1>
            <p className="hero-dek">
              氷の大地の上に、時間をかけてシステムを積み上げていくプロジェクトです。
            </p>
          </div>
        </section>

        <article className="doc">
          <p className="doc-lede">
            Orelia は Minecraft サーバー向けに設計された RPG プラグイン群です。
            戦闘・成長・経済などのゲームシステムを担う <strong>orelia-core</strong>、
            クエストや会話・ダンジョンなどの世界コンテンツを担う{" "}
            <strong>orelia-world</strong>、パーティ・ギルド・交易などの
            後発 MMORPG 機能を担う <strong>orelia-extra</strong> の
            3 プラグインを中心に構成されています。加えて、管理者向けのテストプレイ支援を担う{" "}
            <strong>orelia-debug</strong>、ゲームプレイに依存しないサーバー運用・UX機能を担う{" "}
            <strong>orelia-serverutil</strong> の 2 プラグインが周辺を支えています。
          </p>

          <div className="spec-list">
            <div className="spec-row">
              <span className="spec-term">orelia-core</span>
              <p className="spec-desc">
                アイテム・スキル・ジョブ・ステータス・モンスター・経済などの
                ゲームプレイシステム本体。他プラグインは公開 API を通じてのみ連携する。
              </p>
            </div>
            <div className="spec-row">
              <span className="spec-term">orelia-world</span>
              <p className="spec-desc">
                クエスト・NPC・ダイアログ・ストーリー・ダンジョンなど、
                プレイヤーが実際に触れる世界のコンテンツを構築するプラグイン。
              </p>
            </div>
            <div className="spec-row">
              <span className="spec-term">orelia-extra</span>
              <p className="spec-desc">
                パーティ・ギルド・交易・郵便・オークション・住居・ペット・マウントなど、
                後発の MMORPG 系機能を追加するプラグイン。
              </p>
            </div>
            <div className="spec-row">
              <span className="spec-term">orelia-debug</span>
              <p className="spec-desc">
                管理者向けのテストプレイ支援ツール。GUI 強制表示・所持金操作・config の
                直接編集などを <code>/oladmin debug</code> から行える。自身はゲームプレイの
                状態を持たず、core・world・extra の公開 API を呼び出すだけの薄い層。
              </p>
            </div>
            <div className="spec-row">
              <span className="spec-term">orelia-serverutil</span>
              <p className="spec-desc">
                RPG プラグイン群とは独立した、サーバー運用・UX 周りの汎用プラグイン。
                ハブ転送・ワールド設定・サイドバーやタブリストの表示・join/leave 演出などを
                担い、core が無いサーバーでも単体で動作する。
              </p>
            </div>
            <div className="spec-row">
              <span className="spec-term">orelia-docs</span>
              <p className="spec-desc">
                各プラグインの設計・仕様をまとめたドキュメントサイト。アーキテクチャから
                API リファレンスまでを収録。{" "}
                <a
                  href="https://orelia-mc.github.io/orelia-docs/"
                  target="_blank"
                  rel="noreferrer"
                  className="type-link"
                >
                  ドキュメントを見る →
                </a>
              </p>
            </div>
          </div>
        </article>

        <div className="section-rule breakout section">
          <h2 className="doc-head">開発状況</h2>
          <p className="doc-body" style={{ maxWidth: "var(--measure)" }}>
            GitHub API から取得したリアルタイムの状態です。表示にはブラウザからの直接
            アクセスを利用しているため、アクセスが集中すると一時的に取得できない場合があります。
          </p>

          <div className="repo-grid">
            <RepoStatusCard owner="orelia-mc" repo="orelia-core" />
            <RepoStatusCard owner="orelia-mc" repo="orelia-world" />
            <RepoStatusCard owner="orelia-mc" repo="orelia-extra" />
          </div>
        </div>

        <div className="section-rule breakout section-tight">
          <h2 className="doc-head">
            積み重なる氷層のように、モジュールを実装中。
          </h2>
          <p className="doc-body" style={{ maxWidth: "var(--measure)" }}>
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
            <span className="module-group-label">orelia-extra</span>
            {extraModules.map((m) => (
              <span key={m} className="module-chip extra">
                {m}
              </span>
            ))}
          </div>
        </div>

        <footer className="letter-close">
          <p className="letter-close-body">
            まだ何も完成していません。氷の大地は少しずつ積み上がっています。続きは{" "}
            <a href="https://github.com/orelia-mc" target="_blank" rel="noreferrer">
              GitHub
            </a>{" "}
            と{" "}
            <a
              href="https://orelia-mc.github.io/orelia-docs/"
              target="_blank"
              rel="noreferrer"
            >
              ドキュメント
            </a>{" "}
            で。
          </p>
          <p className="letter-close-sign">— Orelia, 開発中。</p>
        </footer>
      </main>
    </>
  );
}
