"use client";

import { useEffect, useState } from "react";
import { navItems, ui } from "@/data/content";
import { Icon } from "./Icons";
import { LangToggle } from "./LangToggle";
import { ThemeToggle } from "./ThemeToggle";
import { T } from "./T";

/** Sticky header. `home` is true on the home page, where links are in-page anchors and the current section is underlined. */
export function Header({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    if (!home) return;
    const els = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [home]);

  const href = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl">
      <a
        href="#main-content"
        className="absolute -top-20 start-4 rounded-md btn-grad px-4 py-2 text-sm font-medium focus:top-3"
      >
        <T v={ui.skipToContent} />
      </a>
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href={home ? "#hero" : "/"}
          aria-label="Abdallah Anwar, home"
          className="flex items-center gap-3 text-xl font-bold"
        >
          <span className="btn-grad grid h-11 w-11 place-items-center rounded-xl">
            <Icon name="code" size={22} />
          </span>
          <span className="grad-text hidden sm:inline">
            <T v={{ en: "Abdallah Anwar", ar: "عبدالله أنور" }} />
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => {
            const on = home && active === n.id;
            return (
              <a
                key={n.id}
                href={href(n.id)}
                aria-current={on ? "true" : undefined}
                className={`nav-link relative px-4 py-2 text-[0.95rem] font-medium transition-colors hover:text-accent ${
                  on ? "text-accent" : "text-fg"
                }`}
              >
                <T v={n.label} />
                <span className="nav-line" aria-hidden="true" data-on={on ? "" : undefined} />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LangToggle className="rounded-xl border border-line bg-surface px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu / القائمة"
            className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-surface lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-canvas px-5 py-3 lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={href(n.id)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 ${
                    home && active === n.id ? "bg-surface font-medium text-accent" : "text-muted"
                  }`}
                >
                  <T v={n.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
