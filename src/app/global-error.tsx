"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
  unstable_retry?: () => void;
}) {
  useEffect(() => {
    console.error("Global error caught:", error);
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
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-gray-50 p-6 font-sans text-gray-900">
        <div className="max-w-md w-full rounded-2xl bg-white p-8 text-center shadow-lg border border-gray-100">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600 text-2xl font-bold">
            !
          </div>
          <h2 className="text-xl font-bold text-gray-900">Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">
            An unexpected error occurred while loading this page.
          </p>
          {error?.digest && (
            <p className="mt-2 font-mono text-xs text-gray-400">
              Error ID: {error.digest}
            </p>
          )}
          <button
            type="button"
            onClick={handleRetry}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 cursor-pointer"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
