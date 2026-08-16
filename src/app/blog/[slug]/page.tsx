import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogActions from "@/components/BlogActions";
import RelatedArticles, {
  ArticleRelatedRail,
  subjectHubHref,
} from "@/components/RelatedArticles";
import {
  getAllArticles,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/articles";
import { IconArrow } from "@/components/Icons";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllArticles().then((posts) =>
    posts.map((post) => ({ slug: post.slug })),
  );
  return slugs;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Article | Career Prepp" };
  return {
    title: `${post.title} | Career Prepp`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [lead, ...rest] = post.content;
  const hasRichHtml = Boolean(post.htmlContent?.trim());

  const related = await getRelatedPosts(post, 4);

  const allArticles = await getAllArticles();
  const index = allArticles.findIndex((p) => p.slug === post.slug);
  const prev = index > 0 ? allArticles[index - 1] : null;
  const next =
    index >= 0 && index < allArticles.length - 1
      ? allArticles[index + 1]
      : null;

  const rubric = [
    post.subjects[0] ?? post.category,
    post.stage === "Both" ? "Prelims · Mains" : post.stage,
  ].join(" · ");

  return (
    <>
      <Header forceSolid />

      <main className="flex-1 bg-white">
        <article className="article-page">
          <div className="article-edition-bar">
            <div className="article-shell article-shell-wide article-edition-inner">
              <Link href="/" className="article-edition-back">
                <span aria-hidden>←</span> Latest articles
              </Link>
              <p className="article-edition-brand">Career Prepp</p>
            </div>
          </div>

          <div className="article-shell article-shell-wide article-page-layout">
            <div className="article-page-grid">
              <div className="article-page-main">
                <header className="article-page-header">
                  <p className="article-page-rubric">{rubric}</p>
                  <h1 className="article-page-title">{post.title}</h1>
                  <p className="article-page-deck">{post.excerpt}</p>

                  <div className="article-page-meta-row">
                    <div className="article-page-meta">
                      <span>{post.date}</span>
                      <span className="article-page-meta-dot" aria-hidden />
                      <span>{post.read}</span>
                    </div>
                    <div className="article-page-tags">
                      {post.subjects.map((subject) => (
                        <Link
                          key={subject}
                          href={subjectHubHref(subject)}
                          className="article-page-tag"
                        >
                          {subject}
                        </Link>
                      ))}
                    </div>
                  </div>
                </header>

                <figure className="article-page-figure">
                  <div className="article-page-figure-media">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      priority
                      quality={92}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 920px"
                      unoptimized={post.image.startsWith("/uploads/")}
                    />
                  </div>
                  {post.alt && (
                    <figcaption className="article-page-caption">
                      {post.alt}
                    </figcaption>
                  )}
                </figure>

                <div className="article-page-body">
                  {hasRichHtml ? (
                    <div
                      className="article-page-html"
                      dangerouslySetInnerHTML={{ __html: post.htmlContent! }}
                    />
                  ) : (
                    <>
                      <p className="article-page-lead">{lead}</p>
                      <div className="article-page-prose">
                        {rest.map((paragraph, i) => (
                          <p key={`${i}-${paragraph.slice(0, 24)}`}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <footer className="article-page-footer">
                  <div className="article-page-footer-box">
                    <p className="article-page-footer-label">Share & save</p>
                    <BlogActions post={post} />
                  </div>

                  {post.subjects[0] && (
                    <Link
                      href={subjectHubHref(post.subjects[0])}
                      className="article-page-subject-link"
                    >
                      More on {post.subjects[0]}
                      <IconArrow className="h-4 w-4" />
                    </Link>
                  )}
                </footer>
              </div>

              {related.length > 0 && (
                <aside className="article-page-aside" aria-label="Related">
                  <ArticleRelatedRail posts={related} />
                  {post.subjects[0] && (
                    <div className="article-page-aside-box">
                      <p className="article-related-rail-label">Subject</p>
                      <p className="article-page-aside-text">
                        Explore more {post.subjects[0]} coverage for Prelims and
                        Mains.
                      </p>
                      <Link
                        href={subjectHubHref(post.subjects[0])}
                        className="article-page-aside-link"
                      >
                        {post.subjects[0]} hub
                        <IconArrow className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </aside>
              )}
            </div>
          </div>

          <nav className="article-page-nav" aria-label="Article navigation">
            <div className="article-shell article-shell-wide article-page-nav-grid">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="article-adjacent">
                  <span>Previous</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <div className="article-adjacent is-empty">
                  <span>Previous</span>
                  <strong className="!font-medium !text-muted">
                    First article
                  </strong>
                </div>
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="article-adjacent is-next"
                >
                  <span>Next</span>
                  <strong>{next.title}</strong>
                </Link>
              ) : (
                <div className="article-adjacent is-next is-empty">
                  <span>Next</span>
                  <strong className="!font-medium !text-muted">
                    Latest article
                  </strong>
                </div>
              )}
            </div>
          </nav>
        </article>

        {related.length > 0 && (
          <section className="article-related-wrap">
            <div className="article-shell article-shell-wide">
              <RelatedArticles posts={related} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
