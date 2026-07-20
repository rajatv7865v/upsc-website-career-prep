"use client";

import Link from "next/link";

const explore = [
  { href: "/", label: "Home" },
  { href: "/#current-affairs", label: "Current Affairs" },
  { href: "/#ca-geography", label: "Geography", nested: true },
  { href: "/#ca-mains", label: "Mains", nested: true },
  { href: "/about", label: "About Us" },
  { href: "/#syllabus", label: "Syllabus & Pattern" },
  { href: "/syllabus/gs-paper-1", label: "GS Paper 1", nested: true },
  { href: "/syllabus/gs-paper-2", label: "GS Paper 2", nested: true },
  { href: "/syllabus/gs-paper-3", label: "GS Paper 3", nested: true },
  { href: "/syllabus/gs-paper-4", label: "GS Paper 4", nested: true },
  { href: "/syllabus/ir", label: "IR", nested: true },
  { href: "/syllabus/csat", label: "CSAT", nested: true },
  { href: "/syllabus/economy", label: "Economy", nested: true },
  { href: "/syllabus/environment", label: "Environment", nested: true },
  { href: "/syllabus/geography", label: "Geography", nested: true },
  { href: "/syllabus/science-tech", label: "Science & Tech", nested: true },
  { href: "/syllabus/history", label: "History", nested: true },
];

const resources = [
  { href: "/blog", label: "CA Blog" },
  { href: "/#resources", label: "Free Resources" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M22.5 7.2a3.1 3.1 0 0 0-2.2-2.2C18.4 4.5 12 4.5 12 4.5s-6.4 0-8.3.5A3.1 3.1 0 0 0 1.5 7.2 32.6 32.6 0 0 0 1 12a32.6 32.6 0 0 0 .5 4.8 3.1 3.1 0 0 0 2.2 2.2c1.9.5 8.3.5 8.3.5s6.4 0 8.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.6 32.6 0 0 0 23 12a32.6 32.6 0 0 0-.5-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M21.5 4.3 3.8 11.1c-1.2.5-1.2 1.1-.2 1.4l4.5 1.4 1.7 5.3c.2.6.4.8 1 .8.6 0 .8-.3 1.1-.6l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9L23 5.5c.3-1.3-.5-1.9-1.5-1.2Zm-3.2 3.2-8.8 7.9-.3 3.1-1.5-4.7 10.6-6.3Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8 lg:py-12">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Career Prepp
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Stay exam-ready with free Current Affairs.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
              Geography and Mains tracks — maps, environment, and answer-ready
              analysis for every aspirant.
            </p>
          </div>
          <Link
            href="/#current-affairs"
            className="footer-cta-shine inline-flex shrink-0 items-center justify-center bg-blue px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-hover"
          >
            Explore Current Affairs
          </Link>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="footer-brand text-xl font-semibold tracking-tight">
            Career <span className="footer-brand-mark text-blue">Prepp</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Free UPSC Current Affairs — Geography and Mains — plus strategy
            notes that link newspapers to the syllabus.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="footer-social flex h-10 w-10 items-center justify-center border border-white/20 text-white/80"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] text-white/90 uppercase">
            Explore
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {explore.map((link) => (
              <li key={link.href} className={link.nested ? "pl-3" : undefined}>
                <Link
                  href={link.href}
                  className={`footer-link text-sm ${link.nested ? "text-white/50" : "text-white/60"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] text-white/90 uppercase">
            Resources
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {resources.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link text-sm text-white/60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.18em] text-white/90 uppercase">
            Contact
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <li>
              <a href="mailto:hello@careerprepp.com" className="footer-link">
                hello@careerprepp.com
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="footer-link">
                +91 98765 43210
              </a>
            </li>
            <li className="leading-relaxed">New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Career Prepp. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="footer-link">
              Privacy
            </Link>
            <Link href="#" className="footer-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
