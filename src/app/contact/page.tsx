import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  IconArrow,
  IconBuilding,
  IconCalendar,
  IconCheck,
  IconClipboard,
  IconMail,
  IconMic,
  IconPen,
  IconPhone,
  IconUsers,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us | Career Prepp",
  description:
    "Contact Career Prepp with questions, feedback, or free content topic requests for UPSC Prelims, Mains, and Interview.",
};

const channels = [
  {
    title: "Email",
    detail: "hello@careerprepp.com",
    note: "We reply within 1 business day — content questions welcome.",
    href: "mailto:hello@careerprepp.com",
    icon: IconMail,
    variant: "bob" as const,
    tone: "solid" as const,
    cta: "Send an email",
  },
  {
    title: "Phone / WhatsApp",
    detail: "+91 98765 43210",
    note: "Mon–Sat · 10:00 AM – 7:00 PM IST",
    href: "tel:+919876543210",
    icon: IconPhone,
    variant: "pulse" as const,
    tone: "light" as const,
    cta: "Say hello",
  },
  {
    title: "Content desk",
    detail: "Topic requests & feedback",
    note: "Suggest guides, report gaps, or share what helped you.",
    href: "#message",
    icon: IconBuilding,
    variant: "float" as const,
    tone: "light" as const,
    cta: "Open the form",
  },
];

const tips = [
  "Your stage — Prelims, Mains, Interview, or undecided",
  "The topic or guide you need (or a correction you spotted)",
  "Optional subject (if relevant) and what confused you",
  "Whether you want to suggest a new free article idea",
];

const reasons = [
  {
    title: "Geography CA",
    text: "Ask for map, climate, or environment briefs — or request a free Geography current-affairs theme.",
    icon: IconClipboard,
  },
  {
    title: "Mains CA",
    text: "Need issue → argument notes for GS II / III, Essay, or Ethics? Tell us the topic.",
    icon: IconPen,
  },
  {
    title: "Newspaper method",
    text: "Confused what to note from The Hindu / Indian Express? We will point you to the free reading guide.",
    icon: IconCalendar,
  },
  {
    title: "Topic request",
    text: "Suggest the next free Current Affairs article. Aspirant requests shape the library.",
    icon: IconMic,
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="page-hero">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1666272506564-f9a8a9f667ab?auto=format&fit=crop&w=2400&h=1350&q=85"
              alt="Raisina Hill, New Delhi"
              fill
              priority
              quality={85}
              className="object-cover object-[center_40%] opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label">Contact Us</p>
            <h1 className="page-hero-title">
              Suggest a Current Affairs topic — or ask how to revise.
            </h1>
            <p className="page-hero-text">
              Career Prepp is a free Current Affairs library (Geography &amp;
              Mains). Write with a topic idea, a correction, or a question about
              our briefs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#message"
                className="inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                Open message form
                <IconArrow className="h-4 w-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Call +91 98765 43210
              </a>
            </div>
          </div>
        </section>

        {/* Channels */}
        <section className="border-b border-line bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
              {channels.map((item, i) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="cp-card group"
                >
                  <AnimatedIcon
                    icon={item.icon}
                    variant={item.variant}
                    tone={item.tone}
                    size="md"
                    delay={i * 0.12}
                  />
                  <h2 className="cp-card-title">{item.title}</h2>
                  <p className="mt-2 text-[15px] font-medium text-black">
                    {item.detail}
                  </p>
                  <p className="cp-card-text">{item.note}</p>
                  <span className="cp-card-link">
                    {item.cta}
                    <IconArrow className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + tips */}
        <section
          id="message"
          className="scroll-mt-28 bg-surface py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-5">
              <p className="section-label">Message form</p>
              <h2 className="section-title">
                Share a few details — we will get back to you.
              </h2>
              <p className="section-text">
                The form opens your email with everything filled in — or call us
                if you prefer to talk first.
              </p>

              <div className="mt-8 border border-line bg-white p-6">
                <div className="flex items-center gap-3">
                  <AnimatedIcon
                    icon={IconUsers}
                    variant="float"
                    tone="solid"
                    size="sm"
                  />
                  <p className="text-sm font-semibold text-black">
                    Helpful to include
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {tips.map((tip) => (
                    <li
                      key={tip}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <IconCheck className="ai-check" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
                <p>
                  <span className="font-medium text-black">Hours:</span> Mon–Sat,
                  10 AM – 7 PM IST
                </p>
                <p>
                  <span className="font-medium text-black">Response:</span> within
                  1 business day
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-line bg-white p-6 sm:p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Why contact */}
        <section className="bg-black py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="section-head section-head-dark">
              <p className="section-label">Why write to us</p>
              <h2 className="section-title">
                Common reasons aspirants reach out.
              </h2>
              <p className="section-text">
                We are here to point you to the right free guide — or take your
                idea for the next one.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((item, i) => (
                <article key={item.title} className="stage-card !min-h-0">
                  <AnimatedIcon
                    icon={item.icon}
                    variant={i % 2 === 0 ? "bob" : "float"}
                    tone="solid"
                    size="md"
                    delay={i * 0.12}
                  />
                  <h3 className="stage-card-title !text-xl">{item.title}</h3>
                  <p className="stage-card-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line bg-white py-20 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <p className="section-label">Next step</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Prefer to browse free content first?
              </h2>
              <p className="mt-2 max-w-lg text-base text-muted">
                Read how Career Prepp works, then explore guides — write to us
                anytime with feedback.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-black px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
              >
                About Career Prepp
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-hover"
              >
                Browse free guides
                <IconArrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
