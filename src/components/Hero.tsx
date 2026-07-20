import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="hero relative min-h-[100svh] overflow-hidden bg-black">
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

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-32 sm:pb-28 lg:justify-center lg:px-8 lg:pb-32 lg:pt-28">
        <div className="hero-content max-w-3xl">
          <div className="hero-brand-row">
            <span className="hero-brand-rule" aria-hidden />
            <div>
              <p className="hero-eyebrow">UPSC · Free knowledge</p>
              <p className="hero-brand">
                Career <span>Prepp</span>
              </p>
            </div>
          </div>

          <h1 className="hero-headline">
            Free Current Affairs for UPSC — Geography &amp; Mains.
          </h1>

          <p className="hero-support">
            Open briefs that turn newspapers into exam notes: maps and
            environment for Geography, analysis and examples for Mains. No
            courses to buy.
          </p>

          <div className="hero-actions">
            <Link
              href="#ca-geography"
              className="hero-btn-primary footer-cta-shine"
            >
              Geography CA
              <IconArrow className="ml-2 inline h-4 w-4" />
            </Link>
            <Link href="#ca-mains" className="hero-btn-ghost">
              Mains CA
              <span className="hero-btn-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-footer-bar" aria-hidden>
        <span>Raisina Hill · New Delhi</span>
        <span className="hero-footer-dot" />
        <span>Free forever</span>
      </div>

      <a
        href="#current-affairs"
        className="hero-scroll"
        aria-label="Scroll to Current Affairs"
      >
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
