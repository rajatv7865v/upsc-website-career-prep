"use client";

import Link from "next/link";
import { siteContact } from "@/data/site";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/current-affairs", label: "Current Affairs" },
  { href: "/current-affairs?stage=Prelims", label: "Prelims", nested: true },
  { href: "/current-affairs?stage=Mains", label: "Mains", nested: true },
  { href: "/#syllabus", label: "Syllabus & Strategy" },
  // { href: "/syllabus", label: "Syllabus", nested: true },
  // { href: "/syllabus/prelims", label: "Prelims (GS + CSAT)", nested: true },
  // { href: "/syllabus/gs-paper-1", label: "GS Paper 1", nested: true },
  // { href: "/syllabus/gs-paper-2", label: "GS Paper 2", nested: true },
  // { href: "/syllabus/gs-paper-3", label: "GS Paper 3", nested: true },
  // { href: "/syllabus/gs-paper-4", label: "GS Paper 4", nested: true },
  // { href: "/strategy", label: "Strategy", nested: true },
  // { href: "/strategy/prelims", label: "Prelims strategy", nested: true },
  // { href: "/strategy/gs-paper-1", label: "GS Paper 1 strategy", nested: true },
  // { href: "/strategy/gs-paper-2", label: "GS Paper 2 strategy", nested: true },
  // { href: "/strategy/gs-paper-3", label: "GS Paper 3 strategy", nested: true },
  // { href: "/strategy/gs-paper-4", label: "GS Paper 4 strategy", nested: true },
  // { href: "/geography", label: "Geography" },
  // { href: "/geography?stage=Prelims", label: "Prelims", nested: true },
  // { href: "/geography?stage=Mains", label: "Mains", nested: true },
  // { href: "/economy", label: "Economy" },
  // { href: "/economy?stage=Prelims", label: "Prelims", nested: true },
  // { href: "/economy?stage=Mains", label: "Mains", nested: true },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/notifications", label: "Notifications" },
  { href: "/pyq", label: "Previous Year Questions" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  {
    label: "Instagram",
    href: siteContact.instagram,
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
    href: siteContact.youtube,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M22.5 7.2a3.1 3.1 0 0 0-2.2-2.2C18.4 4.5 12 4.5 12 4.5s-6.4 0-8.3.5A3.1 3.1 0 0 0 1.5 7.2 32.6 32.6 0 0 0 1 12a32.6 32.6 0 0 0 .5 4.8 3.1 3.1 0 0 0 2.2 2.2c1.9.5 8.3.5 8.3.5s6.4 0 8.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.6 32.6 0 0 0 23 12a32.6 32.6 0 0 0-.5-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: siteContact.telegram,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M21.5 4.3 3.8 11.1c-1.2.5-1.2 1.1-.2 1.4l4.5 1.4 1.7 5.3c.2.6.4.8 1 .8.6 0 .8-.3 1.1-.6l2.6-2.5 5.4 4c1 .5 1.7.2 2-.9L23 5.5c.3-1.3-.5-1.9-1.5-1.2Zm-3.2 3.2-8.8 7.9-.3 3.1-1.5-4.7 10.6-6.3Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: siteContact.whatsapp,
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.84c0 1.96.52 3.87 1.5 5.56L2 22l4.76-1.55a9.9 9.9 0 0 0 5.28 1.52h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 13.98c-.24.68-1.4 1.25-1.94 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.93-4.36-.14-.2-1.15-1.53-1.15-2.92 0-1.38.72-2.06.98-2.34.26-.28.56-.35.75-.35.19 0 .37 0 .53.01.17.01.4-.06.63.48.24.56.81 1.98.88 2.12.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.28.14.44.12.6-.07.17-.2.7-.81.89-1.09.19-.28.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-black text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8 lg:py-12">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-blue uppercase">
              Career Prepp
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Stay curious with free Current Affairs.
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
              Clear notes on geography, economy, polity, and today’s headlines.
            </p>
          </div>
          <Link
            href="/current-affairs"
            className="footer-cta-shine inline-flex shrink-0 items-center justify-center bg-blue px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-hover"
          >
            Explore Current Affairs
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="footer-brand text-xl font-semibold tracking-tight">
            Career <span className="footer-brand-mark text-blue">Prepp</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Free knowledge notes on current affairs and public life. The library
            grows gradually.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
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
              <li key={`${link.href}-${link.label}`} className={link.nested ? "pl-3" : undefined}>
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
              <a href={`mailto:${siteContact.email}`} className="footer-link">
                {siteContact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteContact.phoneTel}`} className="footer-link">
                {siteContact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteContact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={siteContact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

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
