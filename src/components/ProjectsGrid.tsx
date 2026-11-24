"use client";

import Link from "next/link";
import { useState } from "react";
import { projects, ui, type Category } from "@/data/content";
import { Icon } from "./Icons";
import { ProjectCover } from "./ProjectCover";
import { T } from "./T";

type Filter = "all" | Category;

const filters: Filter[] = ["all", "fullstack", "frontend"];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = projects.filter((p) => filter === "all" || p.category === filter);
  const iconBtn =
    "social-btn grid h-10 w-10 place-items-center rounded-xl border border-line bg-canvas";

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-xl border px-6 py-2.5 font-medium transition-all hover:-translate-y-0.5 ${
              filter === f
                ? "btn-grad border-transparent"
                : "border-line bg-surface text-fg hover:border-accent hover:text-accent"
            }`}
          >
            <T v={ui.projects.filters[f]} />
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article
            key={`${filter}-${p.slug}`}
            className="card-in card-hover flex flex-col overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <Link
              href={`/projects/${p.slug}`}
              aria-label={`${p.title.en}: ${ui.projects.details.en}`}
              className="group block overflow-hidden border-b border-line bg-canvas"
            >
              <div className="transition-transform duration-500 group-hover:scale-105">
                <ProjectCover project={p} />
              </div>
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title.en}: ${ui.projects.source.en}`}
                      className={iconBtn}
                    >
                      <Icon name="github" size={18} />
                    </a>
                  ) : null}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title.en}: ${ui.projects.liveDemo.en}`}
                      className={iconBtn}
                    >
                      <Icon name="eye" size={18} />
                    </a>
                  ) : null}
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                  <T v={ui.projects.categories[p.category]} />
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold">
                <T v={p.title} />
              </h3>
              <p className="mt-2 flex-1 text-muted">
                <T v={p.tagline} />
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" dir="ltr">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-lg bg-canvas px-2.5 py-1 text-xs text-muted">
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm">
                <span className="text-muted">
                  {p.year}
                  {p.status ? (
                    <>
                      {" "}
                      <span aria-hidden="true">/</span> <T v={p.status} />
                    </>
                  ) : null}
                </span>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline underline-offset-4"
                >
                  <T v={ui.projects.details} />
                  <Icon name="arrowRight" size={16} className="rtl:-scale-x-100" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
