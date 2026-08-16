import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import ExpandableArticleCards from "@/components/ExpandableArticleCards";
import HomeFaqSection from "@/components/HomeFaqSection";
import AnimatedIcon from "@/components/AnimatedIcon";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const revalidate = 60;
import {
  IconArrow,
  IconGlobe,
  IconNewspaper,
  IconPen,
  IconRefresh,
} from "@/components/Icons";

const studentReviews = [
  {
    name: "Priya Sharma",
    role: "Working professional · Delhi",
    text: "I read two articles on my commute every day. The notes are short, clear, and actually stick — no coaching jargon.",
    tag: "Daily reader",
  },
  {
    name: "Rahul Mehta",
    role: "UPSC aspirant · Pune",
    text: "Geography and map articles are exactly what Prelims needs. I stopped hunting across ten tabs — everything is tagged and easy to find.",
    tag: "Prelims focus",
  },
  {
    name: "Ananya Krishnan",
    role: "College student · Bengaluru",
    text: "Polity and economy pieces read like a good magazine, not a textbook. Free, organised, and updated — that is rare.",
    tag: "Subject-wise reading",
  },
  {
    name: "Vikram Tiwari",
    role: "State PSC aspirant · Lucknow",
    text: "Current affairs used to feel overwhelming. Career Prepp breaks issues into readable notes I can revise in under twenty minutes.",
    tag: "Revision habit",
  },
];

const aboutHighlights = [
  {
    title: "Current affairs, clearly written",
    text: "Free notes on maps, environment, policy, and issues — readable for any curious mind.",
    icon: IconNewspaper,
    variant: "pulse" as const,
  },
  {
    title: "Organised by topic",
    text: "Geography, Economy, Polity, and more — the same article appears where it belongs.",
    icon: IconGlobe,
    variant: "float" as const,
  },
  {
    title: "A library that grows",
    text: "New notes added weekly. What you see today is a living edition, not a static brochure.",
    icon: IconRefresh,
    variant: "spin" as const,
  },
];

const subjectLinks = [
  { href: "/geography", label: "Geography", note: "Maps, climate & places" },
  { href: "/economy", label: "Economy", note: "Policy, schemes & data" },
  { href: "/polity", label: "Polity", note: "Institutions & Constitution" },
  { href: "/environment", label: "Environment", note: "Reports & ecology" },
  { href: "/ir", label: "International Relations", note: "World affairs & India" },
  { href: "/current-affairs", label: "All Current Affairs", note: "Full archive" },
];

export default async function Home() {
  const articles = await getAllArticles();
  const featured = articles.slice(0, 5);

  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero latest={articles[0] ?? null} />

        <section id="articles" className="articles-premium scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <FeaturedArticles posts={featured} />
            <ExpandableArticleCards posts={articles} />
          </div>
        </section>

        {/* About — what Career Prepp offers */}
        <section
          id="about"
          className="scroll-mt-24 border-y border-blue-tint-line bg-blue-tint py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="section-head">
                  <p className="section-label">About Career Prepp</p>
                  <h2 className="section-title">
                    Knowledge-first notes on public life.
                  </h2>
                  <p className="section-text">
                    We publish free, readable articles on current affairs — for
                    curious readers as much as for serious learners. Start on
                    this page; go deeper only when you want to.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
                >
                  Read full About Us
                  <IconArrow className="h-4 w-4" />
                </Link>
              </div>

              <div className="lg:col-span-7 grid gap-4 sm:grid-cols-3">
                {aboutHighlights.map((item, i) => (
                  <article key={item.title} className="cp-card !p-5">
                    <AnimatedIcon
                      icon={item.icon}
                      variant={item.variant}
                      tone="solid"
                      size="sm"
                      delay={i * 0.12}
                    />
                    <h3 className="cp-card-title !mt-4 text-base">{item.title}</h3>
                    <p className="cp-card-text !mt-2 text-sm">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Browse by subject */}
        <section className="scroll-mt-24 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="section-head">
                <p className="section-label">Browse by subject</p>
                <h2 className="section-title">Find notes on what you care about.</h2>
                <p className="section-text">
                  Articles are tagged by topic — open a subject hub when you want
                  a focused reading list.
                </p>
              </div>
              <Link
                href="/current-affairs"
                className="inline-flex shrink-0 items-center gap-2 border border-black px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                All current affairs
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>

            <div className="subject-hub-grid mt-12">
              {subjectLinks.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="subject-hub-card group"
                >
                  <span className="subject-hub-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="subject-hub-label">{item.label}</h3>
                    <p className="subject-hub-note">{item.note}</p>
                  </div>
                  <IconArrow className="subject-hub-arrow h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-10">
              <AnimatedIcon
                icon={IconPen}
                variant="wiggle"
                tone="light"
                size="md"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-black">
                  Want a topic covered?
                </p>
                <p className="mt-1 text-sm text-muted">
                  Suggest an article idea — we read every message.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue"
              >
                Contact us
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Student reviews */}
        <section
          id="reviews"
          className="scroll-mt-24 border-y border-blue-tint-line bg-blue-tint py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="section-head">
                <p className="section-label">Student reviews</p>
                <h2 className="section-title">Trusted by readers across India.</h2>
                <p className="section-text">
                  Working professionals and aspirants use Career Prepp for calm,
                  consistent reading — not last-minute cramming.
                </p>
              </div>
              <div className="review-summary shrink-0">
                <p className="review-summary-score">4.8</p>
                <p className="review-summary-label">Average reader rating</p>
              </div>
            </div>

            <div className="reviews-grid mt-12">
              {studentReviews.map((review) => (
                <article key={review.name} className="review-card">
                  <div className="review-card-top">
                    <span className="review-avatar" aria-hidden>
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <div className="min-w-0">
                      <p className="review-name">{review.name}</p>
                      <p className="review-role">{review.role}</p>
                    </div>
                    <span className="review-tag">{review.tag}</span>
                  </div>
                  <blockquote className="review-quote">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    {"★★★★★"}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <HomeFaqSection />
      </main>

      <Footer />
    </>
  );
}
