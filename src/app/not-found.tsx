import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[65vh] flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#1d4ed8]">404 error</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-base text-[#555]">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e40af]"
          >
            Back to home
          </Link>
          <Link
            href="/current-affairs"
            className="inline-flex items-center justify-center rounded-md border border-black/20 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black/5"
          >
            Browse articles
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
