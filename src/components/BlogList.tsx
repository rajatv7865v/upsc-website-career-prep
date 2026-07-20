"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { blogPosts } from "@/data/blog";
import BlogActions, { useFavoriteSlugs } from "@/components/BlogActions";
import { IconArrow } from "@/components/Icons";

const preferredOrder = [
  "Current Affairs",
  "Geography",
  "Mains",
  "Strategy",
  "Prelims",
  "Optional",
  "Interview",
];

const categories = [
  "All",
  "Favourites",
  ...preferredOrder.filter((c) =>
    blogPosts.some((p) => p.category === c),
  ),
  ...Array.from(new Set(blogPosts.map((p) => p.category))).filter(
    (c) => !preferredOrder.includes(c),
  ),
];

export default function BlogList() {
  const [filter, setFilter] = useState("All");
  const favorites = useFavoriteSlugs();

  const posts = useMemo(() => {
    if (filter === "Favourites") {
      return blogPosts.filter((p) => favorites.includes(p.slug));
    }
    if (filter === "All") return blogPosts;
    return blogPosts.filter((p) => p.category === filter);
  }, [filter, favorites]);

  return (
    <div>
      <div className="blog-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`blog-filter-chip ${filter === cat ? "is-active" : ""}`}
          >
            {cat}
            {cat === "Favourites" && favorites.length > 0
              ? ` (${favorites.length})`
              : ""}
          </button>
        ))}
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 border border-line bg-white p-10 text-center">
          <p className="text-lg font-semibold text-black">No saved articles yet</p>
          <p className="mt-2 text-sm text-muted">
            Open any article and tap Favourite to save it here.
          </p>
          <button
            type="button"
            onClick={() => setFilter("All")}
            className="mt-6 inline-flex bg-blue px-5 py-3 text-sm font-medium text-white hover:bg-blue-hover"
          >
            Browse all articles
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card group flex flex-col">
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
                <span className="blog-card-category">{post.category}</span>
              </Link>

              <div className="blog-card-body flex flex-1 flex-col">
                <p className="text-xs text-muted">
                  {post.date} · {post.read}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="blog-card-title mt-2">{post.title}</h2>
                </Link>
                <p className="blog-card-text">{post.excerpt}</p>

                <div className="mt-auto space-y-4 pt-4">
                  <BlogActions post={post} compact />
                  <Link href={`/blog/${post.slug}`} className="blog-card-link !mt-0">
                    Read article
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
