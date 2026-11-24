"use client";

import { useState } from "react";
import { profile, ui } from "@/data/content";
import { FORM_ENDPOINT, formText } from "@/data/extra";
import { Icon } from "./Icons";
import { T } from "./T";

type Status = "idle" | "sending" | "sent" | "error";

/** Posts the message to FormSubmit, which forwards it to the inbox. No server code needed. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // bots fill the hidden field

    const isAr = document.documentElement.lang === "ar";
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: isAr ? ui.contact.form.subject.ar : ui.contact.form.subject.en,
          _replyto: data.get("email"),
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = (await res.json().catch(() => null)) as { success?: string | boolean } | null;
      if (res.ok && (json?.success === true || json?.success === "true")) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "mt-2 w-full rounded-xl border border-line bg-canvas px-4 py-3 outline-none transition-colors focus:border-accent";

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <label className="block text-sm font-medium">
        <T v={ui.contact.form.name} />
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="block text-sm font-medium">
        <T v={ui.contact.form.email} />
        <input required type="email" name="email" dir="ltr" autoComplete="email" className={field} />
      </label>
      <label className="block text-sm font-medium">
        <T v={ui.contact.form.message} />
        <textarea required name="message" rows={5} className={field} />
      </label>
      {/* Honeypot: hidden from people, filled by bots. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 py-3 font-medium disabled:opacity-60"
        >
          <T v={status === "sending" ? formText.sending : ui.contact.form.send} />
          <Icon name="send" size={18} className="rtl:-scale-x-100" />
        </button>
        <p className="text-sm text-muted">
          <T v={formText.note} />
        </p>
      </div>

      <div aria-live="polite">
        {status === "sent" ? (
          <p className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-500">
            <T v={formText.sent} />
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-400">
            <T v={formText.error} />{" "}
            <a href={`mailto:${profile.email}`} className="link-line font-medium">
              <T v={formText.emailMe} />
            </a>
          </p>
        ) : null}
      </div>
    </form>
  );
}
