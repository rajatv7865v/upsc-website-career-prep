import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  IconArrow,
  IconBook,
  IconChart,
  IconCheck,
  IconClipboard,
  IconCompass,
  IconLayers,
  IconTarget,
  IconUsers,
} from "@/components/Icons";
import { csatSyllabusSections } from "@/data/csat-syllabus";

export const metadata: Metadata = {
  title: "CSAT Syllabus | Syllabus & Pattern | Career Prepp",
  description:
    "Free UPSC CSAT (GS Paper II Prelims) syllabus map — reading comprehension, interpersonal skills, reasoning, numeracy, and data interpretation.",
};

const sectionIcons = [
  IconBook,
  IconUsers,
  IconCompass,
  IconTarget,
  IconClipboard,
  IconLayers,
  IconChart,
] as const;

export default function CsatSyllabusPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="page-hero">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=2400&h=1200&q=80"
              alt="Aptitude study desk with notes and books"
              fill
              priority
              quality={80}
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label">Syllabus & Pattern · CSAT</p>
            <h1 className="page-hero-title">
              CSAT — free Prelims Paper II syllabus map.
            </h1>
            <p className="page-hero-text">
              Reading comprehension, interpersonal skills, logical reasoning,
              decision making, basic numeracy, and data interpretation —
              structured for practice and revision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#csat-map"
                className="inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                Browse syllabus map
                <IconArrow className="h-4 w-4" />
              </a>
              <a
                href="/file/CSAT-SYLLABUS.docx"
                download
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Download Word file
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-medium tracking-[0.14em] text-blue uppercase">
                Jump to
              </span>
              {csatSyllabusSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="border border-line bg-surface px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-blue hover:text-blue"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="csat-map"
          className="scroll-mt-28 border-b border-line bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label">Overview</p>
              <h2 className="section-title">
                Seven boxes that organise the full CSAT syllabus.
              </h2>
              <p className="section-text">
                Use this map to plan practice sets. Each box expands into topic
                checklists from the CSAT syllabus file.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {csatSyllabusSections.map((section, i) => {
                const Icon = sectionIcons[i] ?? IconBook;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="cp-card group !p-5"
                  >
                    <AnimatedIcon
                      icon={Icon}
                      variant={i % 2 === 0 ? "bob" : "float"}
                      tone="solid"
                      size="md"
                      delay={i * 0.1}
                    />
                    <p className="mt-4 text-xs font-medium tracking-wide text-blue">
                      {section.label}
                    </p>
                    <h3 className="cp-card-title !mt-2 text-[15px] leading-snug">
                      {section.title}
                    </h3>
                    <p className="cp-card-text !mt-2 text-sm">
                      {section.blocks.length} topic{" "}
                      {section.blocks.length === 1 ? "block" : "blocks"}
                    </p>
                    <span className="cp-card-link !mt-4 text-sm">
                      Open section
                      <IconArrow className="h-4 w-4" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {csatSyllabusSections.map((section, sIndex) => {
          const Icon = sectionIcons[sIndex] ?? IconLayers;
          const isAlt = sIndex % 2 === 1;

          return (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-28 py-20 lg:py-28 ${
                isAlt ? "bg-surface" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="section-head max-w-3xl">
                    <div className="flex items-center gap-3">
                      <AnimatedIcon
                        icon={Icon}
                        variant="float"
                        tone="light"
                        size="md"
                      />
                      <p className="section-label !mt-0">{section.label}</p>
                    </div>
                    <h2 className="section-title">{section.title}</h2>
                    <p className="section-text">{section.summary}</p>
                  </div>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2">
                  {section.blocks.map((block, bIndex) => (
                    <article key={block.title} className="cp-card !h-auto">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue/10 text-blue">
                          <IconLayers className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-medium tracking-wider text-muted">
                          {String(bIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="cp-card-title text-lg">{block.title}</h3>
                      <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                        {block.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted"
                          >
                            <IconCheck className="ai-check mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-t border-line bg-black py-20 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="section-head section-head-dark max-w-xl">
              <p className="section-label">Keep going</p>
              <h2 className="section-title">
                Pair CSAT practice with the GS syllabus maps.
              </h2>
              <p className="section-text">
                Clear Paper II aptitude while building Mains GS notes from the
                free Paper I–IV and IR maps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/syllabus/gs-paper-1"
                className="inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                GS Paper 1 map
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/#syllabus"
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Full exam pattern
              </Link>
              <a
                href="/file/CSAT-SYLLABUS.docx"
                download
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Download .docx
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
