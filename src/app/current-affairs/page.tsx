import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubjectArticlesClient from "@/components/SubjectArticlesClient";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Current Affairs | Career Prepp",
  description:
    "Comprehensive current affairs notes — filter by topic. Notes also appear under Geography, Environment, Science & Tech, and IR.",
};

export default async function CurrentAffairsPage() {
  const posts = await getAllArticles();

  return (
    <>
      <Header forceSolid />
      <main className="flex-1 pt-16 sm:pt-[4.75rem]">
        <section className="border-b border-line bg-black py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="section-label !text-blue-soft">Current Affairs</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              One hub. Organised by topic.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/65">
              Daily readers stay here. If a subject is weak, open Geography,
              Environment, Science &amp; Tech, or IR — the same tagged article
              appears in both places.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link
                href="/geography"
                className="border border-white/25 px-3 py-1.5 text-white/80 hover:border-white hover:text-white"
              >
                Geography
              </Link>
              <Link
                href="/environment"
                className="border border-white/25 px-3 py-1.5 text-white/80 hover:border-white hover:text-white"
              >
                Environment
              </Link>
              <Link
                href="/science-tech"
                className="border border-white/25 px-3 py-1.5 text-white/80 hover:border-white hover:text-white"
              >
                Science &amp; Tech
              </Link>
              <Link
                href="/ir"
                className="border border-white/25 px-3 py-1.5 text-white/80 hover:border-white hover:text-white"
              >
                IR
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SubjectArticlesClient posts={posts} showSubjectFilter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
