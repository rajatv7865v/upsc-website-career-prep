import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { IconArrow, IconFlame, IconTrending } from "@/components/Icons";

type Props = {
  posts: BlogPost[];
};

export default function TrendingArticlesSection({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      id="trending-articles"
      className="scroll-mt-24 border-y border-line bg-gradient-to-b from-[#fafbfc] to-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
              <IconFlame className="h-3.5 w-3.5 text-amber-600" />
              High Yield & Popular
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl flex items-center gap-3">
              Trending Articles
              <span className="inline-block animate-pulse text-amber-500 text-2xl" aria-hidden>
                🔥
              </span>
            </h2>
            <p className="mt-2 text-base text-muted max-w-2xl">
              The most discussed, high-yield articles and critical updates drawing deep reader engagement this week.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/current-affairs"
              className="inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm font-medium text-black shadow-xs transition-colors hover:border-black hover:bg-black hover:text-white"
            >
              <IconTrending className="h-4 w-4" />
              All trending topics
            </Link>
          </div>
        </div>

        {/* Trending Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            const rank = index + 1;
            const rankLabel = `#0${rank} Trending`;

            return (
              <article
                key={post.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/5"
              >
                {/* Card Media */}
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 block">
                  <Image
                    src={post.image}
                    alt={post.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                    aria-hidden
                  />

                  {/* Floating Rank Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md border border-amber-400/30 shadow-xs">
                    <IconFlame className="h-3.5 w-3.5 text-amber-400" />
                    <span>{rankLabel}</span>
                  </div>

                  {/* Stage / Subject Tag */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white/90">
                    <span className="rounded-md bg-white/20 px-2.5 py-0.5 font-medium backdrop-blur-md">
                      {post.subjects[0] ?? post.category}
                    </span>
                    <span className="font-medium text-white/80">
                      {post.stage === "Both" ? "Prelims + Mains" : post.stage}
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted mb-2.5">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.read}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="group-hover:text-blue transition-colors">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-black line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Card Action */}
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      High Interest
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-all group-hover:translate-x-0.5 hover:text-blue-hover"
                    >
                      Read note
                      <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
