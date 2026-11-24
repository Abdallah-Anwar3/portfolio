import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, ui } from "@/data/content";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icons";
import { ProjectCover } from "@/components/ProjectCover";
import { Reveal } from "@/components/Reveal";
import { Paragraphs, T } from "@/components/T";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.title.en} | Abdallah Anwar`,
    description: p.tagline.en,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  const index = projects.findIndex((x) => x.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header />
      <main id="main-content" className="hero-bg mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8">
        <a href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline underline-offset-4">
          <Icon name="arrowRight" size={16} className="-scale-x-100 rtl:scale-x-100" />
          <T v={ui.allProjects} />
        </a>

        <Reveal>
          <h1 className="grad-text tight mt-8 pb-2 text-5xl font-extrabold sm:text-7xl">
            <T v={p.title} />
          </h1>
          <p className="mt-3 max-w-[44ch] text-xl sm:text-2xl">
            <T v={p.tagline} />
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 flex flex-wrap items-center gap-4">
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 py-3 font-medium"
            >
              <Icon name="eye" size={18} />
              <T v={ui.projects.liveDemo} />
            </a>
          ) : null}
          {p.repo ? (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-7 py-3 font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <Icon name="github" size={18} />
              <T v={ui.projects.source} />
            </a>
          ) : null}
        </Reveal>

        <Reveal delay={150}>
          <dl className="mt-14 grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:grid-cols-12">
            <div className="sm:col-span-3">
              <dt className="text-sm text-muted">
                <T v={ui.meta.role} />
              </dt>
              <dd className="mt-1 font-medium">
                <T v={p.role} />
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm text-muted">
                <T v={ui.meta.year} />
              </dt>
              <dd className="mt-1 font-medium">
                {p.year}
                {p.status ? (
                  <>
                    {" "}
                    <span aria-hidden="true">/</span> <T v={p.status} />
                  </>
                ) : null}
              </dd>
            </div>
            <div className="sm:col-span-7">
              <dt className="text-sm text-muted">
                <T v={ui.meta.stack} />
              </dt>
              <dd className="mt-1 font-medium" dir="ltr" style={{ unicodeBidi: "plaintext" }}>
                {p.stack.join(", ")}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="mt-12 flex max-w-[62ch] flex-col gap-5 text-lg">
          <Paragraphs v={p.description} />
        </Reveal>

        <div className="mt-16 flex flex-col gap-14">
          {p.shots.length > 0 ? (
            p.shots.map((s) => (
              <Reveal as="figure" key={s.src}>
                <div className="overflow-hidden rounded-2xl border border-line bg-surface">
                  <Image
                    src={s.src}
                    width={s.width}
                    height={s.height}
                    alt={s.alt}
                    sizes="(min-width: 1152px) 1088px, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted">
                  <T v={s.caption} />
                </figcaption>
              </Reveal>
            ))
          ) : (
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-line">
                <ProjectCover project={p} />
              </div>
            </Reveal>
          )}
        </div>

        <Reveal className="mt-24 border-t border-line pt-8">
          <a href={`/projects/${next.slug}`} className="group inline-block">
            <span className="text-sm text-muted">
              <T v={ui.projects.eyebrow} />
            </span>
            <span className="tight mt-1 block text-3xl font-bold group-hover:text-accent sm:text-5xl">
              <T v={next.title} />
            </span>
          </a>
        </Reveal>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
