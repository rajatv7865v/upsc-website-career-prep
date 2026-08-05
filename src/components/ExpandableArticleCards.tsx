"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/data/blog";
import { IconArrow } from "@/components/Icons";

type Props = {
  posts: BlogPost[];
};

/** Accordion-style CA cards — highlighted heading expands to preview + full article link. */
export default function ExpandableArticleCards({ posts }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(posts[0]?.slug ?? null);

  return (
    <div className="ca-expand-list">
      {posts.map((post) => {
        const open = openSlug === post.slug;
        return (
          <article
            key={post.slug}
            className={`ca-expand-card ${open ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="ca-expand-trigger"
              aria-expanded={open}
              onClick={() => setOpenSlug(open ? null : post.slug)}
            >
              <span className="ca-expand-meta">
                {post.stage === "Both" ? "Prelims · Mains" : post.stage}
                {post.subjects[0] ? ` · ${post.subjects[0]}` : ""}
              </span>
              <span className="ca-expand-heading">{post.title}</span>
              <span className="ca-expand-chevron" aria-hidden>
                {open ? "−" : "+"}
              </span>
            </button>

            <div
              className="ca-expand-panel"
              hidden={!open}
            >
              <div className="ca-expand-panel-inner">
                <div className="relative aspect-[16/9] w-full max-w-sm shrink-0 overflow-hidden sm:aspect-[4/3] sm:w-44">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-relaxed text-white/70">
                    {post.excerpt}
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    {post.date} · {post.read}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-soft"
                  >
                    Read full article
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
