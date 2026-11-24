"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

/** Rocket button, bottom corner. Appears after scrolling down; click returns to the top. */
export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top / العودة لأعلى الصفحة"
      tabIndex={show ? 0 : -1}
      className={`btn-grad fixed bottom-6 left-5 z-40 grid h-12 w-12 place-items-center rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 sm:left-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Icon name="rocket" size={22} />
    </button>
  );
}
