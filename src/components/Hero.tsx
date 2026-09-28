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

          {latest && (
            <Link
              href={`/blog/${latest.slug}`}
              className="group mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs text-white/90 backdrop-blur-xs transition-colors hover:border-white/40 hover:bg-white/15"
            >
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
              <span className="shrink-0 font-semibold text-white">Latest article:</span>
              <span className="truncate text-white/80 group-hover:text-white">
                {latest.title}
              </span>
              <IconArrow className="h-3 w-3 shrink-0 text-white/60 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}

          <h1 className="hero-headline">
            Simple notes to understand the world around you.
          </h1>

          <p className="hero-support">
            Short, easy-to-read articles on geography, economy, polity, and
            daily news — helpful whether you are preparing for exams or simply
            want to stay informed.
          </p>

          <div className="hero-actions">
            {latest && (
              <Link
                href={`/blog/${latest.slug}`}
                className="hero-btn-primary footer-cta-shine"
              >
                Read latest article
                <IconArrow className="ml-2 inline h-4 w-4" />
              </Link>
            )}
            <Link href="#latest-articles" className="hero-btn-ghost">
              Explore library
              <span className="hero-btn-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>

          {/* Quick Section Anchor Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 text-xs">
            <span className="text-white/60 font-medium">Quick jump:</span>
            <Link
              href="#latest-articles"
              className="rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur-xs transition-colors hover:bg-white/20 hover:text-white"
            >
              Latest articles
            </Link>
            <Link
              href="#trending-articles"
              className="rounded-full bg-amber-500/20 px-3 py-1 text-amber-300 backdrop-blur-xs transition-colors hover:bg-amber-500/30 hover:text-amber-200"
            >
              🔥 Trending
            </Link>
            <Link
              href="#favourite-articles"
              className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200 backdrop-blur-xs transition-colors hover:bg-blue-500/30 hover:text-white"
            >
              ⭐ Favourites
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
        href="#latest-articles"
        className="hero-scroll"
        aria-label="Scroll to latest articles"
      >
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
