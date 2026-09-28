import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  EsaArticleMetaStats,
  EsaArticleSidebarActions,
} from "@/components/EsaArticleInteractive";
import RelatedArticles, {
  ArticleRelatedRail,
  subjectHubHref,
} from "@/components/RelatedArticles";
import {
  getAllArticles,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/articles";
import { IconArrow, IconBook, IconGlobe, IconTarget } from "@/components/Icons";

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
    openGraph: {
      title: `${post.title} | Career Prepp`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [leadParagraph, ...restParagraphs] = post.content;
  const hasRichHtml = Boolean(post.htmlContent?.trim());

  const related = await getRelatedPosts(post, 4);

  const allArticles = await getAllArticles();
  const index = allArticles.findIndex((p) => p.slug === post.slug);
  const prev = index > 0 ? allArticles[index - 1] : null;
  const next =
    index >= 0 && index < allArticles.length - 1
      ? allArticles[index + 1]
      : null;

  const primarySubject = post.subjects[0] ?? post.category;
  const stageLabel = post.stage === "Both" ? "Prelims & Mains" : post.stage;

  return (
    <>
      <Header forceSolid />

      <main className="flex-1 bg-white mt-16 sm:mt-[4.75rem]">
        <article className="article-page pb-20">
          {/* Top Feature Hero Banner with approx 14px top margin & container framing */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-[14px]">
            <section className="esa-feature-hero relative w-full overflow-hidden rounded-2xl border border-line bg-black group shadow-xs">
              <Image
                src={post.image}
                alt={post.alt || post.title}
                fill
                priority
                quality={92}
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1280px"
                unoptimized={post.image.startsWith("/uploads/")}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 pointer-events-none"
                aria-hidden
              />

              {/* Bottom Caption Pill over Hero */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-none">
                <span className="rounded-full bg-black/70 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white/90 border border-white/15 shadow-xs">
                  {post.alt || `${primarySubject} · In-Depth Analysis`}
                </span>
                <span className="hidden sm:inline-block rounded-full bg-black/50 backdrop-blur-md px-3 py-1 text-[11px] text-white/80 border border-white/10">
                  Career Prepp Observational Archive
                </span>
              </div>
            </section>
          </div>

          {/* Article Header & Breadcrumbs Shell */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
            {/* Header Block */}
            <header className="pb-8">
              {/* Pillar & Stage Row */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="esa-pillar">
                  <IconGlobe className="h-3.5 w-3.5" />
                  {primarySubject}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-700 border border-slate-200">
                  <IconTarget className="mr-1.5 h-3 w-3 text-slate-500" />
                  {stageLabel}
                </span>
                {post.subjects.slice(1).map((sub) => (
                  <Link
                    key={sub}
                    href={subjectHubHref(sub)}
                    className="inline-flex items-center rounded-full border border-line bg-white px-2.5 py-0.5 text-xs font-medium text-muted hover:border-blue hover:text-blue transition-colors"
                  >
                    {sub}
                  </Link>
                ))}
              </div>

              {/* Main Headline */}
              <h1 className="esa-heading-main text-black">
                {post.title}
              </h1>

              {/* Meta Stats Row (Date, Views, Likes, Read time) */}
              <div className="mt-6">
                <EsaArticleMetaStats post={post} />
              </div>

              {/* ESA Breadcrumbs Trail */}
              <nav className="esa-breadcrumbs mt-6" aria-label="Breadcrumb">
                <Link href="/" className="font-medium text-muted hover:text-blue">
                  Home
                </Link>
                <span className="text-slate-300" aria-hidden>/</span>
                <Link href="/current-affairs" className="text-muted hover:text-blue">
                  Current Affairs
                </Link>
                <span className="text-slate-300" aria-hidden>/</span>
                <Link href={subjectHubHref(primarySubject)} className="text-muted hover:text-blue">
                  {primarySubject}
                </Link>
                <span className="text-slate-300" aria-hidden>/</span>
                <span className="text-ink font-medium truncate max-w-[11rem] sm:max-w-md">
                  {post.title}
                </span>
              </nav>
            </header>

            {/* ESA Abstract / Executive Summary Callout */}
            <div className="esa-abstract">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue animate-pulse" />
                Executive Summary &amp; Overview
              </div>
              <p>{post.excerpt}</p>
            </div>

            {/* Two-Column Reading Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 pt-4 items-start">
              {/* Main Content Body Column (Col 8) */}
              <div className="lg:col-span-8 min-w-0">
                {hasRichHtml ? (
                  <div
                    className="article-page-html esa-content-prose"
                    dangerouslySetInnerHTML={{ __html: post.htmlContent! }}
                  />
                ) : (
                  <div className="esa-content-prose">
                    {leadParagraph && (
                      <p className="text-lg leading-relaxed text-slate-800 font-normal">
                        {leadParagraph}
                      </p>
                    )}

                    {/* Examination Takeaways Callout Card */}
                    <div className="my-8 rounded-2xl border border-blue-tint-line bg-blue-tint/60 p-6">
                      <div className="flex items-center gap-2.5 text-blue font-bold text-sm uppercase tracking-wider mb-3">
                        <IconBook className="h-4 w-4 text-blue" />
                        UPSC Examination Relevance
                      </div>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-blue font-bold">•</span>
                          <span><strong>Prelims Focus:</strong> Institutional mandate, member countries, observer status guidelines, and strategic polar agreements.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue font-bold">•</span>
                          <span><strong>Mains Focus:</strong> GS Paper 2 (Bilateral, regional and global groupings) &amp; GS Paper 3 (Climate and energy security).</span>
                        </li>
                      </ul>
                    </div>

                    {restParagraphs.map((paragraph, i) => (
                      <p key={`${i}-${paragraph.slice(0, 20)}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Examination Tag Footer Bar */}
                <div className="mt-12 rounded-2xl border border-line bg-[#fafbfc] p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                    Subject &amp; Syllabus Classification
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.subjects.map((sub) => (
                      <Link
                        key={sub}
                        href={subjectHubHref(sub)}
                        className="rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-2xs hover:border-blue hover:text-blue transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                    <span className="rounded-lg bg-blue-tint border border-blue-tint-line px-3 py-1.5 text-xs font-semibold text-blue">
                      {stageLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Sticky Sidebar (Col 4) */}
              <aside className="lg:col-span-4 space-y-6 sticky top-24 self-start" aria-label="Article Tools and Info">
                {/* Actions & Tools Card */}
                <div className="esa-sidebar-card">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-line">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                      Article Tools
                    </h3>
                    <span className="text-xs text-muted font-medium">{post.read}</span>
                  </div>
                  <EsaArticleSidebarActions post={post} />
                </div>

                {/* Subject Classification Card */}
                <div className="esa-sidebar-card bg-gradient-to-br from-blue-tint/50 to-white">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue mb-2">
                    <IconGlobe className="h-4 w-4" />
                    Topic Archive
                  </div>
                  <h4 className="text-base font-bold text-black">
                    {primarySubject}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    Access dedicated syllabus maps, curated notes, and previous year questions on this subject.
                  </p>
                  <Link
                    href={subjectHubHref(primarySubject)}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue hover:text-blue-hover transition-colors"
                  >
                    Open {primarySubject} Hub
                    <IconArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Related In-Rail List */}
                {related.length > 0 && (
                  <div className="esa-sidebar-card">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-black mb-4 pb-3 border-b border-line">
                      In This Series
                    </h3>
                    <ArticleRelatedRail posts={related} />
                  </div>
                )}
              </aside>
            </div>
          </div>

          {/* Adjacent Story Navigation (Prev / Next) */}
          <nav className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 pt-10 border-t border-line" aria-label="Article navigation">
            <div className="grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-2xs transition-all hover:border-blue hover:shadow-md"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-blue flex items-center gap-1.5 mb-1.5">
                    ← Previous Article
                  </span>
                  <strong className="text-base font-bold text-black group-hover:text-blue transition-colors line-clamp-2">
                    {prev.title}
                  </strong>
                  <span className="mt-2 text-xs text-muted">{prev.date} · {prev.read}</span>
                </Link>
              ) : (
                <div className="flex flex-col justify-center rounded-2xl border border-dashed border-line p-5 text-muted">
                  <span className="text-xs font-medium text-muted">← Previous</span>
                  <strong className="mt-1 text-sm font-normal text-muted">You are at the earliest article</strong>
                </div>
              )}

              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 shadow-2xs transition-all hover:border-blue hover:shadow-md sm:text-right"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-blue flex items-center justify-end gap-1.5 mb-1.5">
                    Next Article →
                  </span>
                  <strong className="text-base font-bold text-black group-hover:text-blue transition-colors line-clamp-2">
                    {next.title}
                  </strong>
                  <span className="mt-2 text-xs text-muted">{next.date} · {next.read}</span>
                </Link>
              ) : (
                <div className="flex flex-col justify-center rounded-2xl border border-dashed border-line p-5 text-muted sm:text-right">
                  <span className="text-xs font-medium text-muted">Next →</span>
                  <strong className="mt-1 text-sm font-normal text-muted">You are at the latest article</strong>
                </div>
              )}
            </div>
          </nav>
        </article>

        {/* More in this topic Section (ESA-style card carousel / grid) */}
        {related.length > 0 && (
          <section className="border-t border-line bg-[#f8fafc] py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <RelatedArticles posts={related} title={`More in ${primarySubject}`} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
