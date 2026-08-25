import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { IconArrow, IconStar, IconBookmark } from "@/components/Icons";

type Props = {
  posts: BlogPost[];
};

export default function FavouriteArticlesSection({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      id="favourite-articles"
      className="scroll-mt-24 bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-soft/40 bg-blue-tint px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue">
              <IconStar className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
              Editor&apos;s Picks &amp; Reader Favourites
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl flex items-center gap-3">
              Favourite Articles
              <span className="text-amber-400 text-2xl" aria-hidden>
                ★
              </span>
            </h2>
            <p className="mt-2 text-base text-muted max-w-2xl">
              Essential, high-retention notes handpicked for conceptual depth and exam clarity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/current-affairs"
              className="inline-flex items-center gap-2 rounded-lg bg-blue px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-hover shadow-xs"
            >
              <IconBookmark className="h-4 w-4" />
              Browse full library
            </Link>
          </div>
        </div>

        {/* Favourites Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const isFeatured = i === 0;

            return (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-[#fbfcfd] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue/30 hover:bg-white hover:shadow-xl"
              >
                <div>
                  {/* Top Meta & Star Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 border border-amber-200/80">
                      <IconStar className="h-3 w-3 fill-amber-400 text-amber-500" />
                      {isFeatured ? "Top Pick" : "Reader Favourite"}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {post.read}
                    </span>
                  </div>

                  {/* Media Thumbnail */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative mb-5 block aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100"
                  >
                    <Image
                      src={post.image}
                      alt={post.alt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="absolute bottom-2.5 left-2.5 rounded bg-black/75 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
                      {post.subjects[0] ?? post.category}
                    </span>
                  </Link>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="block group-hover:text-blue transition-colors">
                    <h3 className="text-lg font-bold leading-snug tracking-tight text-black line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-line/80 pt-4">
                  <span className="text-xs font-medium text-muted">
                    {post.stage === "Both" ? "Prelims · Mains" : post.stage}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-blue-hover"
                  >
                    Read article
                    <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
