"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

type RepoInfo = {
  description: string | null;
  stargazers_count: number;
  open_issues_count: number;
  pushed_at: string;
  language: string | null;
  default_branch: string;
};

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 60) return `${minutes}分前`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}時間前`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}日前`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}ヶ月前`;
  return `${Math.floor(months / 12)}年前`;
}

export default function RepoStatusCard({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) {
  const [data, setData] = useState<RepoInfo | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("rate limited or unavailable");
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [owner, repo]);

  const repoUrl = `https://github.com/${owner}/${repo}`;

  return (
    <div className="repo-card">
      <div className="repo-card-head">
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="repo-name"
        >
          <Icon icon="mdi:github" width={18} />
          {repo}
        </a>
        <span className="repo-status-pill">
          <span className="dot" />
          開発中
        </span>
      </div>

      {error && (
        <p className="repo-error">
          最新情報を取得できませんでした。
          <a href={repoUrl} target="_blank" rel="noreferrer">
            GitHub で見る →
          </a>
        </p>
      )}

      {!error && !data && (
        <>
          <div className="repo-skeleton" style={{ width: "90%", marginBottom: "0.6rem" }} />
          <div className="repo-skeleton" style={{ width: "60%", marginBottom: "1.25rem" }} />
          <div className="repo-skeleton" style={{ width: "40%" }} />
        </>
      )}

      {!error && data && (
        <>
          <p className="repo-desc">{data.description ?? "説明はまだありません"}</p>
          <div className="repo-meta">
            {data.language && (
              <span className="repo-meta-item">
                <Icon icon="mdi:code-tags" width={15} />
                {data.language}
              </span>
            )}
            <span className="repo-meta-item">
              <Icon icon="mdi:star-outline" width={15} />
              {data.stargazers_count}
            </span>
            <span className="repo-meta-item">
              <Icon icon="mdi:alert-circle-outline" width={15} />
              {data.open_issues_count} issues
            </span>
            <span className="repo-meta-item">
              <Icon icon="mdi:clock-outline" width={15} />
              最終更新: {timeAgo(data.pushed_at)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
