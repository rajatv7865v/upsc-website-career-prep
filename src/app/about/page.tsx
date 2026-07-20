import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutIllustration from "@/components/AboutIllustration";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  IconArrow,
  IconBriefcase,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconCompass,
  IconLayers,
  IconMic,
  IconPen,
  IconRefresh,
  IconSearch,
  IconTarget,
  IconUsers,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us | Career Prepp",
  description:
    "Career Prepp publishes free UPSC Current Affairs — Geography and Mains tracks — plus syllabus-linked strategy for Prelims, Mains, and Interview.",
};

const values = [
  {
    title: "Clarity over clutter",
    text: "We cut noise. Every free guide maps to the official syllabus and how marks are actually awarded.",
    icon: IconTarget,
    variant: "orbit" as const,
  },
  {
    title: "Writing as a habit",
    text: "Knowledge becomes rank only when it is written under time. Our free notes make practice and self-correction concrete.",
    icon: IconPen,
    variant: "wiggle" as const,
  },
  {
    title: "Honest guidance",
    text: "Open articles on what works and what does not — attempt history, optional fit, and weekly hours included.",
    icon: IconCompass,
    variant: "float" as const,
  },
  {
    title: "Revision with intent",
    text: "Static and current affairs revised together in short cycles so Prelims facts and Mains analysis stay connected.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const journey = [
  {
    number: "01",
    title: "Start with your stage",
    text: "Use free checklists on background, attempt year, optional, and study hours to set a realistic weekly plan.",
    icon: IconSearch,
  },
  {
    number: "02",
    title: "Map the syllabus",
    text: "Free monthly and weekly targets for GS, CSAT, Essay, and Optional so effort stays focused, not scattered.",
    icon: IconCalendar,
  },
  {
    number: "03",
    title: "Build depth & writing",
    text: "Standard sources first, then free answer-writing frameworks and self-evaluation rubrics.",
    icon: IconLayers,
  },
  {
    number: "04",
    title: "Refine for the board",
    text: "From Prelims accuracy to Mains copies to Interview DAF — free notes for one continuous journey.",
    icon: IconMic,
  },
];

const audiences = [
  {
    title: "First-time aspirants",
    text: "A calm foundation from NCERTs to advanced notes, with free CSAT and optional orientation guides.",
    icon: IconUsers,
  },
  {
    title: "Working professionals",
    text: "Time-efficient weekly plans for limited hours — priority topics and weekend revision checklists.",
    icon: IconBriefcase,
  },
  {
    title: "Re-attempt candidates",
    text: "Gap-analysis frameworks, writing upgrades, and sharper Prelims–Mains balance guides.",
    icon: IconCompass,
  },
];

const pillars = [
  {
    title: "Prelims readiness",
    text: "Free topic maps, PYQ lists, error-notebook templates, and current affairs tagged to static topics.",
    points: ["GS Paper I coverage notes", "CSAT habit building", "PYQ-led revision"],
  },
  {
    title: "Mains excellence",
    text: "Timed writing frameworks, Essay themes, GS structures, and optional strategy — all free to read.",
    points: ["Answer structure templates", "Self-evaluation rubrics", "Value-addition drills"],
  },
  {
    title: "Interview presence",
    text: "DAF self-review prompts, mock-board tips, and opinion-building notes on national issues.",
    points: ["Board-day checklists", "Current affairs polish", "Communication tips"],
  },
];

const beliefs = [
  "UPSC rewards clarity of thought more than volume of notes.",
  "Current affairs must sit on a static foundation — not as a separate mountain.",
  "Self-feedback works when it is specific: demand of the question, structure, examples.",
  "Consistency beats intensity. A weekly system you can keep will outrun bursts of panic study.",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="page-hero">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1666272506564-f9a8a9f667ab?auto=format&fit=crop&w=2400&h=1350&q=85"
              alt="Raisina Hill Secretariat, New Delhi"
              fill
              priority
              quality={85}
              className="object-cover object-[center_40%] opacity-45"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label">About Us</p>
            <h1 className="page-hero-title">
              Free Current Affairs built for how UPSC asks.
            </h1>
            <p className="page-hero-text">
              Career Prepp centres on open Current Affairs — Geography and Mains
              — so newspapers become syllabus notes, not endless scrolling. No
              courses to buy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#current-affairs"
                className="inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                Explore Current Affairs
                <IconArrow className="h-4 w-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Browse CA guides
              </Link>
            </div>
          </div>
        </section>

        {/* Story + Emblem */}
        <section className="border-b border-line bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-6">
              <p className="section-label">Our story</p>
              <h2 className="section-title">
                Built for aspirants who want structure without noise.
              </h2>
              <p className="section-text">
                Preparing for the Union Public Service Commission is a long
                journey. Many aspirants do not fail for lack of effort — they
                struggle because effort is unfocused: too many sources, too
                little writing, and current affairs that never connect to the
                syllabus.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Career Prepp was created to fix that — with free Current Affairs
                at the centre. Geography briefs for maps and environment; Mains
                notes for issues and arguments. Our guides help you choose what
                to note, how to tag it to GS papers, and how to revise weekly.
              </p>

              <ul className="mt-8 space-y-3">
                {beliefs.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-ink sm:text-[15px]"
                  >
                    <IconCheck className="ai-check mt-1" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden border border-line">
                <AboutIllustration />
              </div>
              <p className="mt-3 text-xs tracking-wide text-muted">
                सत्यमेव जयते — the spirit of public service that guides Civil
                Services preparation.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label">What we believe</p>
              <h2 className="section-title">Four principles behind every guide.</h2>
              <p className="section-text">
                These are not slogans. They shape how we write articles, topic
                maps, and revision frameworks.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {values.map((item, i) => (
                <article key={item.title} className="cp-card">
                  <AnimatedIcon
                    icon={item.icon}
                    variant={item.variant}
                    tone="solid"
                    size="md"
                    delay={i * 0.12}
                  />
                  <h3 className="cp-card-title text-xl">{item.title}</h3>
                  <p className="cp-card-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="bg-black py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head section-head-dark">
              <p className="section-label">How to use our content</p>
              <h2 className="section-title">
                From first article to Personality Test.
              </h2>
              <p className="section-text">
                A simple weekly loop you can follow with our free guides —
                diagnose, map, write, refine.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((step, i) => (
                <article key={step.number} className="stage-card !min-h-0">
                  <div className="stage-card-top">
                    <AnimatedIcon
                      icon={step.icon}
                      variant={i % 2 === 0 ? "bob" : "float"}
                      tone="solid"
                      size="md"
                      delay={i * 0.15}
                    />
                    <span className="stage-card-badge">{step.number}</span>
                  </div>
                  <h3 className="stage-card-title !text-xl">{step.title}</h3>
                  <p className="stage-card-text">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Who + Pillars */}
        <section className="border-y border-line bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label">Who we write for</p>
              <h2 className="section-title">
                Designed for different starting points — same exam.
              </h2>
              <p className="section-text">
                Hours and history differ. The free syllabus map stays honest for
                everyone.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {audiences.map((item, i) => (
                <article key={item.title} className="cp-card">
                  <AnimatedIcon
                    icon={item.icon}
                    variant="float"
                    tone="light"
                    size="md"
                    delay={i * 0.15}
                  />
                  <h3 className="cp-card-title">{item.title}</h3>
                  <p className="cp-card-text">{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 section-head">
              <p className="section-label">What you get — free</p>
              <h2 className="section-title">
                Stage-ready guides for Prelims, Mains, and Interview.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {pillars.map((item) => (
                <article key={item.title} className="cp-card">
                  <h3 className="cp-card-title !mt-0 text-xl">{item.title}</h3>
                  <p className="cp-card-text">{item.text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <IconCheck className="ai-check" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Promise strip */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-10 border border-line bg-white p-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <AnimatedIcon
                    icon={IconBuilding}
                    variant="pulse"
                    tone="solid"
                    size="md"
                  />
                  <p className="section-label !mt-0">Our promise</p>
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  Public service begins with disciplined preparation.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  We do not sell courses or shortcuts. We publish free habits —
                  reading with a purpose, writing every week, and revising what
                  the exam actually asks. That is how Career Prepp stands with
                  you from the first NCERT to the final board.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/#current-affairs"
                  className="inline-flex items-center justify-center gap-2 bg-blue px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
                >
                  Explore Current Affairs
                  <IconArrow className="h-4 w-4" />
                </Link>
                <Link
                  href="/#syllabus"
                  className="inline-flex items-center justify-center gap-2 border border-black px-6 py-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                >
                  Explore syllabus & pattern
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
