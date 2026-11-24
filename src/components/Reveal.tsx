"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

/**
 * Wraps a block so it "loads in" (fade, rise, un-blur) when it scrolls into view.
 * The visible state is React state, so server and client markup match and hydration stays clean.
 * CSS (globals.css) only hides these blocks when the `js` class is on <html>, so content
 * is never stuck invisible without JavaScript or with reduced motion.
 */
export function Reveal({
  as,
  delay = 0,
  variant = "up",
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  variant?: "up" | "zoom" | "fade";
  className?: string;
  children: ReactNode;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-in={shown ? "" : undefined}
      style={{ "--d": `${delay}ms` } as CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}
