import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogActions from "@/components/BlogActions";
import AnimatedIcon from "@/components/AnimatedIcon";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { IconArrow, IconBook, IconCheck } from "@/components/Icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article | Career Prepp" };
  return {
    title: `${post.title} | Career Prepp Blog`,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const [lead, ...rest] = post.content;
  const takeaways = rest.slice(0, 3).map((p) => {
    const sentence = p.split(". ")[0];
    return sentence.endsWith(".") ? sentence : `${sentence}.`;
  });

  const related = [
    ...blogPosts.filter(
      (p) => p.slug !== post.slug && p.category === post.category,
    ),
    ...blogPosts.filter(
      (p) => p.slug !== post.slug && p.category !== post.category,
    ),
  ].slice(0, 3);

  const index = blogPosts.findIndex((p) => p.slug === post.slug);
  const prev = index > 0 ? blogPosts[index - 1] : null;
  const next =
    index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <>
      <Header />

      <main className="flex-1">
        <article>
          {/* Hero */}
          <header className="article-hero relative overflow-hidden bg-black">
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={post.alt}
                fill
                priority
                quality={92}
                className="article-hero-image object-cover"
                sizes="100vw"
              />
              <div className="article-hero-veil" />
              <div className="article-hero-grain" aria-hidden />
            </div>

            <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24">
              <div className="max-w-3xl">
                <Link href="/blog" className="article-back">
                  <span aria-hidden>←</span> Back to Blog
                </Link>

                <div className="article-meta-row mt-8">
                  <span className="article-badge">{post.category}</span>
                  <span className="article-meta-dot" aria-hidden />
                  <span>{post.date}</span>
                  <span className="article-meta-dot" aria-hidden />
                  <span>{post.read}</span>
                </div>

                <h1 className="article-title">{post.title}</h1>
                <p className="article-deck">{post.excerpt}</p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="article-byline">
                    <span className="article-byline-mark" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Career Prepp
                      </p>
                      <p className="text-xs text-white/60">
                        Free Current Affairs for Civil Services
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <BlogActions post={post} />
                </div>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="article-body-wrap bg-white">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
              {/* Sticky rail */}
              <aside className="hidden lg:col-span-3 lg:block">
                <div className="article-rail">
                  <p className="article-rail-label">In this guide</p>
                  <ul className="article-rail-list">
                    {takeaways.map((item, i) => (
                      <li key={item}>
                        <span>0{i + 1}</span>
                        {item.length > 72 ? `${item.slice(0, 72)}…` : item}
                      </li>
                    ))}
                  </ul>

                  <div className="article-rail-actions">
                    <p className="article-rail-label">Actions</p>
                    <BlogActions post={post} compact />
                  </div>

                  <Link href="/#current-affairs" className="article-rail-cta">
                    Current Affairs tracks
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </div>
              </aside>

              {/* Content */}
              <div className="lg:col-span-6">
                <div className="article-featured">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="article-featured-caption">
                    <AnimatedIcon
                      icon={IconBook}
                      variant="float"
                      tone="ghost"
                      size="sm"
                    />
                    <span>{post.alt}</span>
                  </div>
                </div>

                <p className="article-lead">{lead}</p>

                <div className="article-prose">
                  {rest.map((paragraph, i) => (
                    <p key={`${i}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
                  ))}
                </div>

                <div className="article-takeaways">
                  <div className="article-takeaways-head">
                    <span className="article-takeaways-rule" aria-hidden />
                    <h2>Key takeaways</h2>
                  </div>
                  <ul>
                    {takeaways.map((item) => (
                      <li key={item}>
                        <IconCheck className="ai-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="article-share-panel">
                  <div>
                    <p className="text-sm font-semibold text-black">
                      Keep this guide handy
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      Favourite it, download the Word file, or share with your
                      study group.
                    </p>
                  </div>
                  <BlogActions post={post} />
                </div>
              </div>

              {/* End note */}
              <div className="lg:col-span-3">
                <div className="article-note">
                  <p className="article-rail-label">From Career Prepp</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    Free Current Affairs for Geography and Mains — maps,
                    environment, and answer-ready analysis. No courses to buy.
                  </p>
                  <Link href="/about" className="cp-card-link !mt-5">
                    About us
                    <IconArrow className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#current-affairs"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-blue px-4 py-3 text-sm font-medium text-white hover:bg-blue-hover"
                  >
                    Explore Current Affairs
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / next */}
          <nav className="border-y border-line bg-surface">
            <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="article-adjacent">
                  <span>Previous</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <div className="article-adjacent is-empty" />
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
                <div className="article-adjacent is-empty" />
              )}
            </div>
          </nav>
        </article>

        {/* Related */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">Continue reading</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  More guides for serious aspirants
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue"
              >
                View all articles
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="blog-card group"
                >
                  <div className="blog-card-media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="blog-card-image object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="blog-card-veil" aria-hidden />
                    <span className="blog-card-category">{item.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <p className="text-xs text-muted">
                      {item.date} · {item.read}
                    </p>
                    <h3 className="blog-card-title mt-2">{item.title}</h3>
                    <p className="blog-card-text line-clamp-2">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
