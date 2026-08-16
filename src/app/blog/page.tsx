import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogIndexList } from "@/components/SubjectArticlesClient";
import { IconArrow } from "@/components/Icons";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog | Career Prepp",
  description:
    "Free UPSC Current Affairs guides — Geography, Mains analysis, newspaper methods, and strategy from Career Prepp.",
};

export default async function BlogPage() {
  const posts = await getAllArticles();

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="page-hero">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2400&h=1200&q=80"
              alt="Open books for study"
              fill
              priority
              quality={80}
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label">Blog</p>
            <h1 className="page-hero-title">
              Free Current Affairs guides for Geography & Mains.
            </h1>
            <p className="page-hero-text">
              Newspaper methods, map briefs, Mains analysis, and revision
              rhythms — share, download as Word, and save favourites.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#articles"
                className="inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                Browse CA articles
                <IconArrow className="h-4 w-4" />
              </a>
              <Link
                href="/#current-affairs"
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Geography & Mains tracks
              </Link>
            </div>
          </div>
        </section>

        <section
          id="articles"
          className="scroll-mt-28 bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Suspense fallback={<p className="text-muted">Loading articles…</p>}>
              <BlogIndexList posts={posts} />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
