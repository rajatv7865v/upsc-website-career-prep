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
  IconChart,
  IconCheck,
  IconClipboard,
  IconCompass,
  IconGlobe,
  IconLayers,
  IconPen,
  IconTarget,
  IconUsers,
} from "@/components/Icons";
import { scienceTechSyllabusSections } from "@/data/science-tech-syllabus";

export const metadata: Metadata = {
  title: "Science & Tech Syllabus | Syllabus & Pattern | Career Prepp",
  description:
    "Free UPSC Science & Technology syllabus map — chemistry, biotech, defence, AI, physics, biology, space, nano, and S&T policy.",
};

const sectionIcons = [
  IconBook,
  IconLayers,
  IconTarget,
  IconCompass,
  IconChart,
  IconUsers,
  IconClipboard,
  IconGlobe,
  IconPen,
  IconBuilding,
] as const;

function sectionStats(section: (typeof scienceTechSyllabusSections)[number]) {
  const points = section.blocks.reduce((n, b) => n + b.points.length, 0);
  return { units: section.blocks.length, points };
}

export default function ScienceTechSyllabusPage() {
  const totalPoints = scienceTechSyllabusSections.reduce(
    (n, s) => n + s.blocks.reduce((m, b) => m + b.points.length, 0),
    0,
  );

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="gs1-hero relative min-h-[88svh] overflow-hidden bg-black lg:min-h-[92svh]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&h=1350&q=90"
              alt="Science and technology — space and research theme"
              fill
              priority
              quality={90}
              className="gs1-hero-image object-cover object-[center_40%]"
              sizes="100vw"
            />
            <div className="gs1-hero-veil absolute inset-0" />
            <div className="gs1-hero-grain absolute inset-0" aria-hidden />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 sm:pb-20 lg:min-h-[92svh] lg:justify-center lg:px-8 lg:pb-24 lg:pt-24">
            <div className="gs1-hero-content max-w-3xl">
              <div className="hero-brand-row">
                <span className="hero-brand-rule" aria-hidden />
                <p className="hero-brand">
                  Career <span>Prepp</span>
                </p>
              </div>

              <p className="gs1-hero-kicker">
                Syllabus &amp; Pattern · Science &amp; Tech
              </p>

              <h1 className="gs1-hero-title">
                Science &amp; technology — free syllabus map.
              </h1>

              <p className="gs1-hero-text">
                Chemistry to space tech, biotech to AI, defence to nano —
                structured checklists from the Science &amp; Tech syllabus file.
              </p>

              <div className="gs1-hero-actions">
                <a
                  href="#science-tech-map"
                  className="hero-btn-primary footer-cta-shine"
                >
                  Explore syllabus map
                  <IconArrow className="ml-2 inline h-4 w-4" />
                </a>
                <a
                  href="/file/SCIENCE-TECH-SYLLABUS.docx"
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
            href="#science-tech-map"
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
            {scienceTechSyllabusSections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="gs1-rail-link shrink-0"
              >
                <span className="gs1-rail-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title.split(/[,—(]/)[0].trim()}
              </a>
            ))}
          </div>
        </nav>

        <section
          id="science-tech-map"
          className="gs1-preview scroll-mt-36 border-b border-line bg-black py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="section-head section-head-dark max-w-2xl">
                <p className="section-label">Syllabus preview</p>
                <h2 className="section-title">
                  Ten chapters. Full Science &amp; Tech syllabus map.
                </h2>
                <p className="section-text">
                  Skim the atlas, then open a chapter for expandable topic
                  checklists taken directly from the Science &amp; Tech syllabus
                  file.
                </p>
              </div>

              <div className="gs1-preview-stats">
                <div>
                  <p className="gs1-stat-value">
                    {String(scienceTechSyllabusSections.length).padStart(2, "0")}
                  </p>
                  <p className="gs1-stat-label">Sections</p>
                </div>
                <div>
                  <p className="gs1-stat-value">{totalPoints}+</p>
                  <p className="gs1-stat-label">Checklist points</p>
                </div>
                <div>
                  <p className="gs1-stat-value">Free</p>
                  <p className="gs1-stat-label">Always</p>
                </div>
              </div>
            </div>

            <div className="gs1-preview-list mt-12">
              {scienceTechSyllabusSections.map((section, i) => {
                const Icon = sectionIcons[i] ?? IconPen;
                const { units, points } = sectionStats(section);
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
                        delay={i * 0.05}
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
                        {units} topics · {points} points
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

        {scienceTechSyllabusSections.map((section, sIndex) => {
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
                        {String(scienceTechSyllabusSections.length).padStart(
                          2,
                          "0",
                        )}
                      </p>
                    </div>
                  </div>
                  <h2 className="section-title max-w-3xl">{section.title}</h2>
                  <p className="section-text max-w-2xl">{section.summary}</p>
                </div>

                <div className="mt-12 grid gap-3 sm:grid-cols-2">
                  {section.blocks.map((block) =>
                    block.points.length > 0 ? (
                      <details
                        key={`${section.id}-${block.title}`}
                        className="gs1-topic group/details"
                      >
                        <summary className="gs1-topic-summary">
                          <span className="pr-2 leading-snug">{block.title}</span>
                          <span className="flex shrink-0 items-center gap-2 text-xs text-muted">
                            {block.points.length}
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
                        <ul className="space-y-2 border-t border-line px-3.5 py-3">
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
                      </details>
                    ) : (
                      <div
                        key={`${section.id}-${block.title}`}
                        className="flex items-start gap-2.5 rounded-sm border border-line bg-surface px-3.5 py-3 text-sm font-medium text-black"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                        <span className="leading-snug">{block.title}</span>
                      </div>
                    ),
                  )}
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
                Pair Science &amp; Tech with GS Paper 3.
              </h2>
              <p className="section-text">
                Use this map with Mains GS III and Mains Current Affairs for
                applications under space, biotech, and AI topics.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/syllabus/gs-paper-3"
                className="hero-btn-primary footer-cta-shine"
              >
                GS Paper 3
                <IconArrow className="ml-2 inline h-4 w-4" />
              </Link>
              <Link href="/#ca-mains" className="hero-btn-ghost">
                Mains Current Affairs
                <span className="hero-btn-arrow" aria-hidden>
                  →
                </span>
              </Link>
              <a
                href="/file/SCIENCE-TECH-SYLLABUS.docx"
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
