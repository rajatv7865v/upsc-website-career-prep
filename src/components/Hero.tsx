import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";
import type { BlogPost } from "@/data/blog";

type Props = {
  latest?: BlogPost | null;
};

export default function Hero({ latest }: Props) {

  return (
    <section className="hero relative min-h-[82svh] overflow-hidden bg-black lg:min-h-[76svh]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1666272506564-f9a8a9f667ab?auto=format&fit=crop&w=2400&h=1350&q=90"
          alt="North and South Block Secretariat on Kartavya Path, Raisina Hill, New Delhi"
          fill
          priority
          quality={92}
          className="hero-image object-cover object-[center_38%]"
          sizes="100vw"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="hero-aurora absolute inset-0" aria-hidden />
        <div className="hero-grain absolute inset-0" aria-hidden />
        <div className="hero-frame absolute inset-0" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 sm:pb-24 lg:min-h-[76svh] lg:justify-center lg:px-8 lg:pb-28 lg:pt-28">
        <div className="hero-content max-w-3xl">
          <div className="hero-brand-row">
            <span className="hero-brand-rule" aria-hidden />
            <div>
              <p className="hero-brand">
                Career <span>Prepp</span>
              </p>
            </div>
          </div>

          <h1 className="hero-headline">
            Clear notes on the world around you.
          </h1>

          <p className="hero-support">
            Short, readable articles on geography, economy, polity, and today’s
            headlines — useful whether you are preparing for something specific
            or simply want to stay informed.
          </p>

          <div className="hero-actions">
            {latest && (
              <Link
                href={`/blog/${latest.slug}`}
                className="hero-btn-primary footer-cta-shine"
              >
                Latest article
                <IconArrow className="ml-2 inline h-4 w-4" />
              </Link>
            )}
            <Link href="#articles" className="hero-btn-ghost">
              Latest articles
              <span className="hero-btn-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-footer-bar" aria-hidden>
        <span>Knowledge first</span>
        <span className="hero-footer-dot" />
        <span>Free to read</span>
      </div>

      <a
        href="#articles"
        className="hero-scroll"
        aria-label="Scroll to latest articles"
      >
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
