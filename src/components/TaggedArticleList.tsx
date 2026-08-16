"use client";

import { useCallback, useMemo, useState, useEffect } from "react";
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
  "Economy",
  "Polity",
  "IR",
  "Environment",
  "Science & Tech",
  "History",
] as const;

/** Top-level subject hubs (also appear under Current Affairs when tagged). */
const SUBJECT_HUBS: Record<string, string> = {
  Geography: "/geography",
  Economy: "/economy",
  Polity: "/polity",
  IR: "/ir",
  Environment: "/environment",
};

type Props = {
  posts: BlogPost[];
  /** Lock list to one subject (Geography / Economy / Polity hubs). */
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

  const initialStage =
    stageFromUrl === "Prelims" || stageFromUrl === "Mains"
      ? stageFromUrl
      : "All";
  const initialSubject = lockedSubject
    ? String(lockedSubject)
    : subjectFromUrl && subjectFromUrl !== "All"
      ? subjectFromUrl
      : "All";

  const [stage, setStage] = useState<"All" | "Prelims" | "Mains">(initialStage);
  const [subjectFilter, setSubjectFilter] = useState(initialSubject);
  const [showFavourites, setShowFavourites] = useState(false);

  // Keep state in sync when nav links change ?stage= / ?subject=
  useEffect(() => {
    setStage(initialStage);
    if (!lockedSubject) setSubjectFilter(initialSubject);
  }, [initialStage, initialSubject, lockedSubject]);

  const syncUrl = useCallback(
    (nextStage: string, nextSubject: string) => {
      const params = new URLSearchParams();
      if (nextStage !== "All") params.set("stage", nextStage);
      if (!lockedSubject && nextSubject !== "All") {
        params.set("subject", nextSubject);
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [lockedSubject, pathname, router],
  );

  const activeSubject = lockedSubject
    ? String(lockedSubject)
    : subjectFilter;

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

  function onStage(s: "All" | "Prelims" | "Mains") {
    setShowFavourites(false);
    setStage(s);
    syncUrl(s, subjectFilter);
  }

  function onSubject(s: string) {
    setShowFavourites(false);
    setSubjectFilter(s);
    syncUrl(stage, s);
  }

  return (
    <div>
      <div className="space-y-5">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
            Exam stage
          </p>
          <div className="blog-filters !mt-0">
            {(["All", "Prelims", "Mains"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onStage(s)}
                className={`blog-filter-chip ${!showFavourites && stage === s ? "is-active" : ""}`}
              >
                {s === "All" ? "All stages" : s}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowFavourites(true)}
              className={`blog-filter-chip ${showFavourites ? "is-active" : ""}`}
            >
              Favourites
              {favorites.length > 0 ? ` (${favorites.length})` : ""}
            </button>
          </div>
        </div>

        {showSubjectFilter && !lockedSubject && (
          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
              Subject
            </p>
            <div className="blog-filters !mt-0">
              {CA_SUBJECTS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSubject(s)}
                  className={`blog-filter-chip ${!showFavourites && subjectFilter === s ? "is-active" : ""}`}
                >
                  {s === "All" ? "All subjects" : s}
                </button>
              ))}
            </div>
            {subjectFilter !== "All" && SUBJECT_HUBS[subjectFilter] && (
              <p className="mt-3 text-sm text-muted">
                Weak in {subjectFilter}? Open the dedicated{" "}
                <Link
                  href={`${SUBJECT_HUBS[subjectFilter]}${stage !== "All" ? `?stage=${stage}` : ""}`}
                  className="font-medium text-blue"
                >
                  {subjectFilter} tab
                </Link>{" "}
                for the same tagged articles.
              </p>
            )}
          </div>
        )}

        {lockedSubject && (
          <p className="text-sm text-muted">
            Showing articles tagged <strong className="text-ink">{lockedSubject}</strong>.
            The same notes also appear under{" "}
            <Link
              href={`/current-affairs${stage !== "All" ? `?stage=${stage}` : ""}`}
              className="font-medium text-blue"
            >
              Current Affairs
            </Link>{" "}
            when you filter by stage.
          </p>
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
              onStage("All");
              if (!lockedSubject) onSubject("All");
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
          {post.stage === "Both" ? post.category : post.stage}
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
