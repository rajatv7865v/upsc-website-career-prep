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
    "Career Prepp publishes free, readable notes on current affairs and public life — for curious readers and serious learners alike.",
};

const values = [
  {
    title: "Clarity over clutter",
    text: "We cut noise. Every note aims to explain an issue clearly — without classroom jargon.",
    icon: IconTarget,
    variant: "orbit" as const,
  },
  {
    title: "Writing as a habit",
    text: "Understanding sticks when you put it in your own words. Our notes make that easy to practise.",
    icon: IconPen,
    variant: "wiggle" as const,
  },
  {
    title: "Honest guidance",
    text: "Open articles on what works and what does not — including for people with limited study hours.",
    icon: IconCompass,
    variant: "float" as const,
  },
  {
    title: "A library that grows",
    text: "Content is added and edited over time. What you see today is a starting point, not a finished product.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const journey = [
  {
    number: "01",
    title: "Start with curiosity",
    text: "Browse Current Affairs by topic — geography, economy, polity — and save what helps you.",
    icon: IconSearch,
  },
  {
    number: "02",
    title: "Add structure when you need it",
    text: "Syllabus and strategy pages are there if you want deeper structure later. They are a starting reference.",
    icon: IconCalendar,
  },
  {
    number: "03",
    title: "Build depth & writing",
    text: "Read standard sources, then use short notes and writing frameworks to make ideas stick.",
    icon: IconLayers,
  },
  {
    number: "04",
    title: "Keep the habit light",
    text: "A weekly rhythm you can keep beats bursts of panic reading — whether for interest or for an exam later.",
    icon: IconMic,
  },
];

const audiences = [
  {
    title: "Curious readers",
    text: "IT professionals and general readers who want solid notes on public issues — without heavy exam branding.",
    icon: IconUsers,
  },
  {
    title: "Working professionals",
    text: "Time-efficient weekly reads for limited hours — priority topics and short revisable notes.",
    icon: IconBriefcase,
  },
  {
    title: "Serious learners",
    text: "If you need stages, syllabus, or strategy later, those sections are available and will keep improving.",
    icon: IconCompass,
  },
];

const pillars = [
  {
    title: "Current affairs",
    text: "Free topic maps and notes on places, policy, economy, and everyday science in the news.",
    points: ["Subject-tagged articles", "Stage filters when useful", "Short revisable briefs"],
  },
  {
    title: "Clear writing",
    text: "Issue notes, examples, and simple structures you can reuse when explaining an idea.",
    points: ["Issue → argument notes", "Examples from the news", "Light writing drills"],
  },
  {
    title: "Optional depth",
    text: "Syllabus text and paper-wise strategy — kept separate, and treated as a living starting library.",
    points: ["Official syllabus wording", "Paper-wise strategy", "Updated over time"],
  },
];

const beliefs = [
  "Clarity of thought matters more than volume of notes.",
  "Current affairs should sit on a solid foundation — not as a separate mountain.",
  "Self-feedback works when it is specific: what is the issue, who is involved, what follows.",
  "Consistency beats intensity. A weekly habit you can keep will outrun bursts of panic reading.",
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
              Knowledge-first notes on public life.
            </h1>
            <p className="page-hero-text">
              Career Prepp centres on open Current Affairs — clear articles on
              geography, economy, polity, and today’s issues. Built for curious
              readers; deeper structure is available when you want it.
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
                Built for readers who want clarity without noise.
              </h2>
              <p className="section-text">
                Staying informed should not feel like drowning in sources. Many
                people struggle not for lack of effort — but because reading is
                unfocused: too many tabs, too little writing, and notes that
                never get revisited.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Career Prepp was created to fix that — with free Current Affairs
                at the centre. Short articles on places, policy, and issues.
                Deeper structure (syllabus, strategy) is available when you want
                it, and will keep improving as content grows.
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
                Clear notes on public life — for curious minds first.
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
                Designed for different starting points.
              </h2>
              <p className="section-text">
                Hours and backgrounds differ. The library stays open and honest
                for everyone.
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
                Articles, clarity, and optional depth.
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
                  Understanding begins with disciplined reading.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  We do not sell courses or shortcuts. We publish free habits —
                  reading with a purpose, writing a few lines, and revisiting
                  what matters. That is how Career Prepp grows with you as the
                  library expands.
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
                  Explore Syllabus & Strategy
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
