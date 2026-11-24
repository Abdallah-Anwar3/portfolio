import Image from "next/image";
import { experience, profile, projects, skills, ui, type L } from "@/data/content";
import { aboutExtra, experienceIcons, skillCards, toolTiles } from "@/data/extra";
import { BackToTop } from "@/components/BackToTop";
import { ContactForm } from "@/components/ContactForm";
import { CountUp } from "@/components/CountUp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Icon, TechIcon, type IconName } from "@/components/Icons";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";

export default function Home() {
  return (
    <>
      <Header home />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer home />
      <BackToTop />
    </>
  );
}

/** Splits "Skills and technologies" into plain words plus a gradient last word, per language. */
function GradTitle({ v }: { v: L }) {
  const part = (s: string) => {
    const i = s.lastIndexOf(" ");
    return i < 0 ? ["", s] : [s.slice(0, i + 1), s.slice(i + 1)];
  };
  const [enHead, enTail] = part(v.en);
  const [arHead, arTail] = part(v.ar);
  return (
    <>
      <span data-l="en" lang="en">
        {enHead}
        <span className="grad-text">{enTail}</span>
      </span>
      <span data-l="ar" lang="ar">
        {arHead}
        <span className="grad-text">{arTail}</span>
      </span>
    </>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: L; title: L }) {
  return (
    <Reveal className="text-center">
      <p className="text-sm font-medium text-muted">
        <T v={eyebrow} />
      </p>
      <h2 className="tight mt-2 text-4xl font-bold sm:text-5xl">
        <GradTitle v={title} />
      </h2>
      <span className="title-bar mx-auto mt-5 block h-1 w-24 rounded-full" aria-hidden="true" />
    </Reveal>
  );
}

const orbit: { icon: IconName; pos: string; delay: string; size: string }[] = [
  { icon: "atom", pos: "top-[10%] right-[6%]", delay: "0s", size: "h-14 w-14" },
  { icon: "database", pos: "top-[26%] left-[2%]", delay: "-1.2s", size: "h-14 w-14" },
  { icon: "code", pos: "top-[48%] left-[-4%]", delay: "-2.4s", size: "h-16 w-16" },
  { icon: "server", pos: "bottom-[8%] right-[2%]", delay: "-3.4s", size: "h-14 w-14" },
];

