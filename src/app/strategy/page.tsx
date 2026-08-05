import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { strategyGuides } from "@/data/strategy";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Strategy | Syllabus & Strategy | Career Prepp",
  description:
    "Paper-wise strategy for Prelims and GS Papers 1–4 — separate from the official syllabus text.",
};

export default function StrategyIndexPage() {
  return (
    <>
      <Header forceSolid />
      <main className="flex-1">
        <section className="border-b border-line bg-black py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label !text-blue-soft">Strategy</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How to prepare each paper — separate from the syllabus.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/65">
              Syllabus is what UPSC asks. Strategy is how to cover it. Open a
              paper below, or read the official syllabus first.
            </p>
            <Link
              href="/syllabus/prelims"
              className="mt-8 inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-sm font-medium text-white hover:border-white hover:bg-white/10"
            >
              Official syllabus
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {strategyGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/strategy/${guide.slug}`}
                className="cp-card group"
              >
                <p className="text-xs font-medium tracking-[0.16em] text-blue uppercase">
                  {guide.paper}
                </p>
                <h2 className="cp-card-title">{guide.title}</h2>
                <p className="cp-card-text">{guide.summary}</p>
                <span className="cp-card-link">
                  Read strategy
                  <IconArrow className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
