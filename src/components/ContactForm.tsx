"use client";

import { useState, type FormEvent } from "react";
import { IconArrow } from "@/components/Icons";

const stages = ["Prelims", "Mains", "Interview", "General / undecided"];
const reasons = [
  "Question about a guide",
  "Topic / article request",
  "Correction or feedback",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const stage = String(data.get("stage") || "");
    const reason = String(data.get("reason") || "");
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Career Prepp — ${reason || "message"} (${stage || "UPSC"})`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Stage: ${stage}`,
        `Reason: ${reason}`,
        "",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:hello@careerprepp.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="contact-form space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="contact-field">
          <span>Full name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="contact-field">
          <span>Phone / WhatsApp (optional)</span>
          <input
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
          />
        </label>
        <label className="contact-field">
          <span>Your stage</span>
          <select name="stage" required defaultValue="">
            <option value="" disabled>
              Select stage
            </option>
            {stages.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="contact-field">
        <span>Reason for writing</span>
        <select name="reason" required defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {reasons.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>

      <label className="contact-field">
        <span>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Ask a question, request a free guide topic, or share feedback…"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 bg-blue px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-blue-hover sm:w-auto"
      >
        Send message
        <IconArrow className="h-4 w-4" />
      </button>

      {sent && (
        <p className="text-sm text-muted">
          Your email app should open with the message filled in. If it does not,
          write to{" "}
          <a
            href="mailto:hello@careerprepp.com"
            className="font-medium text-blue"
          >
            hello@careerprepp.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
