"use client";

import { useState } from "react";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  IconBook,
  IconBriefcase,
  IconCalendar,
  IconClipboard,
  IconCompass,
  IconGlobe,
  IconHelp,
  IconLayers,
  IconMic,
  IconNewspaper,
  IconPen,
  IconPhone,
  IconRefresh,
  IconSearch,
  IconUsers,
} from "@/components/Icons";
import { siteContact } from "@/data/site";

const faqs = [
  {
    q: "Who is Career Prepp for?",
    a: "Anyone who wants clear, free notes on current affairs — working professionals, curious readers, and serious exam aspirants alike.",
    icon: IconUsers,
  },
  {
    q: "Do I need to sign up to read articles?",
    a: "No account is required. Open the home page, pick a headline, and read. Everything in the article library is free.",
    icon: IconNewspaper,
  },
  {
    q: "Why are all articles on the home page?",
    a: "So you can start reading immediately — no digging through menus or filters. Subject tabs and stage filters are there when you want more structure.",
    icon: IconSearch,
  },
  {
    q: "Is this only for civil services?",
    a: "No. The tone is knowledge-first. Syllabus, strategy, PYQ, and notification pages exist if you want exam structure later.",
    icon: IconGlobe,
  },
  {
    q: "What is the difference between Prelims and Mains notes?",
    a: "Prelims notes focus on facts, maps, schemes, and locations. Mains notes frame issues with arguments, stakeholders, and a clear way forward.",
    icon: IconClipboard,
  },
  {
    q: "How are articles organised?",
    a: "By topic (Geography, Economy, Polity, and more) and by stage when relevant. The same note can appear on the home feed and under a subject tab.",
    icon: IconLayers,
  },
  {
    q: "I work full-time — is this useful for me?",
    a: "Yes. Notes are short and readable in limited hours. Many readers finish one or two articles on a commute or during a lunch break.",
    icon: IconBriefcase,
  },
  {
    q: "How often is new content added?",
    a: "Notes are added and updated gradually — usually weekly. The home page always shows the latest edition first.",
    icon: IconRefresh,
  },
  {
    q: "Are syllabus and strategy pages complete?",
    a: "They are a starting reference drawn from official sources and will grow over time. Everyday reading stays on current affairs articles.",
    icon: IconBook,
  },
  {
    q: "Can I suggest a topic or report a gap?",
    a: "Yes. Use the Contact page, WhatsApp, or Telegram. We read every message and add notes based on what readers ask for.",
    icon: IconPen,
  },
  {
    q: "Do you sell courses or paid batches?",
    a: "No. Career Prepp is a free reading library. There are no hidden paywalls on articles.",
    icon: IconCompass,
  },
  {
    q: "How do I stay updated when a new article drops?",
    a: "Join our Telegram channel or follow on WhatsApp for alerts. You can also bookmark the home page and check the latest edition.",
    icon: IconCalendar,
  },
];

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs" className="faq-section scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="faq-section-head">
          <div className="faq-section-intro">
            <p className="section-label inline-flex items-center gap-2">
              <AnimatedIcon
                icon={IconHelp}
                variant="bob"
                tone="light"
                size="sm"
              />
              FAQs
            </p>
            <h2 className="section-title">Common questions.</h2>
            <p className="section-text">
              Answers about reading, articles, subjects, and how Career Prepp
              fits into your routine — whether you prepare for an exam or read
              for interest.
            </p>
          </div>

          <div className="faq-section-actions">
            <a
              href={siteContact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-action faq-action-outline"
            >
              <IconMic className="h-4 w-4" />
              Join Telegram
            </a>
            <a
              href={siteContact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-action faq-action-solid"
            >
              <IconPhone className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            const Icon = item.icon;
            return (
              <article
                key={item.q}
                className={`faq-item ${open ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span className="faq-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-trigger-icon" aria-hidden>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="faq-question">{item.q}</span>
                  <span className="faq-chevron" aria-hidden>
                    {open ? "−" : "+"}
                  </span>
                </button>

                <div className="faq-panel" hidden={!open}>
                  <p className="faq-answer">{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
