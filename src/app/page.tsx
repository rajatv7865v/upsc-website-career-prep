import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutIllustration from "@/components/AboutIllustration";
import AnimatedIcon from "@/components/AnimatedIcon";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import {
  IconArrow,
  IconBook,
  IconBriefcase,
  IconBuilding,
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
    title: "Current affairs first",
    text: "Free Geography and Mains current-affairs tracks — maps, environment, issues, and answer-ready arguments linked to the syllabus.",
    icon: IconNewspaper,
    variant: "pulse" as const,
  },
  {
    title: "Syllabus-linked briefs",
    text: "Every note tags to Prelims facts or Mains GS papers so newspaper reading becomes revision, not endless scrolling.",
    icon: IconCalendar,
    variant: "float" as const,
  },
  {
    title: "Static + current together",
    text: "Revision frameworks that pair NCERTs and standards with weekly current affairs — so both stay exam-ready.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const whoWeHelp = [
  {
    title: "First-time aspirants",
    text: "Learn how to read the newspaper for UPSC, build Geography maps, and turn issues into Mains notes — free from day one.",
    icon: IconUsers,
    variant: "bob" as const,
  },
  {
    title: "Working professionals",
    text: "Short weekly current-affairs loops: Geography facts + Mains analysis you can finish in limited hours.",
    icon: IconBriefcase,
    variant: "float" as const,
  },
  {
    title: "Re-attempt candidates",
    text: "Sharper current-affairs revision — what to keep, what to drop, and how to link issues to previous gaps.",
    icon: IconCompass,
    variant: "orbit" as const,
  },
];

const syllabusItems = [
  {
    title: "Prelims",
    stage: "Stage 1 · Screening",
    text: "Objective papers that shortlist candidates for Mains. Marks are not counted in the final rank — accuracy and elimination skills matter most.",
    icon: IconClipboard,
    variant: "bob" as const,
    details: [
      "GS Paper I — 200 marks · 2 hours · History, Polity, Economy, Geography, Environment, S&T, Current Affairs",
      "CSAT (Paper II) — 200 marks · 2 hours · Qualifying (33%) · Comprehension, reasoning, numeracy",
      "Negative marking: 1/3rd of marks allotted to a question",
    ],
  },
  {
    title: "Mains",
    stage: "Stage 2 · Written exam",
    text: "Nine descriptive papers. Essay, GS I–IV, and Optional decide your rank. Language papers are qualifying.",
    icon: IconBook,
    variant: "float" as const,
    details: [
      "Essay — 250 marks · one paper",
      "GS I–IV — 250 marks each · Indian Heritage, Society, Governance, Ethics, Economy, Security, IR",
      "Optional (2 papers) — 250 marks each · choose one subject carefully",
      "Indian Language & English — qualifying · 300 marks each",
    ],
  },
  {
    title: "Interview",
    stage: "Stage 3 · Personality Test",
    text: "A board assesses suitability for public service — awareness, balance, honesty, and communication — not rote knowledge.",
    icon: IconMic,
    variant: "pulse" as const,
    details: [
      "275 marks · added to Mains for final ranking",
      "DAF-based questions on background, hobbies, and optional",
      "Current issues, ethics, and situational judgment",
      "Mock boards help you stay calm and structured under pressure",
    ],
  },
];

const currentAffairs = [
  {
    id: "ca-geography",
    title: "Geography",
    tag: "Free · Maps & environment",
    text: "Physical, human, and environmental geography for Prelims and GS — maps, reports, climate, disasters, and India & world location facts.",
    icon: IconGlobe,
    variant: "spin" as const,
    topics: [
      "Physical geography",
      "Indian geography & mapping",
      "Climate & monsoon",
      "Environment & biodiversity",
      "Disasters & resources",
    ],
    href: "/blog",
    cta: "Browse Geography guides",
  },
  {
    id: "ca-mains",
    title: "Mains",
    tag: "Free · Analysis & writing",
    text: "Current affairs framed for Mains answers — issues, arguments, examples, and linkages across GS II, III, Essay, and Ethics.",
    icon: IconPen,
    variant: "wiggle" as const,
    topics: [
      "Issue → argument notes",
      "GS II & III linkages",
      "Essay-ready examples",
      "Ethics case angles",
      "Opinion frameworks",
    ],
    href: "/blog",
    cta: "Browse Mains guides",
  },
];

