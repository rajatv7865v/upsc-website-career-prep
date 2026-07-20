"use client";

import { useEffect, useState } from "react";
import type { BlogPost } from "@/data/blog";

const FAV_KEY = "career-prepp-blog-favorites";

function readFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeFavorites(slugs: string[]) {
  localStorage.setItem(FAV_KEY, JSON.stringify(slugs));
  window.dispatchEvent(new Event("cp-favorites-changed"));
}

type BlogActionsProps = {
  post: BlogPost;
  compact?: boolean;
};

export default function BlogActions({ post, compact = false }: BlogActionsProps) {
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    const sync = () => setFavorite(readFavorites().includes(post.slug));
    sync();
    window.addEventListener("cp-favorites-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cp-favorites-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, [post.slug]);

  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${post.slug}`
      : `https://careerprepp.com/blog/${post.slug}`;

  const shareText = `${post.title} — Career Prepp`;

  function toggleFavorite() {
    const current = readFavorites();
    const next = favorite
      ? current.filter((s) => s !== post.slug)
      : [...current, post.slug];
    writeFavorites(next);
    setFavorite(!favorite);
  }

  function copyLink() {
    void navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  }

  function shareWhatsApp() {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${pageUrl}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareTelegram() {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareTwitter() {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareFacebook() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareLinkedIn() {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  function shareInstagram() {
    void navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    });
  }

  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: pageUrl,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      setShareOpen(true);
    }
  }

  function downloadWord() {
    const paragraphs = post.content
      .map((p) => `<p style="margin:0 0 14pt;line-height:1.6;font-size:12pt;">${escapeHtml(p)}</p>`)
      .join("");

    const html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:w="urn:schemas-microsoft-com:office:word"
 xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>${escapeHtml(post.title)}</title>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View></w:WordDocument></xml><![endif]-->
<style>
body { font-family: Calibri, Arial, sans-serif; color: #0a0a0a; }
h1 { font-size: 20pt; margin-bottom: 6pt; }
.meta { color: #5c5c5c; font-size: 10pt; margin-bottom: 18pt; }
</style>
</head>
<body>
<h1>${escapeHtml(post.title)}</h1>
<p class="meta">${escapeHtml(post.category)} · ${escapeHtml(post.date)} · ${escapeHtml(post.read)} · Career Prepp</p>
<p style="margin:0 0 14pt;line-height:1.6;font-size:12pt;"><em>${escapeHtml(post.excerpt)}</em></p>
${paragraphs}
<p style="margin-top:24pt;font-size:10pt;color:#5c5c5c;">Source: ${escapeHtml(pageUrl)}</p>
</body>
</html>`;

    const blob = new Blob(["\ufeff", html], {
      type: "application/msword;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${post.slug}.doc`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className={`blog-actions ${compact ? "blog-actions-compact" : ""}`}>
      <button
        type="button"
        onClick={toggleFavorite}
        className={`blog-action-btn ${favorite ? "is-active" : ""}`}
        aria-pressed={favorite}
        title={favorite ? "Remove from favourites" : "Save to favourites"}
      >
        <HeartIcon filled={favorite} />
        {!compact && (favorite ? "Saved" : "Favourite")}
      </button>

      <button
        type="button"
        onClick={downloadWord}
        className="blog-action-btn"
        title="Download Word file"
      >
        <DownloadIcon />
        {!compact && "Download Word"}
      </button>

      <div className="blog-share-wrap">
        <button
          type="button"
          onClick={() => setShareOpen((v) => !v)}
          className="blog-action-btn"
          aria-expanded={shareOpen}
          title="Share article"
        >
          <ShareIcon />
          {!compact && "Share"}
        </button>

        {shareOpen && (
          <div className="blog-share-menu" role="menu">
            <button type="button" role="menuitem" onClick={shareWhatsApp}>
              WhatsApp
            </button>
            <button type="button" role="menuitem" onClick={shareInstagram}>
              Instagram
            </button>
            <button type="button" role="menuitem" onClick={shareTelegram}>
              Telegram
            </button>
            <button type="button" role="menuitem" onClick={shareTwitter}>
              X / Twitter
            </button>
            <button type="button" role="menuitem" onClick={shareFacebook}>
              Facebook
            </button>
            <button type="button" role="menuitem" onClick={shareLinkedIn}>
              LinkedIn
            </button>
            <button type="button" role="menuitem" onClick={copyLink}>
              {copied ? "Link copied" : "Copy link"}
            </button>
            {"share" in navigator && (
              <button type="button" role="menuitem" onClick={() => void nativeShare()}>
                More…
              </button>
            )}
          </div>
        )}
      </div>

      {copied && !shareOpen && (
        <span className="blog-action-toast">Link copied</span>
      )}
    </div>
  );
}

export function useFavoriteSlugs() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    const sync = () => setSlugs(readFavorites());
    sync();
    window.addEventListener("cp-favorites-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cp-favorites-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return slugs;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path
        d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="18" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="19" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
