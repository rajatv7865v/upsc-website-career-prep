"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootError({
  error,
  reset,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
  unstable_retry?: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  const handleRetry = () => {
    if (typeof unstable_retry === "function") {
      unstable_retry();
    } else if (typeof reset === "function") {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12 text-center">
      <div className="max-w-md w-full rounded-2xl bg-white p-8 text-center shadow-sm border border-black/10">
        <h2 className="text-xl font-bold text-black">Unable to load this section</h2>
        <p className="mt-2 text-sm text-[#555]">
          We encountered an issue loading this content. Please try again.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleRetry}
            className="inline-flex items-center justify-center rounded-md bg-[#1d4ed8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e40af] cursor-pointer"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-black/20 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black/5"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
