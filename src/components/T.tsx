import type { L } from "@/data/content";

/** Renders both languages. CSS shows the one matching <html lang>. */
export function T({ v }: { v: L }) {
  return (
    <>
      <span data-l="en" lang="en">
        {v.en}
      </span>
      <span data-l="ar" lang="ar">
        {v.ar}
      </span>
    </>
  );
}

/** Paragraph list where each paragraph is bilingual. */
export function Paragraphs({
  v,
  className,
}: {
  v: { en: string[]; ar: string[] };
  className?: string;
}) {
  return (
    <>
      {v.en.map((_, i) => (
        <p key={i} className={className}>
          <T v={{ en: v.en[i], ar: v.ar[i] }} />
        </p>
      ))}
    </>
  );
}
