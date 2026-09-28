"use client";

import Link from "next/link";
import { siteContact } from "@/data/site";

import {
  IconInstagram,
  IconTelegram,
  IconWhatsApp,
  IconYouTube,
} from "@/components/Icons";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/geography", label: "Geography" },
  { href: "/geography?stage=Prelims", label: "Geography Prelims", nested: true },
  { href: "/geography?stage=Mains", label: "Geography Mains", nested: true },
  { href: "/environment", label: "Environment" },
  { href: "/environment?stage=Prelims", label: "Environment Prelims", nested: true },
  { href: "/environment?stage=Mains", label: "Environment Mains", nested: true },
  { href: "/science-tech", label: "Science & Tech" },
  { href: "/science-tech/biotechnology", label: "Biotechnology & Bioinformatics", nested: true },
  { href: "/science-tech/nanotechnology", label: "Nanotechnology & 2D Materials", nested: true },
  { href: "/science-tech?stage=Prelims", label: "Science & Tech Prelims", nested: true },
  { href: "/science-tech?stage=Mains", label: "Science & Tech Mains", nested: true },
];

const resources = [
  { href: "/blog", label: "All Blog Articles" },
  { href: "/science-tech/biotechnology", label: "Biotech & Genomics Hub" },
  { href: "/science-tech/nanotechnology", label: "Nanotechnology & 2D Materials Hub" },
  { href: "/contact", label: "Contact Us" },
];

const socials = [
  {
    label: "Instagram",
    href: siteContact.instagram,
    icon: <IconInstagram className="h-4 w-4" />,
  },
  {
    label: "YouTube",
    href: siteContact.youtube,
    icon: <IconYouTube className="h-4 w-4" />,
  },
  {
    label: "Telegram",
    href: siteContact.telegram,
    icon: <IconTelegram className="h-4 w-4" />,
  },
  {
    label: "WhatsApp",
    href: siteContact.whatsapp,
    icon: <IconWhatsApp className="h-4 w-4" />,
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