const freeResources = [
  {
    title: "Current Affairs · Geography",
    tag: "Free · Maps & environment",
    text: "Our core free track — physical & Indian geography, climate, biodiversity, disasters, and map-based current affairs.",
    icon: IconGlobe,
    variant: "spin" as const,
    includes: [
      "Weekly map & location briefs",
      "Climate & environment updates",
      "Disaster & resource notes",
      "Prelims-ready fact lists",
      "GS I / III linkages",
    ],
    href: "/#ca-geography",
    cta: "Open Geography track",
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
    href: "/#ca-mains",
    cta: "Open Mains track",
  },
  {
    title: "CA + static strategy",
    tag: "Free · How to revise",
    text: "Guides on newspaper reading, weekly CA loops, and pairing static subjects with current affairs without burnout.",
    icon: IconNewspaper,
    variant: "pulse" as const,
    includes: [
      "Newspaper reading method",
      "7-day CA + static rhythm",
      "What to skip before Prelims",
      "Answer writing with examples",
      "Interview opinion building",
    ],
    href: "/blog",
    cta: "Browse CA articles",
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Read with tags",
    text: "Use free newspaper methods: every item tagged to Geography CA or Mains CA — and to a GS paper.",
    icon: IconSearch,
    variant: "bob" as const,
  },
  {
    number: "02",
    title: "Build weekly CA loops",
    text: "Maps and environment one day, issue-analysis another. Static subjects run parallel — never as a separate mountain.",
    icon: IconLayers,
    variant: "float" as const,
  },
  {
    number: "03",
    title: "Write from current notes",
    text: "Turn three issues a week into short answers. Examples from current affairs beat generic theory.",
    icon: IconPen,
    variant: "wiggle" as const,
  },
  {
    number: "04",
    title: "Revise CA before the exam",
    text: "Short lists, map sheets, and monthly consolidations from our free guides — calm and selective.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const faqs = [
  {
    q: "Is Career Prepp mainly about current affairs?",
    a: "Yes. Our free library centres on Current Affairs — Geography and Mains tracks — plus strategy notes that link CA to static subjects. We do not sell courses.",
    icon: IconNewspaper,
  },
  {
    q: "What are the two Current Affairs options?",
    a: "Geography (maps, environment, location facts) and Mains (analysis and answer-ready arguments). Both are free to browse and download.",
    icon: IconGlobe,
  },
  {
    q: "How should I use Geography vs Mains CA?",
    a: "Use Geography for Prelims facts and GS map/environment themes. Use Mains for editorials, issues, and examples you can write in GS II, III, Essay, and Ethics.",
    icon: IconPen,
  },
  {
    q: "Do you cover only current affairs?",
    a: "Current affairs is the core. We also publish free strategy, answer writing, CSAT, optional, and Interview notes that support CA-based preparation.",
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
                    Free current affairs for how UPSC actually asks.
                  </h2>
                  <p className="section-text">
                    Career Prepp is a free Civil Services library built around
                    Current Affairs — Geography and Mains tracks — plus notes that
                    connect newspapers to the syllabus, answer writing, and
                    revision.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    Whether you are starting Prelims or writing Mains, use our
                    open briefs to replace scattered scrolling with a weekly
                    current-affairs system tagged to GS papers.
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
                Two clear tracks — Geography and Mains.
              </h2>
              <p className="section-text">
                Free current-affairs content split the way you revise: Geography
                for maps, environment, and location facts; Mains for analysis
                and answer-ready arguments.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {currentAffairs.map((item, i) => (
                <article
                  key={item.title}
                  id={item.id}
                  className="cp-card cp-card-dark scroll-mt-28"
                >
                  <AnimatedIcon
                    icon={item.icon}
                    variant={item.variant}
                    tone="dark"
                    size="md"
                    delay={i * 0.1}
                  />
                  <p className="mt-4 text-xs font-medium tracking-wide text-blue-soft">
                    {item.tag}
                  </p>
                  <h3 className="cp-card-title !mt-2 text-xl">{item.title}</h3>
                  <p className="cp-card-text">{item.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <li
                        key={topic}
                        className="border border-white/15 px-2.5 py-1 text-xs text-white/75"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <Link href={item.href} className="cp-card-link !text-blue-soft">
                    {item.cta}
                    <IconArrow className="h-4 w-4" />
                  </Link>
                </article>
              ))}
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
              <p className="section-label">Syllabus & Pattern</p>
              <h2 className="section-title">
                UPSC Civil Services — three stages, one goal.
              </h2>
              <p className="section-text">
                The exam selects officers for IAS, IPS, IFS, and other Group A /
                B services. Understand each stage clearly before you plan your
                year — marks, papers, and what truly decides your rank.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {syllabusItems.map((item, index) => (
                <article
                  key={item.title}
                  className="stage-card"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="stage-card-top">
                    <AnimatedIcon
                      icon={item.icon}
                      variant={item.variant}
                      tone="solid"
                      size="lg"
                      delay={index * 0.2}
                    />
                    <span className="stage-card-badge">{item.stage}</span>
                  </div>

                  <h3 className="stage-card-title">{item.title}</h3>
                  <p className="stage-card-text">{item.text}</p>

                  <ul className="stage-card-list">
                    {item.details.map((detail) => (
                      <li key={detail}>
                        <IconCheck className="ai-check" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="stage-card-glow" aria-hidden />
                </article>
              ))}
            </div>

            <div className="stage-merit">
              <div>
                <p className="stage-merit-title">
                  Final merit = Mains (1750) + Interview (275)
                </p>
                <p className="stage-merit-text">
                  Prelims is qualifying for entry to Mains. Language papers in
                  Mains are also qualifying. Plan your effort accordingly.
                </p>
              </div>
              <Link href="/syllabus/ir" className="stage-merit-link">
                Open IR syllabus
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
                Geography CA, Mains CA, and strategy notes that teach you how to
                revise newspapers with the syllabus — all free.
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
                A weekly Current Affairs system you can keep.
              </h2>
              <p className="section-text">
                Tag, loop, write, revise — four steps that keep newspapers useful
                from Prelims to the Personality Test.
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

        {/* Blog */}
        <section id="blog" className="scroll-mt-24 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="section-head">
                <p className="section-label">Blog</p>
                <h2 className="section-title">
                  Current affairs guides you can share and download.
                </h2>
                <p className="section-text">
                  Newspaper methods, Geography briefs, Mains analysis, and more —
                  free on the Blog.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue"
              >
                View all articles
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 6).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card group"
                >
                  <div className="blog-card-media">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      quality={85}
                      className="blog-card-image object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="blog-card-veil" aria-hidden />
                    <span className="blog-card-category">{post.category}</span>
                  </div>

                  <div className="blog-card-body">
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-text">{post.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-card-meta">{post.read}</span>
                      <span className="blog-card-link">
                        Read article
                        <IconArrow className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
              <h2 className="section-title">Common questions from aspirants.</h2>
              <p className="section-text">
                Straight answers about our free content. Suggest a topic anytime
                via Contact.
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
                Need a current affairs topic covered?
              </h2>
              <p className="section-text">
                Suggest a Geography or Mains CA theme, report a gap, or ask how
                to use our free briefs. We read every message.
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
              <a href="mailto:hello@careerprepp.com" className="cp-card group">
                <AnimatedIcon
                  icon={IconMail}
                  variant="bob"
                  tone="solid"
                  size="md"
                />
                <h3 className="cp-card-title">Email</h3>
                <p className="cp-card-text">
                  hello@careerprepp.com
                  <br />
                  We reply within 1 business day — content questions welcome.
                </p>
                <span className="cp-card-link">
                  Send a message
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>

              <a href="tel:+919876543210" className="cp-card group">
                <AnimatedIcon
                  icon={IconPhone}
                  variant="pulse"
                  tone="light"
                  size="md"
                  delay={0.2}
                />
                <h3 className="cp-card-title">Phone / WhatsApp</h3>
                <p className="cp-card-text">
                  +91 98765 43210
                  <br />
                  Mon–Sat · 10:00 AM – 7:00 PM IST
                </p>
                <span className="cp-card-link">
                  Say hello
                  <IconArrow className="h-4 w-4" />
                </span>
              </a>

              <article className="cp-card">
                <AnimatedIcon
                  icon={IconBuilding}
                  variant="float"
                  tone="light"
                  size="md"
                  delay={0.35}
                />
                <h3 className="cp-card-title">Content desk</h3>
                <p className="cp-card-text">
                  Suggest articles, report gaps, or share what helped your
                  preparation.
                  <br />
                  Based in New Delhi — serving aspirants across India online.
                </p>
                <p className="mt-4 text-sm text-muted">
                  Mention: stage · topic request · feedback
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
