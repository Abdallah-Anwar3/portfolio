"use client";

import { T } from "./T";
import { ui } from "@/data/content";

export function LangToggle({ className }: { className?: string }) {
  function toggle() {
    const next = document.documentElement.lang === "ar" ? "en" : "ar";
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", next);
    } catch {
      /* storage can be blocked; the switch still works for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={className}
      aria-label="Switch language / تبديل اللغة"
    >
      <T v={ui.switchLang} />
    </button>
  );
}
