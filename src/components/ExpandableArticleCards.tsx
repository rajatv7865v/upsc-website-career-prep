import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { IconArrow } from "@/components/Icons";

type Props = {
  posts: BlogPost[];
};

/** Card grid for remaining homepage articles. */
export default function ExpandableArticleCards({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <div className="articles-more">
      <header className="articles-more-head">
        <div>
          <p className="articles-more-label">From the library</p>
          <h3 className="articles-more-title">More to read</h3>
        </div>
        <p className="articles-more-count">{posts.length} articles</p>
      </header>

      <div className="articles-more-grid">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card article-more-card group">
            <Link href={`/blog/${post.slug}`} className="blog-card-media block">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                quality={88}
                className="blog-card-image object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="blog-card-veil" aria-hidden />
              <span className="blog-card-category">
                {post.subjects[0] ?? post.category}
              </span>
            </Link>

            <div className="blog-card-body">
              <p className="article-more-meta">
                {post.stage === "Both" ? "Prelims · Mains" : post.stage}
                <span aria-hidden> · </span>
                {post.date} · {post.read}
              </p>

              <Link href={`/blog/${post.slug}`}>
                <h3 className="blog-card-title">{post.title}</h3>
              </Link>

              <p className="blog-card-text">{post.excerpt}</p>

              <div className="blog-card-footer">
                <span className="blog-card-meta">{post.date}</span>
                <span className="blog-card-link">
                  Read article
                  <IconArrow className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
