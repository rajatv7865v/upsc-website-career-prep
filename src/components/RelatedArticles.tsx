import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { IconArrow } from "@/components/Icons";

const SUBJECT_HUBS: Partial<Record<string, string>> = {
  Geography: "/geography",
  Economy: "/economy",
  Polity: "/polity",
  IR: "/ir",
  Environment: "/environment",
};

type Props = {
  posts: BlogPost[];
  title?: string;
  compact?: boolean;
};

export function ArticleRelatedRail({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <aside className="article-related-rail" aria-label="Related articles">
      <p className="article-related-rail-label">Related</p>
      <ul className="article-related-rail-list">
        {posts.map((item) => (
          <li key={item.slug}>
            <Link href={`/blog/${item.slug}`} className="article-related-rail-item group">
              <div className="article-related-rail-thumb">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="72px"
                />
              </div>
              <div className="min-w-0">
                <p className="article-related-rail-meta">
                  {item.subjects[0] ?? item.category}
                </p>
                <h3 className="article-related-rail-title">{item.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function RelatedArticles({
  posts,
  title = "Related articles",
  compact = false,
}: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="article-related-section" aria-label={title}>
      <div className="article-related-head">
        <div>
          <p className="section-label">Keep reading</p>
          <h2 className="article-related-title">{title}</h2>
        </div>
        <Link href="/" className="article-related-all">
          All articles
          <IconArrow className="h-4 w-4" />
        </Link>
      </div>

      <div className={`article-related-grid ${compact ? "is-compact" : ""}`}>
        {posts.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className="article-related-card group"
          >
            <div className="article-related-card-media">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="article-related-card-veil" aria-hidden />
              <span className="article-related-card-badge">
                {item.subjects[0] ?? item.category}
              </span>
            </div>
            <div className="article-related-card-body">
              <p className="article-related-card-meta">
                {item.date} · {item.read}
              </p>
              <h3 className="article-related-card-heading">{item.title}</h3>
              <p className="article-related-card-excerpt">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function subjectHubHref(subject: string) {
  return SUBJECT_HUBS[subject] ?? "/current-affairs";
}
