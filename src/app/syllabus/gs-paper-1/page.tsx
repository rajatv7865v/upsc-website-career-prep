import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  IconArrow,
  IconBook,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconCompass,
  IconGlobe,
  IconLayers,
  IconPen,
  IconTarget,
  IconUsers,
} from "@/components/Icons";
import { gs1SyllabusSections } from "@/data/gs1-syllabus";

export const metadata: Metadata = {
  title: "GS Paper 1 Syllabus | Syllabus & Pattern | Career Prepp",
  description:
    "Free UPSC GS Paper I syllabus breakdown — Indian culture, modern history, post-independence, world history, society, and geography.",
};

const sectionIcons = [
  IconBook,
  IconCalendar,
  IconBuilding,
  IconGlobe,
  IconUsers,
  IconCompass,
  IconTarget,
] as const;

function sectionStats(section: (typeof gs1SyllabusSections)[number]) {
  const topicCount = section.blocks.reduce((n, b) => n + b.topics.length, 0);
  return { units: section.blocks.length, topics: topicCount };
}

export default function GsPaper1Page() {
  const totalTopics = gs1SyllabusSections.reduce(
    (n, s) => n + s.blocks.reduce((m, b) => m + b.topics.length, 0),
    0,
  );

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="gs1-hero relative min-h-[88svh] overflow-hidden bg-black lg:min-h-[92svh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2400&h=1350&q=90"
              alt="Library shelves and study notes for GS Paper I"
              fill
              priority
              quality={90}
              className="gs1-hero-image object-cover object-[center_35%]"
              sizes="100vw"
            />
            <div className="gs1-hero-veil absolute inset-0" />
            <div className="hero-aurora absolute inset-0" aria-hidden />
            <div className="gs1-hero-grain absolute inset-0" aria-hidden />
            <div className="hero-frame absolute inset-0" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 sm:pb-20 lg:min-h-[92svh] lg:justify-center lg:px-8 lg:pb-24 lg:pt-24">
            <div className="gs1-hero-content max-w-3xl">
              <div className="hero-brand-row">
                <span className="hero-brand-rule" aria-hidden />
                <div>
                  <p className="hero-eyebrow">UPSC CSE Mains · Free syllabus</p>
                  <p className="hero-brand">
                    Career <span>Prepp</span>
                  </p>
                </div>
              </div>

              <p className="gs1-hero-kicker">
                Syllabus &amp; Pattern · GS Paper I
              </p>

              <h1 className="gs1-hero-title">
                Indian heritage, history, society &amp; geography — mapped for
                Mains.
              </h1>

              <p className="gs1-hero-text">
                A free, exam-ready syllabus atlas for UPSC CSE Mains GS Paper I.
                Open any section for topic cards and revision checklists.
              </p>

              <div className="gs1-hero-actions">
                <a href="#gs1-map" className="hero-btn-primary footer-cta-shine">
                  Explore syllabus map
                  <IconArrow className="ml-2 inline h-4 w-4" />
                </a>
                <a
                  href="/file/GS-PAPER-1-SYLLABUS.docx"
                  download
                  className="hero-btn-ghost"
                >
                  Download .docx
                  <span className="hero-btn-arrow" aria-hidden>
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <a
            href="#gs1-map"
            className="hero-scroll"
            aria-label="Scroll to syllabus map"
          >
            <span className="hero-scroll-line" />
          </a>
        </section>

        <nav className="gs1-rail sticky top-16 z-30 border-b border-line bg-white/92 backdrop-blur-md sm:top-[4.75rem]">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-6 py-3.5 lg:px-8">
            <span className="shrink-0 text-[11px] font-medium tracking-[0.16em] text-blue uppercase">
              Sections
            </span>
            <span className="hidden h-4 w-px shrink-0 bg-line sm:block" />
            {gs1SyllabusSections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="gs1-rail-link shrink-0"
              >
                <span className="gs1-rail-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title.split(/[&—]/)[0].trim()}
              </a>
            ))}
          </div>
        </nav>

        <section
          id="gs1-map"
          className="gs1-preview scroll-mt-36 border-b border-line bg-black py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="section-head section-head-dark max-w-2xl">
                <p className="section-label">Syllabus preview</p>
                <h2 className="section-title">
                  Seven chapters. One clear map for GS Paper I.
                </h2>
                <p className="section-text">
                  Skim the atlas, then open a chapter for unit cards and nested
                  checklist points from the full syllabus file.
                </p>
              </div>

              <div className="gs1-preview-stats">
                <div>
                  <p className="gs1-stat-value">
                    {String(gs1SyllabusSections.length).padStart(2, "0")}
                  </p>
                  <p className="gs1-stat-label">Sections</p>
                </div>
                <div>
                  <p className="gs1-stat-value">{totalTopics}+</p>
                  <p className="gs1-stat-label">Topics</p>
                </div>
                <div>
                  <p className="gs1-stat-value">Free</p>
                  <p className="gs1-stat-label">Always</p>
                </div>
              </div>
            </div>

            <div className="gs1-preview-list mt-12">
              {gs1SyllabusSections.map((section, i) => {
                const Icon = sectionIcons[i] ?? IconPen;
                const { units, topics } = sectionStats(section);
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="gs1-preview-row group"
                  >
                    <span className="gs1-preview-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="gs1-preview-icon">
                      <AnimatedIcon
                        icon={Icon}
                        variant={i % 2 === 0 ? "bob" : "float"}
                        tone="ghost"
                        size="md"
                        delay={i * 0.06}
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="gs1-preview-kicker">
                        {section.label}
                      </span>
                      <span className="gs1-preview-title">{section.title}</span>
                      <span className="gs1-preview-summary">
                        {section.summary}
                      </span>
                    </span>
                    <span className="gs1-preview-meta">
                      <span>
                        {units} units · {topics} topics
                      </span>
                      <span className="gs1-preview-go">
                        Open
                        <IconArrow className="h-4 w-4" />
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {gs1SyllabusSections.map((section, sIndex) => {
          const Icon = sectionIcons[sIndex] ?? IconLayers;
          const isAlt = sIndex % 2 === 1;

          return (
            <section
              key={section.id}
              id={section.id}
              className={`gs1-chapter scroll-mt-36 py-20 lg:py-28 ${
                isAlt ? "bg-surface" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="gs1-chapter-head">
                  <div className="flex items-center gap-4">
                    <AnimatedIcon
                      icon={Icon}
                      variant="float"
                      tone="light"
                      size="md"
                    />
                    <div>
                      <p className="section-label !mt-0">{section.label}</p>
                      <p className="mt-1 text-xs tracking-[0.14em] text-muted uppercase">
                        Chapter {String(sIndex + 1).padStart(2, "0")} of{" "}
                        {String(gs1SyllabusSections.length).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                  <h2 className="section-title max-w-3xl">{section.title}</h2>
                  <p className="section-text max-w-2xl">{section.summary}</p>
                </div>

                <div className="mt-12 grid gap-5 lg:grid-cols-2">
                  {section.blocks.map((block, bIndex) => (
                    <article
                      key={`${section.id}-${block.title}-${bIndex}`}
                      className="gs1-unit-card"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue text-white">
                          <IconLayers className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs tracking-wider text-muted">
                          {String(bIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-black">
                        {block.title}
                      </h3>

                      <div className="mt-4 space-y-2 border-t border-line pt-4">
                        {block.topics.map((topic) => (
                          <details
                            key={`${block.title}-${topic.title}`}
                            className="gs1-topic group/details"
                          >
                            <summary className="gs1-topic-summary">
                              <span className="pr-2 leading-snug">
                                {topic.title}
                              </span>
                              <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
                                {topic.points.length > 0
                                  ? `${topic.points.length}`
                                  : "—"}
                                <svg
                                  viewBox="0 0 12 12"
                                  className="h-3 w-3 transition-transform group-open/details:rotate-180"
                                  fill="none"
                                  aria-hidden
                                >
                                  <path
                                    d="M2.5 4.5 6 8l3.5-3.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </summary>
                            {topic.points.length > 0 ? (
                              <ul className="space-y-2 border-t border-line px-3.5 py-3">
                                {topic.points.map((point) => (
                                  <li
                                    key={point}
                                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                                  >
                                    <IconCheck className="ai-check mt-0.5 shrink-0" />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="border-t border-line px-3.5 py-3 text-sm text-muted">
                                Use this heading as a note title in your
                                revision map.
                              </p>
                            )}
                          </details>
                        ))}
                      </div>
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
                Next: IR syllabus or Current Affairs tracks.
              </h2>
              <p className="section-text">
                Pair GS Paper I notes with free IR maps and Geography / Mains
                current affairs.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/syllabus/ir"
                className="hero-btn-primary footer-cta-shine"
              >
                Open IR syllabus
                <IconArrow className="ml-2 inline h-4 w-4" />
              </Link>
              <Link href="/#ca-geography" className="hero-btn-ghost">
                Geography CA
                <span className="hero-btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
              <a
                href="/file/GS-PAPER-1-SYLLABUS.docx"
                download
                className="hero-btn-ghost"
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
