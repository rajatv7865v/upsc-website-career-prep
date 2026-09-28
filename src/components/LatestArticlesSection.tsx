import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { IconArrow, IconNewspaper } from "@/components/Icons";

type Props = {
  posts: BlogPost[];
};

export default function LatestArticlesSection({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  const [lead, second, ...rest] = posts;
  const sideArticles = rest.slice(0, 3);
  const editionDate = lead?.date || "Latest Edition";

  return (
    <section id="latest-articles" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Masthead Header */}
        <header className="articles-masthead mb-10">
          <div className="articles-masthead-left">
            <span className="articles-masthead-rule" aria-hidden />
            <div>
              <p className="articles-masthead-label">Today&apos;s edition</p>
              <p className="articles-masthead-date">{editionDate}</p>
            </div>
          </div>
          <div className="articles-masthead-right">
            <p className="articles-masthead-tagline hidden sm:block">
              Free · Knowledge-first · Updated weekly
            </p>
            <Link
              href="/current-affairs"
              className="articles-masthead-cta"
            >
              All latest articles
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </header>

        {/* Section Title */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-blue-tint px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue">
              <IconNewspaper className="h-3.5 w-3.5" />
              Fresh Coverage
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-2 text-base text-muted max-w-2xl">
              Clear, structured notes on recent developments, national policies, and global shifts.
            </p>
          </div>
          <Link
            href="/current-affairs"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-blue-hover transition-colors"
          >
            Explore archive
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="news-grid news-grid-premium">
          {/* Main Lead Story */}
          <Link href={`/blog/${lead.slug}`} className="news-lead news-lead-premium group">
            <div className="news-lead-media news-lead-media-premium">
              <Image
                src={lead.image}
                alt={lead.alt || lead.title}
                fill
                priority
                quality={92}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="news-lead-veil news-lead-veil-premium" aria-hidden />
              <div className="news-lead-overlay">
                <span className="news-badge news-badge-premium">
                  {lead.subjects[0] ?? lead.category}
                </span>
                <p className="news-lead-meta">
                  {lead.date} · {lead.read}
                </p>
                <h3 className="news-lead-title news-lead-title-premium">{lead.title}</h3>
              </div>
            </div>
            <div className="news-lead-body news-lead-body-premium">
              <p className="news-lead-excerpt">{lead.excerpt}</p>
              <span className="news-lead-read">
                Read full article
                <IconArrow className="h-4 w-4" />
              </span>
            </div>
          </Link>

          {/* Secondary Lead & List */}
          <div className="news-side news-side-premium">
            {second && (
              <Link href={`/blog/${second.slug}`} className="news-side-feature news-side-feature-premium group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={second.image}
                    alt={second.alt || second.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="news-side-feature-veil" aria-hidden />
                </div>
                <div className="news-side-feature-body">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue">
                      {second.subjects[0] ?? second.category}
                    </span>
                    <p className="news-side-feature-meta !mb-0">
                      {second.stage === "Both" ? "Prelims · Mains" : second.stage}
                    </p>
                  </div>
                  <h3 className="news-side-feature-title">{second.title}</h3>
                </div>
              </Link>
            )}

            {sideArticles.length > 0 && (
              <ul className="news-side-list news-side-list-premium">
                {sideArticles.map((post, i) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="news-side-item news-side-item-premium group">
                      <span className="news-side-index">{String(i + 1).padStart(2, "0")}</span>
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md sm:h-16 sm:w-16">
                        <Image
                          src={post.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 56px, 64px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="news-side-item-meta">
                          {post.subjects[0] ?? post.category} · {post.read}
                        </p>
                        <h3 className="news-side-item-title">{post.title}</h3>
                      </div>
                      <IconArrow className="news-side-item-arrow h-4 w-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
