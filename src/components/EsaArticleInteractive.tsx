"use client";

import { useState, useEffect } from "react";
import type { BlogPost } from "@/data/blog";
import { IconBookmark } from "@/components/Icons";

const FAV_KEY = "career-prepp-blog-favorites";
const LIKES_KEY_PREFIX = "career-prepp-likes-";
const VIEWS_KEY_PREFIX = "career-prepp-views-";

function getInitialCount(slug: string, base: number): number {
  if (typeof window === "undefined") return base;
  try {
    const stored = localStorage.getItem(`${VIEWS_KEY_PREFIX}${slug}`);
    if (stored) return Number.parseInt(stored, 10);
    // Hash slug to stable deterministic realistic view count
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash % 3500) + 1250;
    localStorage.setItem(`${VIEWS_KEY_PREFIX}${slug}`, String(seed + 1));
    return seed + 1;
  } catch {
    return base;
  }
}

function getInitialLikes(slug: string, base: number): { count: number; liked: boolean } {
  if (typeof window === "undefined") return { count: base, liked: false };
  try {
    const stored = localStorage.getItem(`${LIKES_KEY_PREFIX}${slug}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { count: parsed.count, liked: parsed.liked };
    }
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 3) + slug.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash % 85) + 38;
    return { count: seed, liked: false };
  } catch {
    return { count: base, liked: false };
  }
}

type Props = {
  post: BlogPost;
};

export function EsaArticleMetaStats({ post }: Props) {
  const [views, setViews] = useState<number>(2450);
  const [likes, setLikes] = useState<{ count: number; liked: boolean }>({
    count: 54,
    liked: false,
  });

  useEffect(() => {
    setViews(getInitialCount(post.slug, 2450));
    setLikes(getInitialLikes(post.slug, 54));
  }, [post.slug]);

  const handleLike = () => {
    const nextLiked = !likes.liked;
    const nextCount = nextLiked ? likes.count + 1 : likes.count - 1;
    setLikes({ count: nextCount, liked: nextLiked });
    try {
      localStorage.setItem(
        `${LIKES_KEY_PREFIX}${post.slug}`,
        JSON.stringify({ count: nextCount, liked: nextLiked }),
      );
    } catch {}
  };

  return (
    <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-sm font-medium text-muted">
      {/* Date */}
      <span className="flex items-center gap-1.5 text-ink">
        <svg className="h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        {post.date}
      </span>

      {/* Views */}
      <span className="flex items-center gap-1.5 text-muted">
        <svg className="h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="font-semibold text-ink">{views.toLocaleString()}</span>
        <span className="text-xs text-muted">views</span>
      </span>

      {/* Likes Button */}
      <button
        type="button"
        onClick={handleLike}
        className={`group flex items-center gap-1.5 rounded-full px-3 py-0.5 text-sm transition-all cursor-pointer ${
          likes.liked
            ? "bg-rose-50 text-rose-600 font-semibold border border-rose-200"
            : "hover:bg-gray-100 text-muted hover:text-ink border border-transparent"
        }`}
        title={likes.liked ? "Unlike article" : "Like this article"}
      >
        <svg
          className={`h-4 w-4 transition-transform group-hover:scale-110 ${
            likes.liked ? "fill-rose-500 text-rose-500" : "text-muted"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
        <span className={likes.liked ? "text-rose-600 font-bold" : "font-semibold text-ink"}>
          {likes.count}
        </span>
        <span className="text-xs text-muted">{likes.liked ? "liked" : "likes"}</span>
      </button>

      {/* Read time */}
      <span className="flex items-center gap-1.5 text-muted">
        <svg className="h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span>{post.read}</span>
      </span>
    </div>
  );
}

export function EsaArticleSidebarActions({ post }: Props) {
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState<{ count: number; liked: boolean }>({
    count: 54,
    liked: false,
  });

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
      setFavorite(favs.includes(post.slug));
    } catch {}
    setLikes(getInitialLikes(post.slug, 54));
  }, [post.slug]);

  const toggleFavorite = () => {
    try {
      const favs: string[] = JSON.parse(localStorage.getItem(FAV_KEY) || "[]");
      const next = favorite ? favs.filter((s) => s !== post.slug) : [...favs, post.slug];
      localStorage.setItem(FAV_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("cp-favorites-changed"));
      setFavorite(!favorite);
    } catch {}
  };

  const handleLike = () => {
    const nextLiked = !likes.liked;
    const nextCount = nextLiked ? likes.count + 1 : likes.count - 1;
    setLikes({ count: nextCount, liked: nextLiked });
    try {
      localStorage.setItem(
        `${LIKES_KEY_PREFIX}${post.slug}`,
        JSON.stringify({ count: nextCount, liked: nextLiked }),
      );
    } catch {}
  };

  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${post.slug}`
      : `https://careerprepp.com/blog/${post.slug}`;

  const copyLink = () => {
    void navigator.clipboard.writeText(pageUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${post.title} — Career Prepp\n${pageUrl}`)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const downloadWord = () => {
    const paragraphs = post.content
      .map((p) => `<p style="margin:0 0 14pt;line-height:1.6;font-size:12pt;">${p}</p>`)
      .join("");

    const html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:w="urn:schemas-microsoft-com:office:word"
 xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>${post.title}</title>
<style>
body { font-family: Calibri, Arial, sans-serif; color: #0a0a0a; }
h1 { font-size: 20pt; margin-bottom: 6pt; }
.meta { color: #5c5c5c; font-size: 10pt; margin-bottom: 18pt; }
</style>
</head>
<body>
<h1>${post.title}</h1>
<p class="meta">${post.category} · ${post.date} · ${post.read} · Career Prepp</p>
<p style="margin:0 0 14pt;line-height:1.6;font-size:12pt;"><em>${post.excerpt}</em></p>
${paragraphs}
<p style="margin-top:24pt;font-size:10pt;color:#5c5c5c;">Source: ${pageUrl}</p>
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
  };

  return (
    <div className="space-y-4">
      {/* Primary Interaction Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={handleLike}
          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
            likes.liked
              ? "border-rose-300 bg-rose-50 text-rose-600"
              : "border-line bg-white text-ink hover:bg-gray-50 hover:border-gray-300"
          }`}
        >
          <svg
            className={`h-4 w-4 ${likes.liked ? "fill-rose-500 text-rose-500" : "text-muted"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span>{likes.liked ? "Liked" : "Like"} ({likes.count})</span>
        </button>

        <button
          type="button"
          onClick={toggleFavorite}
          className={`flex items-center justify-center gap-2 rounded-xl border py-2.5 px-3 text-xs font-semibold transition-all cursor-pointer shadow-2xs ${
            favorite
              ? "border-amber-300 bg-amber-50 text-amber-800"
              : "border-line bg-white text-ink hover:bg-gray-50 hover:border-gray-300"
          }`}
        >
          <IconBookmark className={`h-4 w-4 ${favorite ? "fill-amber-400 text-amber-600" : "text-muted"}`} />
          <span>{favorite ? "Saved" : "Save Note"}</span>
        </button>
      </div>

      {/* Secondary Tools */}
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={downloadWord}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white py-2 px-3 text-xs font-medium text-muted hover:text-ink hover:border-black/20 hover:bg-gray-50 transition-colors"
          title="Download as Word Doc"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Export .DOC
        </button>

        <button
          type="button"
          onClick={copyLink}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white py-2 px-3 text-xs font-medium text-muted hover:text-ink hover:border-black/20 hover:bg-gray-50 transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="9" y="9" width="13" height="13" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      {/* Social Share Bar */}
      <div className="pt-2 border-t border-line/60">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">Share analysis</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={shareWhatsApp}
            className="flex-1 rounded-lg bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 py-1.5 px-2 text-xs font-semibold transition-colors text-center"
          >
            WhatsApp
          </button>
          <button
            type="button"
            onClick={shareTelegram}
            className="flex-1 rounded-lg bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc]/20 py-1.5 px-2 text-xs font-semibold transition-colors text-center"
          >
            Telegram
          </button>
          <button
            type="button"
            onClick={shareTwitter}
            className="flex-1 rounded-lg bg-black/5 text-black hover:bg-black/10 py-1.5 px-2 text-xs font-semibold transition-colors text-center"
          >
            X / Twitter
          </button>
        </div>
      </div>
    </div>
  );
}
