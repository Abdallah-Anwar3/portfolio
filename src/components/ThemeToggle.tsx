"use client";

/** Switch-style toggle. The knob slides and shows a moon (dark) or sun (light); CSS in globals.css does the rest. */
export function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the switch still works for this visit */
    }
  }

  const svg = {
    viewBox: "0 0 24 24",
    width: 14,
    height: 14,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative h-8 w-14 shrink-0 rounded-full border border-line bg-surface transition-colors hover:border-accent"
      aria-label="Switch between dark and light mode / التبديل بين الوضع الداكن والفاتح"
    >
      <span className="switch-knob btn-grad absolute top-[3px] grid h-6 w-6 place-items-center rounded-full">
        <svg {...svg} className="k-moon">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        <svg {...svg} className="k-sun">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>
    </button>
  );
}
