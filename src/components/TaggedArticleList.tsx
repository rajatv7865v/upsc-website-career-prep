"use client";

import { useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  type BlogPost,
  type SubjectTag,
} from "@/data/blog";
import { filterPosts } from "@/lib/article-filters";
import BlogActions, { useFavoriteSlugs } from "@/components/BlogActions";
import { IconArrow } from "@/components/Icons";

const CA_SUBJECTS = [
  "All",
  "Geography",
  "Environment",
  "Science & Tech",
  "IR",
  "History",
] as const;

/** Top-level subject hubs (also appear under Current Affairs when tagged). */
const SUBJECT_HUBS: Record<string, string> = {
  Geography: "/geography",
  Environment: "/environment",
  "Science & Tech": "/science-tech",
  IR: "/ir",
};

type Props = {
  posts: BlogPost[];
  /** Lock list to one subject (Geography / Environment hubs). */
  lockedSubject?: SubjectTag | string;
  /** Show subject filter row (Current Affairs hub). */
  showSubjectFilter?: boolean;
  emptyHint?: string;
};

export default function TaggedArticleList({
  posts,
  lockedSubject,
  showSubjectFilter = false,
  emptyHint = "No articles match these filters yet. Check back as new notes are tagged.",
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const favorites = useFavoriteSlugs();

  const stageFromUrl = searchParams.get("stage");
  const subjectFromUrl = searchParams.get("subject");

  const stage: "All" | "Prelims" | "Mains" =
    stageFromUrl === "Prelims" || stageFromUrl === "Mains"
      ? stageFromUrl
      : "All";
  const activeSubject = lockedSubject
    ? String(lockedSubject)
    : subjectFromUrl && subjectFromUrl !== "All"
      ? subjectFromUrl
      : "All";

  const [showFavourites, setShowFavourites] = useState(false);

  const syncUrl = useCallback(
    (nextSubject: string) => {
      const params = new URLSearchParams();
      if (stageFromUrl && stageFromUrl !== "All") {
        params.set("stage", stageFromUrl);
      }
      if (!lockedSubject && nextSubject !== "All") {
        params.set("subject", nextSubject);
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [lockedSubject, pathname, router, stageFromUrl],
  );

  const postsFiltered = useMemo(() => {
    let list = filterPosts(posts, {
      stage: stage === "All" ? null : stage,
      subject: activeSubject === "All" ? null : activeSubject,
    });
    if (showFavourites) {
      list = list.filter((p) => favorites.includes(p.slug));
    }
    return list;
  }, [posts, stage, activeSubject, showFavourites, favorites]);

  function onSubject(s: string) {
    setShowFavourites(false);
    syncUrl(s);
  }

  return (
    <div>
      <div className="space-y-5">
        {showSubjectFilter && !lockedSubject && (
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Topic
            </p>
            <div className="blog-filters !mt-0">
              {CA_SUBJECTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSubject(s)}
                  className={`blog-filter-chip ${!showFavourites && activeSubject === s ? "is-active" : ""}`}
                >
                  {s === "All" ? "All topics" : s}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setShowFavourites((prev) => !prev)}
                className={`blog-filter-chip ${showFavourites ? "is-active" : ""}`}
              >
                Favourites
                {favorites.length > 0 ? ` (${favorites.length})` : ""}
              </button>
            </div>
            {activeSubject !== "All" && SUBJECT_HUBS[activeSubject] && (
              <p className="mt-3 text-sm text-muted">
                Weak in {activeSubject}? Open the dedicated{" "}
                <Link
                  href={SUBJECT_HUBS[activeSubject]}
                  className="font-medium text-blue"
                >
                  {activeSubject} tab
                </Link>{" "}
                for the same tagged articles.
              </p>
            )}
          </div>
        )}

        {lockedSubject && (
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Showing articles tagged <strong className="text-ink">{lockedSubject}</strong>.
              The same notes also appear under{" "}
              <Link
                href="/current-affairs"
                className="font-medium text-blue"
              >
                Current Affairs
              </Link>.
            </p>
            <button
              type="button"
              onClick={() => setShowFavourites((prev) => !prev)}
              className={`blog-filter-chip ${showFavourites ? "is-active" : ""}`}
            >
              Favourites
              {favorites.length > 0 ? ` (${favorites.length})` : ""}
            </button>
          </div>
        )}
      </div>

      {postsFiltered.length === 0 ? (
        <div className="mt-10 border border-line bg-white p-10 text-center">
          <p className="text-lg font-semibold text-black">
            {showFavourites ? "No saved articles yet" : "No articles found"}
          </p>
          <p className="mt-2 text-sm text-muted">{emptyHint}</p>
          <button
            type="button"
            onClick={() => {
              setShowFavourites(false);
              onSubject("All");
            }}
            className="mt-6 inline-flex bg-blue px-5 py-3 text-sm font-medium text-white hover:bg-blue-hover"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {postsFiltered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card group flex flex-col">
      <Link href={`/blog/${post.slug}`} className="blog-card-media block">
        <Image
          src={post.image}
          alt={post.alt}
          fill
          quality={85}
          className="blog-card-image object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="blog-card-veil" aria-hidden />
        <span className="blog-card-category">
          {post.subjects[0] ?? post.category}
        </span>
      </Link>

      <div className="blog-card-body flex flex-1 flex-col">
        <p className="text-xs text-muted">
          {post.date} · {post.read}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {post.subjects.slice(0, 4).map((s) => {
            const hub = SUBJECT_HUBS[s];
            return hub ? (
              <Link
                key={s}
                href={hub}
                className="border border-line px-2 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase transition-colors hover:border-blue hover:text-blue"
              >
                {s}
              </Link>
            ) : (
              <span
                key={s}
                className="border border-line px-2 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase"
              >
                {s}
              </span>
            );
          })}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="blog-card-title mt-2">{post.title}</h2>
        </Link>
        <p className="blog-card-text">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue"
          >
            Read
            <IconArrow className="h-3.5 w-3.5" />
          </Link>
          <BlogActions post={post} compact />
        </div>
      </div>
    </article>
  );
}
