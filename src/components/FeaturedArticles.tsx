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
  if (!lead) return null;

  const editionDate = lead.date;

  return (
    <div className="articles-featured">
      <header className="articles-masthead">
        <div className="articles-masthead-left">
          <span className="articles-masthead-rule" aria-hidden />
          <div>
            <p className="articles-masthead-label">Today&apos;s edition</p>
            <p className="articles-masthead-date">{editionDate}</p>
          </div>
        </div>
        <div className="articles-masthead-right">
          <p className="articles-masthead-tagline">Free · Knowledge-first · Updated weekly</p>
          <Link
            href={`/blog/${lead.slug}`}
            className="articles-masthead-cta"
          >
            Read lead story
            <IconArrow className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <div className="articles-intro">
        <h2 className="articles-intro-title">Latest articles</h2>
        <p className="articles-intro-text">
          Clear notes on geography, economy, polity, and the day&apos;s issues —
          open any headline below.
        </p>
      </div>

      <div className="news-grid news-grid-premium">
        <Link href={`/blog/${lead.slug}`} className="news-lead news-lead-premium group">
          <div className="news-lead-media news-lead-media-premium">
            <Image
              src={lead.image}
              alt={lead.alt}
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

        <div className="news-side news-side-premium">
          {second && (
            <Link href={`/blog/${second.slug}`} className="news-side-feature news-side-feature-premium group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={second.image}
                  alt={second.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="news-side-feature-veil" aria-hidden />
              </div>
              <div className="news-side-feature-body">
                <p className="news-side-feature-meta">
                  {second.stage === "Both" ? "Prelims · Mains" : second.stage}
                </p>
                <h3 className="news-side-feature-title">{second.title}</h3>
              </div>
            </Link>
          )}

          <ul className="news-side-list news-side-list-premium">
            {side.map((post, i) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="news-side-item news-side-item-premium group">
                  <span className="news-side-index">{String(i + 1).padStart(2, "0")}</span>
                  <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden sm:h-16 sm:w-16">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="64px"
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
        </div>
      </div>
    </div>
  );
}
