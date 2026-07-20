import Image from "next/image";

export default function AboutIllustration() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1760795301432-6faa33ca88a8?auto=format&fit=crop&w=1600&h=1200&q=90"
        alt="Lion Capital of Ashoka — Satyameva Jayate, the National Emblem of India"
        fill
        quality={90}
        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 58vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <p className="text-lg font-semibold tracking-wide text-white sm:text-xl">
          सत्यमेव जयते
        </p>
        <p className="mt-1 text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
          Satyameva Jayate · Truth alone triumphs
        </p>
      </div>
    </div>
  );
}
