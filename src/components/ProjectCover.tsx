import Image from "next/image";
import type { Project } from "@/data/content";

/** The card image for a project: a screenshot, a logo, or a typographic tile. */
export function ProjectCover({ project }: { project: Project }) {
  const c = project.cover;

  if (c.type === "image") {
    return (
      <Image
        src={c.src}
        width={c.width}
        height={c.height}
        alt={project.shots[0]?.alt ?? project.title.en}
        sizes="(min-width: 1024px) 56vw, 100vw"
        className="h-auto w-full"
      />
    );
  }

  if (c.type === "logo") {
    return (
      <div
        className="grid aspect-[1600/808] place-items-center"
        style={{ background: c.background }}
      >
        <Image
          src={c.src}
          width={900}
          height={643}
          alt={`${project.title.en} logo`}
          sizes="(min-width: 1024px) 30vw, 60vw"
          className="h-3/4 w-auto"
        />
      </div>
    );
  }

  return (
    <div className="btn-grad grid aspect-[1600/808] place-items-center">
      <span
        aria-hidden="true"
        className="tight text-7xl font-bold text-white sm:text-8xl lg:text-9xl"
        dir="ltr"
      >
        {c.text}
      </span>
    </div>
  );
}