function Hero() {
  const photo = profile.photo;
  return (
    <section id="hero" className="hero-bg relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal delay={0}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <T v={ui.hero.badge} />
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-xl text-muted">
              <T v={ui.hero.hello} /> <span aria-hidden="true">👋</span>
            </p>
            <h1 className="grad-text tight mt-1 pb-2 text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.1]">
              <T v={profile.name} />
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface py-2 pe-5 ps-2 text-lg font-semibold">
              <span className="btn-grad grid h-9 w-9 place-items-center rounded-xl">
                <Icon name="code" size={18} />
              </span>
              <T v={profile.title} />
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-[46ch] text-lg">
              <T v={profile.role} />
            </p>
            <p className="mt-2 max-w-[46ch] text-muted">
              <T v={profile.intro} />
            </p>
          </Reveal>
          <Reveal delay={400} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-grad inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-medium"
            >
              <T v={ui.hero.viewWork} />
              <Icon name="arrowRight" size={18} className="rtl:-scale-x-100" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-7 py-3.5 font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <T v={ui.hero.getInTouch} />
              <Icon name="send" size={18} className="rtl:-scale-x-100" />
            </a>
          </Reveal>
          <Reveal delay={500}>
            <ul className="mt-10 flex flex-wrap gap-3" dir="ltr">
              {profile.heroTech.map((t) => (
                <li
                  key={t}
                  className="chip-hover inline-flex items-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-2.5 text-sm font-medium"
                >
                  {t}
                  <span className="text-accent">
                    <TechIcon name={t} size={20} />
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={200}>
          <div className="relative mx-auto aspect-square w-[min(84vw,27rem)]">
            <span className="ring-dashed absolute inset-0 rounded-full border border-dashed border-accent/40" aria-hidden="true" />
            <span className="absolute inset-[10%] rounded-full border border-accent/25" aria-hidden="true" />
            <div className="photo-ring absolute inset-[15%] rounded-full p-1.5">
              <Image
                src={photo.src}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
                priority
                sizes="(min-width: 1024px) 340px, 70vw"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            {orbit.map((o) => (
              <span
                key={o.icon}
                aria-hidden="true"
                style={{ animationDelay: o.delay }}
                className={`float absolute ${o.pos} ${o.size} grid place-items-center rounded-2xl border border-line bg-surface/90 text-accent shadow-lg backdrop-blur`}
              >
                <Icon name={o.icon} size={26} />
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="mx-auto mb-8 flex w-fit flex-col items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <T v={ui.hero.discover} />
        <span className="mouse" aria-hidden="true">
          <span className="mouse-dot" />
        </span>
      </a>
    </section>
  );
}

function CodeCard() {
  const k = "text-[#4ade80]"; // keys
  const s = "text-[#fbbf24]"; // strings
  const kw = "text-[#c084fc]"; // keywords
  const v = "text-[#38bdf8]"; // names and booleans
  const c = "text-[#64748b]"; // comments
  return (
    <div dir="ltr" className="overflow-hidden rounded-2xl border border-line bg-[#0b1224] text-[#e2e8f0] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-5 py-3">
        <span className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
          <span className="h-3 w-3 rounded-full bg-[#facc15]" />
          <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
        </span>
        <span className="text-sm text-[#94a3b8]">abdallah.js</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
        <code>
          <span className={c}>{"// who I am, in short"}</span>
          {"\n"}
          <span className={kw}>const</span> <span className={v}>abdallah</span> = {"{"}
          {"\n  "}
          <span className={k}>name</span>: <span className={s}>&quot;Abdallah Anwar&quot;</span>,{"\n  "}
          <span className={k}>title</span>: <span className={s}>&quot;Full-Stack Developer&quot;</span>,{"\n  "}
          <span className={k}>studies</span>: <span className={s}>&quot;Computer Science, Zagazig University&quot;</span>,
          {"\n  "}
          <span className={k}>location</span>: <span className={s}>&quot;Egypt&quot;</span>,{"\n  "}
          <span className={k}>stack</span>: [<span className={s}>&quot;React&quot;</span>,{" "}
          <span className={s}>&quot;Next.js&quot;</span>, <span className={s}>&quot;Node.js&quot;</span>],{"\n  "}
          <span className={k}>databases</span>: [<span className={s}>&quot;MongoDB&quot;</span>,{" "}
          <span className={s}>&quot;MySQL&quot;</span>, <span className={s}>&quot;PostgreSQL&quot;</span>],{"\n  "}
          <span className={k}>openTo</span>: [<span className={s}>&quot;internships&quot;</span>,{" "}
          <span className={s}>&quot;junior roles&quot;</span>],{"\n  "}
          <span className={k}>available</span>: <span className={v}>true</span>
          {"\n"}
          {"};"}
          {"\n\n"}
          <span className={kw}>export default</span> <span className={v}>abdallah</span>;
        </code>
      </pre>
    </div>
  );
}

function About() {
  const techCount = new Set(skills.flatMap((s) => s.items)).size;
  const stats: { value: number; label: L }[] = [
    { value: projects.length, label: ui.about.stats.projects },
    { value: projects.filter((p) => p.live).length, label: ui.about.stats.demos },
    { value: techCount, label: ui.about.stats.tech },
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead eyebrow={ui.about.eyebrow} title={ui.about.title} />
      <div className="mt-16 grid items-start gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Reveal>
            <CodeCard />
          </Reveal>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label.en} delay={i * 100}>
                <div className="card-hover rounded-2xl border border-line bg-surface p-4 text-center">
                  <p className="grad-text text-3xl font-extrabold sm:text-4xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    <T v={s.label} />
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <ul className="mt-6 flex gap-3">
              {profile.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={l.label}
                    className="social-btn grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface"
                  >
                    <Icon name={l.kind} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h3 className="tight text-3xl font-bold sm:text-4xl">
              <T v={aboutExtra.headline} />
            </h3>
            <div className="mt-6 flex max-w-[60ch] flex-col gap-4 text-lg text-muted">
              {profile.about.en.map((_, i) => (
                <p key={i}>
                  <T v={{ en: profile.about.en[i], ar: profile.about.ar[i] }} />
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-6 flex flex-wrap gap-3">
              {aboutExtra.pills.map((p) => (
                <li
                  key={p.label.en}
                  className="chip-hover inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2 text-sm font-medium"
                >
                  <span className="text-accent">
                    <Icon name={p.icon} size={18} />
                  </span>
                  <T v={p.label} />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <div className="card-hover mt-8 rounded-2xl border border-line bg-surface p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold">
                <span className="text-accent">
                  <Icon name="rocket" size={22} />
                </span>
                <T v={ui.about.offer} />
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {profile.services.map((s) => (
                  <li key={s.en} className="flex items-start gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full btn-grad" aria-hidden="true" />
                    <span>
                      <T v={s} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHead eyebrow={ui.skills.eyebrow} title={ui.skills.title} />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 100}>
              <div className="card-hover h-full rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold" dir="ltr">
                    {c.name}
                  </h3>
                  <span className="text-accent">
                    <TechIcon name={c.name} size={32} />
                  </span>
                </div>
                <span className="skill-line mt-4 block h-1.5 rounded-full" aria-hidden="true" />
                <p className="mt-4 text-muted">
                  <T v={c.desc} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4" dir="ltr">
          {toolTiles.map((t, i) => (
            <Reveal as="li" key={t} delay={(i % 4) * 80}>
              <div className="card-hover flex flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-6">
                <span className="text-accent">
                  <TechIcon name={t} size={34} />
                </span>
                <span className="font-medium">{t}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead eyebrow={ui.projects.eyebrow} title={ui.projects.title} />
      <Reveal delay={100} className="mt-14">
        <ProjectsGrid />
      </Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-y border-line bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHead eyebrow={ui.experience.eyebrow} title={ui.experience.title} />
        <ol className="timeline relative mt-16">
          {experience.map((e, i) => (
            <li key={e.title.en} className="relative pb-12 ps-12 last:pb-0 md:ps-0">
              <span className="timeline-dot absolute top-8 h-4 w-4 rounded-full btn-grad ring-4 ring-canvas" aria-hidden="true" />
              <Reveal delay={i * 120} className={`md:w-[calc(50%-3rem)] ${i % 2 === 1 ? "md:ms-auto" : ""}`}>
                <div className="card-hover rounded-2xl border border-line bg-surface p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-accent">
                      <Icon name={experienceIcons[i] ?? "briefcase"} size={26} />
                    </span>
                    <span className="rounded-lg bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                      <T v={e.when} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">
                    <T v={e.title} />
                  </h3>
                  <p className="font-medium text-accent">
                    <T v={e.place} />
                  </p>
                  <p className="mt-3 text-muted">
                    <T v={e.note} />
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: L;
  children: React.ReactNode;
}) {
  return (
    <li className="card-hover flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
      <span className="btn-grad grid h-12 w-12 shrink-0 place-items-center rounded-xl">
        <Icon name={icon} size={22} />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-muted">
          <T v={label} />
        </p>
        <div className="font-medium">{children}</div>
      </div>
    </li>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHead eyebrow={ui.contact.eyebrow} title={ui.contact.title} />
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="max-w-[44ch] text-lg">
            <T v={profile.contactLead} />
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            <InfoRow icon="mail" label={ui.contact.email}>
              <a href={`mailto:${profile.email}`} dir="ltr" className="inline-block whitespace-nowrap hover:text-accent">
                {profile.email}
              </a>
            </InfoRow>
            <InfoRow icon="whatsapp" label={ui.contact.whatsapp}>
              <a
                href={profile.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                dir="ltr"
                className="inline-block hover:text-accent"
              >
                {profile.whatsapp.display}
              </a>
            </InfoRow>
            <InfoRow icon="pin" label={ui.contact.location}>
              <T v={profile.location} />
            </InfoRow>
          </ul>
          <p className="mt-8 text-sm text-muted">
            <T v={ui.contact.follow} />
          </p>
          <ul className="mt-3 flex gap-3">
            {profile.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  className="social-btn grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface"
                >
                  <Icon name={l.kind} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
