import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getStrategyBySlug, strategyGuides } from "@/data/strategy";
import { IconArrow, IconCheck } from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return strategyGuides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getStrategyBySlug(slug);
  if (!guide) return { title: "Strategy | Career Prepp" };
  return {
    title: `${guide.title} | Syllabus & Strategy | Career Prepp`,
    description: guide.summary,
  };
}

export default async function StrategyPaperPage({ params }: Props) {
  const { slug } = await params;
  const guide = getStrategyBySlug(slug);
  if (!guide) notFound();

  const syllabusHref =
    slug === "prelims" ? "/syllabus/prelims" : `/syllabus/${slug}`;

  return (
    <>
      <Header forceSolid />
      <main className="flex-1">
        <section className="border-b border-line bg-black py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="section-label !text-blue-soft">Strategy · {guide.paper}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-4 text-base text-white/65">{guide.summary}</p>
            <Link
              href={syllabusHref}
              className="mt-8 inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-sm font-medium text-white hover:border-white hover:bg-white/10"
            >
              Official syllabus for this paper
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <ul className="space-y-4">
              {guide.points.map((point) => (
                <li
                  key={point.slice(0, 40)}
                  className="flex gap-3 text-[15px] leading-relaxed text-ink"
                >
                  <IconCheck className="ai-check mt-1 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-3 border-t border-line pt-8">
              <Link
                href="/strategy"
                className="inline-flex border border-black px-5 py-3 text-sm font-medium text-black hover:bg-black hover:text-white"
              >
                All strategy guides
              </Link>
              <Link
                href={syllabusHref}
                className="inline-flex items-center gap-2 bg-blue px-5 py-3 text-sm font-medium text-white hover:bg-blue-hover"
              >
                Syllabus
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
