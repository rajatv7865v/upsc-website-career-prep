import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { officialSyllabusPapers } from "@/data/official-syllabus";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Syllabus | Career Prepp",
  description:
    "Official UPSC Civil Services syllabus — Prelims (GS + CSAT) and GS Papers 1–4. Plain text from the UPSC notification.",
};

export default function SyllabusIndexPage() {
  return (
    <>
      <Header forceSolid />
      <main className="flex-1">
        <section className="border-b border-line bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-sm text-muted">Syllabus</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Official UPSC syllabus
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Text copied from the UPSC Civil Services Examination notification.
              Strategy for each paper is kept separate.
            </p>
            <Link
              href="/strategy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue"
            >
              Open strategy (separate section)
              <IconArrow className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <ul className="divide-y divide-line border border-line bg-white">
              {officialSyllabusPapers.map((paper) => (
                <li key={paper.slug}>
                  <Link
                    href={`/syllabus/${paper.slug}`}
                    className="flex items-start justify-between gap-4 px-5 py-5 transition-colors hover:bg-surface"
                  >
                    <div>
                      <p className="font-medium text-black">{paper.label}</p>
                      <p className="mt-1 text-sm text-muted">{paper.subtitle}</p>
                    </div>
                    <IconArrow className="mt-1 h-4 w-4 shrink-0 text-blue" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
