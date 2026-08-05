import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { examNotifications } from "@/data/notifications";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Government Exam Notifications | Career Prepp",
  description:
    "Linked government exam notifications — UPSC, SSC, IBPS, RRB and more. Opens the official source.",
};

export default function NotificationsPage() {
  return (
    <>
      <Header forceSolid />
      <main className="flex-1">
        <section className="border-b border-line bg-black py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="section-label !text-blue-soft">Notifications</p>
            <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Government exam notifications.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/65">
              Curated links to official notices. Always verify on the source
              website before applying or downloading.
            </p>
          </div>
        </section>

        <section className="bg-surface py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ul className="grid gap-4 lg:grid-cols-2">
              {examNotifications.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-card group flex h-full flex-col"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="border border-line px-2 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase">
                        {item.tag}
                      </span>
                      <span className="text-xs text-muted">{item.exam}</span>
                      <span className="text-xs text-muted">· {item.date}</span>
                    </div>
                    <h2 className="cp-card-title">{item.title}</h2>
                    <p className="cp-card-text flex-1">{item.body}</p>
                    <span className="cp-card-link">
                      Open on {item.source}
                      <IconArrow className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
