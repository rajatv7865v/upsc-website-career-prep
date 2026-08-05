import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { IconArrow } from "@/components/Icons";

type Props = {
  posts: BlogPost[];
};

/**
 * Newspaper-style homepage feature: 1–2 large stories + smaller corner pieces.
 */
export default function FeaturedArticles({ posts }: Props) {
  const [lead, second, ...rest] = posts;
  const side = rest.slice(0, 3);
  const trending = Array.from(
    new Set(posts.flatMap((p) => p.subjects).filter(Boolean)),
  ).slice(0, 6);

  if (!lead) return null;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Latest & trending</p>
          <h2 className="section-title">Top stories this week</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/blog/${lead.slug}`}
            className="inline-flex items-center gap-2 bg-blue px-5 py-3 text-sm font-medium text-white hover:bg-blue-hover"
          >
            Latest article
            <IconArrow className="h-4 w-4" />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border border-black px-5 py-3 text-sm font-medium text-black hover:bg-black hover:text-white"
          >
            All articles
          </Link>
        </div>
      </div>

      {trending.length > 0 && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Trending topics
          </span>
          {trending.map((topic) => (
            <Link
              key={topic}
              href={`/current-affairs?subject=${encodeURIComponent(topic)}`}
              className="border border-line px-2.5 py-1 text-xs font-medium text-ink transition-colors hover:border-blue hover:text-blue"
            >
              {topic}
            </Link>
          ))}
        </div>
      )}

      <div className="news-grid mt-10">
        <Link href={`/blog/${lead.slug}`} className="news-lead group">
          <div className="news-lead-media">
            <Image
              src={lead.image}
              alt={lead.alt}
              fill
              priority
              quality={90}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="news-lead-veil" aria-hidden />
            <span className="news-badge">{lead.stage === "Both" ? lead.category : lead.stage}</span>
          </div>
          <div className="news-lead-body">
            <p className="text-xs text-muted">
              {lead.date} · {lead.read}
            </p>
            <h3 className="news-lead-title">{lead.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {lead.excerpt}
            </p>
          </div>
        </Link>

        <div className="news-side">
          {second && (
            <Link href={`/blog/${second.slug}`} className="news-side-feature group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={second.image}
                  alt={second.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-medium tracking-wide text-blue uppercase">
                  {second.subjects[0] ?? second.category}
                </p>
                <h3 className="mt-1 text-base font-semibold leading-snug text-black group-hover:text-blue">
                  {second.title}
                </h3>
              </div>
            </Link>
          )}

          <ul className="news-side-list">
            {side.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="news-side-item group">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden sm:h-14 sm:w-14">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium tracking-wide text-muted uppercase">
                      {post.subjects[0] ?? post.category}
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold leading-snug text-black group-hover:text-blue">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
