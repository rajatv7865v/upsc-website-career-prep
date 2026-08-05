import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getOfficialSyllabus,
  type OfficialSyllabusPaper,
} from "@/data/official-syllabus";
import { IconArrow } from "@/components/Icons";
import Link from "next/link";

type Props = {
  slug: string;
  strategyHref?: string;
};

export function officialSyllabusMetadata(slug: string): Metadata {
  const paper = getOfficialSyllabus(slug);
  if (!paper) return { title: "Syllabus | Career Prepp" };
  return {
    title: `${paper.label} Syllabus | Career Prepp`,
    description: `Official UPSC syllabus — ${paper.paperTitle}. ${paper.subtitle}`,
  };
}

/** Plain official syllabus page — no fancy headings; UPSC wording only. */
export default function OfficialSyllabusPage({
  slug,
  strategyHref,
}: Props) {
  const paper = getOfficialSyllabus(slug);
  if (!paper) {
    return (
      <>
        <Header forceSolid />
        <main className="flex-1 px-6 py-28 text-center">
          <p>Syllabus not found.</p>
          <Link href="/syllabus" className="mt-4 inline-block text-blue">
            All syllabus
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header forceSolid />
      <main className="flex-1 bg-white">
        <article className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm text-muted">Syllabus</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            {paper.paperTitle}
          </h1>
          <p className="mt-2 text-base text-muted">{paper.subtitle}</p>
          <p className="mt-4 text-sm text-muted">{paper.sourceNote}</p>

          <div className="mt-10 space-y-10">
            {paper.intro?.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="text-[15px] leading-relaxed text-ink"
              >
                {para}
              </p>
            ))}

            {paper.blocks.map((block) => (
              <SyllabusBlock key={block.title} block={block} />
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-8 text-sm text-muted">
            <p>
              Source: Union Public Service Commission (
              <a
                href="https://www.upsc.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue"
              >
                upsc.gov.in
              </a>
              ).
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/syllabus" className="font-medium text-black underline-offset-2 hover:underline">
                All syllabus
              </Link>
              {strategyHref && (
                <Link
                  href={strategyHref}
                  className="inline-flex items-center gap-1.5 font-medium text-blue"
                >
                  Strategy for this paper
                  <IconArrow className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function SyllabusBlock({
  block,
}: {
  block: OfficialSyllabusPaper["blocks"][number];
}) {
  return (
    <section>
      <h2 className="text-lg font-medium text-black">{block.title}</h2>
      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[15px] leading-relaxed text-ink">
        {block.points.map((point) => (
          <li key={point.slice(0, 64)}>{point}</li>
        ))}
      </ul>
      {block.notes?.map((note) => (
        <p key={note.slice(0, 48)} className="mt-4 text-sm leading-relaxed text-muted">
          {note}
        </p>
      ))}
    </section>
  );
}
