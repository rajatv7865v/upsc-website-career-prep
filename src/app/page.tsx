import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutIllustration from "@/components/AboutIllustration";
import AnimatedIcon from "@/components/AnimatedIcon";
import FeaturedArticles from "@/components/FeaturedArticles";
import ExpandableArticleCards from "@/components/ExpandableArticleCards";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { siteContact } from "@/data/site";
import {
  IconArrow,
  IconBook,
  IconBriefcase,
  IconCalendar,
  IconCheck,
  IconClipboard,
  IconCompass,
  IconGlobe,
  IconHelp,
  IconLayers,
  IconMail,
  IconMic,
  IconNewspaper,
  IconPen,
  IconPhone,
  IconRefresh,
  IconSearch,
  IconUsers,
} from "@/components/Icons";

const aboutPoints = [
  {
    title: "Current affairs, clearly written",
    text: "Free notes on maps, environment, policy, and issues — written so any curious reader can follow along.",
    icon: IconNewspaper,
    variant: "pulse" as const,
  },
  {
    title: "Organised by topic",
    text: "Articles are tagged by subject and stage so you can browse what interests you — Geography, Economy, Polity, and more.",
    icon: IconCalendar,
    variant: "float" as const,
  },
  {
    title: "Built to grow with time",
    text: "Content is added and edited gradually. What you see today is a starting library, not a finished product.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const whoWeHelp = [
  {
    title: "Curious readers",
    text: "Working professionals and general readers who want solid notes on public issues — without classroom jargon.",
    icon: IconUsers,
    variant: "bob" as const,
  },
  {
    title: "Busy professionals",
    text: "Short weekly reads you can finish in limited hours — maps, headlines, and clear takeaways.",
    icon: IconBriefcase,
    variant: "float" as const,
  },
  {
    title: "Serious learners",
    text: "If you later need deeper structure (stages, syllabus, strategy), those sections are there when you want them.",
    icon: IconCompass,
    variant: "orbit" as const,
  },
];

const currentAffairs = [
  {
    id: "ca-prelims",
    title: "Stage · Foundation",
    tag: "Free · Facts & places",
    text: "Short notes on facts, schemes, locations, and reports. Subject tags also push notes into Geography, Economy, Polity, and IR.",
    icon: IconClipboard,
    variant: "bob" as const,
    topics: [
      "Location & map facts",
      "Schemes & bodies",
      "Environment reports",
      "Polity & economy updates",
      "Science & Tech briefs",
    ],
    href: "/current-affairs?stage=Prelims",
    cta: "Browse foundation notes",
  },
  {
    id: "ca-mains",
    title: "Stage · Analysis",
    tag: "Free · Issues & arguments",
    text: "Current affairs framed as issues — stakeholders, both sides, and a clear way forward. Same notes appear under matching subject tabs.",
    icon: IconPen,
    variant: "wiggle" as const,
    topics: [
      "Issue → argument notes",
      "Policy linkages",
      "Reusable examples",
      "Ethics angles",
      "Opinion frameworks",
    ],
    href: "/current-affairs?stage=Mains",
    cta: "Browse analysis notes",
  },
];

const syllabusLinks = [
  { href: "/syllabus/prelims", label: "Prelims (GS + CSAT)" },
  { href: "/syllabus/gs-paper-1", label: "GS Paper 1" },
  { href: "/syllabus/gs-paper-2", label: "GS Paper 2" },
  { href: "/syllabus/gs-paper-3", label: "GS Paper 3" },
  { href: "/syllabus/gs-paper-4", label: "GS Paper 4" },
];

const strategyLinks = [
  { href: "/strategy/prelims", label: "Prelims strategy" },
  { href: "/strategy/gs-paper-1", label: "GS Paper 1 strategy" },
  { href: "/strategy/gs-paper-2", label: "GS Paper 2 strategy" },
  { href: "/strategy/gs-paper-3", label: "GS Paper 3 strategy" },
  { href: "/strategy/gs-paper-4", label: "GS Paper 4 strategy" },
];

const freeResources = [
  {
    title: "Current Affairs · Prelims",
    tag: "Free · Facts & maps",
    text: "Prelims-tagged notes — location facts, schemes, environment, and reports that also land in subject tabs.",
    icon: IconClipboard,
    variant: "bob" as const,
    includes: [
      "Weekly fact briefs",
      "Map & location updates",
      "Scheme and body notes",
      "Environment reports",
      "Subject-tagged library",
    ],
    href: "/current-affairs?stage=Prelims",
    cta: "Open Prelims CA",
  },
  {
    title: "Current Affairs · Mains",
    tag: "Free · Analysis & writing",
    text: "Issue notes built for answers — arguments, examples, and linkages across GS II, III, Essay, and Ethics.",
    icon: IconPen,
    variant: "wiggle" as const,
    includes: [
      "Issue → argument frameworks",
      "Editorial-to-answer drills",
      "GS paper tagging habits",
      "Essay & Ethics angles",
      "Monthly revise lists",
    ],
    href: "/current-affairs?stage=Mains",
    cta: "Open Mains track",
  },
  {
    title: "Geography & Economy tabs",
    tag: "Free · Subject hubs",
    text: "Weak in one subject? Open Geography or Economy and read only those tagged current affairs.",
    icon: IconGlobe,
    variant: "spin" as const,
    includes: [
      "Geography Prelims / Mains",
      "Economy Prelims / Mains",
      "Auto-populated from tags",
      "Same article, multiple tabs",
      "Daily revise or deep dive",
    ],
    href: "/geography",
    cta: "Open Geography",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Read with purpose",
    text: "Pick what matters from the news — maps, schemes, debates — and save a short note you can revisit.",
    icon: IconSearch,
    variant: "bob" as const,
  },
  {
    number: "02",
    title: "Follow a light weekly rhythm",
    text: "One day for places and environment, another for issues and arguments. Keep the habit small enough to stick.",
    icon: IconLayers,
    variant: "float" as const,
  },
  {
    number: "03",
    title: "Write a few lines",
    text: "Summarise an issue in your own words. Clear writing sharpens understanding for any reader.",
    icon: IconPen,
    variant: "wiggle" as const,
  },
  {
    number: "04",
    title: "Revisit what you saved",
    text: "Short lists and tagged articles make revision calm — whether you browse for interest or prepare for something bigger.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const faqs = [
  {
    q: "Who is Career Prepp for?",
    a: "Anyone who wants clear, free notes on current affairs and public life — including working professionals. Deeper structure is available if you need it later.",
    icon: IconNewspaper,
  },
  {
    q: "Is this only for civil services?",
    a: "No. Early on we keep the tone knowledge-first. Syllabus and strategy pages exist as a starting library and will grow over time.",
    icon: IconGlobe,
  },
  {
    q: "How are articles organised?",
    a: "By topic (Geography, Economy, Polity, and more) and by stage when relevant. The same article can appear in the general feed and under a subject tab.",
    icon: IconPen,
  },
  {
    q: "Do you sell courses?",
    a: "No. The library is free to read. Suggest a topic anytime if something is missing.",
    icon: IconBook,
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-line bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="section-head">
                  <p className="section-label">About Us</p>
                  <h2 className="section-title">
                    Knowledge-first notes on public life.
                  </h2>
                  <p className="section-text">
                    Career Prepp publishes free, readable articles on current
                    affairs — geography, economy, polity, and more — for curious
                    readers as much as for serious learners.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    The library grows gradually. Syllabus and strategy pages are
                    a starting point and will be refined over time — they are
                    not the whole face of the site.
                  </p>
                </div>

                <div className="mt-8 grid gap-4">
                  {aboutPoints.map((item, i) => (
                    <article
                      key={item.title}
                      className="cp-card !flex-row gap-4 !p-4"
                    >
                      <AnimatedIcon
                        icon={item.icon}
                        variant={item.variant}
                        tone="light"
                        size="md"
                        delay={i * 0.15}
                      />
                      <div>
                        <h3 className="cp-card-title !mt-0 text-base">
                          {item.title}
                        </h3>
                        <p className="cp-card-text !mt-1 text-sm">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="mt-0 inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
                  >
                    Read full About Us
                    <IconArrow className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#current-affairs"
                    className="inline-flex items-center gap-2 border border-black px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
                  >
                    Explore Current Affairs
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="cp-card !p-0 overflow-hidden hover:!transform-none hover:!shadow-none">
                  <AboutIllustration />
                </div>

                <div>
                  <p className="text-sm font-semibold text-black">
                    Who this content is for
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {whoWeHelp.map((item, i) => (
                      <article key={item.title} className="cp-card !p-4">
                        <AnimatedIcon
                          icon={item.icon}
                          variant={item.variant}
                          tone="solid"
                          size="sm"
                          delay={i * 0.2}
                        />
                        <h3 className="cp-card-title text-[15px]">
                          {item.title}
                        </h3>
                        <p className="cp-card-text !mt-2 text-sm">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Affairs */}
        <section
          id="current-affairs"
          className="scroll-mt-24 bg-black py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head section-head-dark">
              <p className="section-label">Current Affairs</p>
              <h2 className="section-title">
                Highlighted headings — expand to read.
              </h2>
              <p className="section-text">
                Tap a heading to preview the note, then open the full article.
                Browse by topic or by stage when you want more structure.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4 space-y-4">
                {currentAffairs.map((item, i) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    id={item.id}
                    className="cp-card cp-card-dark scroll-mt-28 block !p-5"
                  >
                    <AnimatedIcon
                      icon={item.icon}
                      variant={item.variant}
                      tone="dark"
                      size="sm"
                      delay={i * 0.1}
                    />
                    <p className="mt-3 text-xs font-medium tracking-wide text-blue-soft">
                      {item.tag}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/60">{item.text}</p>
                    <span className="cp-card-link !text-blue-soft mt-3">
                      {item.cta}
                      <IconArrow className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>

              <div className="lg:col-span-8">
                <ExpandableArticleCards posts={blogPosts.slice(0, 5)} />
                <Link
                  href="/current-affairs"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-soft"
                >
                  Browse all Current Affairs
                  <IconArrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section
          id="syllabus"
          className="scroll-mt-24 border-y border-black bg-black py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head section-head-dark">
              <p className="section-label">Syllabus & Strategy</p>
              <h2 className="section-title">
                Structure when you need it — syllabus and strategy.
              </h2>
              <p className="section-text">
                Official paper outlines and separate how-to guides. Useful if you
                want depth later; everyday reading stays on Current Affairs and
                the blog.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="stage-card">
                <div className="stage-card-top">
                  <AnimatedIcon
                    icon={IconBook}
                    variant="float"
                    tone="solid"
                    size="lg"
                  />
                  <span className="stage-card-badge">Syllabus</span>
                </div>
                <h3 className="stage-card-title">Official syllabus text</h3>
                <p className="stage-card-text">
                  Plain wording from the public notification — a starting
                  reference, not the final word.
                </p>
                <ul className="stage-card-list">
                  {syllabusLinks.map((link) => (
                    <li key={link.href}>
                      <IconCheck className="ai-check" />
                      <Link href={link.href} className="text-blue-soft hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/syllabus"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-soft"
                >
                  All syllabus
                  <IconArrow className="h-4 w-4" />
                </Link>
                <div className="stage-card-glow" aria-hidden />
              </article>

              <article className="stage-card">
                <div className="stage-card-top">
                  <AnimatedIcon
                    icon={IconCompass}
                    variant="orbit"
                    tone="solid"
                    size="lg"
                    delay={0.15}
                  />
                  <span className="stage-card-badge">Strategy</span>
                </div>
                <h3 className="stage-card-title">Paper-wise strategy</h3>
                <p className="stage-card-text">
                  How to cover each paper — separate from the syllabus text.
                </p>
                <ul className="stage-card-list">
                  {strategyLinks.map((link) => (
                    <li key={link.href}>
                      <IconCheck className="ai-check" />
                      <Link href={link.href} className="text-blue-soft hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/strategy"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-soft"
                >
                  All strategy
                  <IconArrow className="h-4 w-4" />
                </Link>
                <div className="stage-card-glow" aria-hidden />
              </article>
            </div>

            <div className="stage-merit">
              <div>
                <p className="stage-merit-title">
                  Syllabus tells you what. Strategy tells you how.
                </p>
                <p className="stage-merit-text">
                  Open either hub from the Syllabus &amp; Strategy menu — the
                  two lists stay separate.
                </p>
              </div>
              <Link href="/syllabus" className="stage-merit-link">
                Open syllabus hub
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Free resources */}
        <section id="resources" className="scroll-mt-24 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label">Free resources</p>
              <h2 className="section-title">
                Current affairs at the centre of every guide.
              </h2>
              <p className="section-text">
                Topic hubs, stage filters, and strategy notes — free to browse as
                the library grows.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {freeResources.map((resource, i) => (
                <article key={resource.title} className="cp-card">
                  <AnimatedIcon
                    icon={resource.icon}
                    variant={resource.variant}
                    tone="solid"
                    size="md"
                    delay={i * 0.15}
                  />
                  <p className="mt-4 text-xs font-medium tracking-wide text-blue">
                    {resource.tag}
                  </p>
                  <h3 className="cp-card-title !mt-2 text-xl">
                    {resource.title}
                  </h3>
                  <p className="cp-card-text">{resource.text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-4">
                    {resource.includes.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <IconCheck className="ai-check" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <Link href={resource.href} className="cp-card-link">
                    {resource.cta}
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="scroll-mt-24 border-y border-line bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label">Our Approach</p>
              <h2 className="section-title">
                A light weekly habit you can keep.
              </h2>
              <p className="section-text">
                Read, tag, write a few lines, revisit — four steps that turn
                headlines into useful notes.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approachSteps.map((step, i) => (
                <article key={step.number} className="cp-card">
                  <div className="flex items-center justify-between gap-3">
                    <AnimatedIcon
                      icon={step.icon}
                      variant={step.variant}
                      tone="light"
                      size="md"
                      delay={i * 0.18}
                    />
                    <span className="text-3xl font-light text-blue/35">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="cp-card-title">{step.title}</h3>
                  <p className="cp-card-text">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Blog / newspaper feature */}
        <section id="blog" className="scroll-mt-24 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FeaturedArticles posts={blogPosts.slice(0, 5)} />
          </div>
        </section>

        {/* FAQ */}
        <section className="scroll-mt-24 border-y border-line bg-surface py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label inline-flex items-center gap-2">
                <AnimatedIcon
                  icon={IconHelp}
                  variant="bob"
                  tone="light"
                  size="sm"
                />
                FAQs
              </p>
              <h2 className="section-title">Common questions.</h2>
              <p className="section-text">
                Straight answers about the library. Suggest a topic anytime via
                Contact.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {faqs.map((item, i) => (
                <article key={item.q} className="cp-card !flex-row gap-4">
                  <AnimatedIcon
                    icon={item.icon}
                    variant={i % 2 === 0 ? "bob" : "float"}
                    tone="light"
                    size="md"
                    delay={i * 0.12}
                  />
                  <div>
                    <h3 className="cp-card-title !mt-0 text-base">{item.q}</h3>
                    <p className="cp-card-text">{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head">
              <p className="section-label">Contact Us</p>
              <h2 className="section-title">
                Want a topic covered?
              </h2>
              <p className="section-text">
                Suggest an article idea, report a gap, or ask how to use the
                library. We read every message.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue"
              >
                Open full Contact page
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <a href={`mailto:${siteContact.email}`} className="cp-card group">
                <AnimatedIcon
                  icon={IconMail}
                  variant="bob"
                  tone="solid"
                  size="md"
                />
                <h3 className="cp-card-title">Email</h3>
                <p className="cp-card-text">
                  {siteContact.email}
                  <br />
                  We reply within 1 business day — content questions welcome.
                </p>
                <span className="cp-card-link">
                  Send a message
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>

              <a
                href={siteContact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card group"
              >
                <AnimatedIcon
                  icon={IconPhone}
                  variant="pulse"
                  tone="light"
                  size="md"
                  delay={0.2}
                />
                <h3 className="cp-card-title">WhatsApp</h3>
                <p className="cp-card-text">
                  {siteContact.phoneDisplay}
                  <br />
                  Mon–Sat · 10:00 AM – 7:00 PM IST
                </p>
                <span className="cp-card-link">
                  Chat on WhatsApp
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>

              <a
                href={siteContact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card group"
              >
                <AnimatedIcon
                  icon={IconMic}
                  variant="float"
                  tone="light"
                  size="md"
                  delay={0.35}
                />
                <h3 className="cp-card-title">Telegram</h3>
                <p className="cp-card-text">
                  Join the Career Prepp channel for updates and notes.
                  <br />
                  Suggest topics anytime via the contact form.
                </p>
                <span className="cp-card-link">
                  Open Telegram
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
