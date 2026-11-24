import { navItems, profile, ui } from "@/data/content";
import { Icon } from "./Icons";
import { T } from "./T";

/** `home` is true on the home page, where links are in-page anchors. */
export function Footer({ home = false }: { home?: boolean }) {
  const href = (id: string) => (home ? `#${id}` : `/#${id}`);
  const link = "inline-flex items-center gap-2.5 text-muted transition-colors hover:text-accent";
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="grad-text text-2xl font-bold">
            <T v={profile.name} />
          </p>
          <p className="mt-3 max-w-[40ch] text-muted">
            <T v={profile.footerBio} />
          </p>
          <ul className="mt-6 flex gap-3">
            {profile.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  className="social-btn grid h-10 w-10 place-items-center rounded-full border border-line"
                >
                  <Icon name={l.kind} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="font-bold">
            <T v={ui.footer.links} />
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {navItems.map((n) => (
              <li key={n.id}>
                <a href={href(n.id)} className="text-muted transition-colors hover:text-accent">
                  <T v={n.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="font-bold">
            <T v={ui.footer.reach} />
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href={`mailto:${profile.email}`} className={`${link} whitespace-nowrap`} dir="ltr">
                <Icon name="mail" size={18} />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className={`${link} whitespace-nowrap`}
                dir="ltr"
              >
                <Icon name="whatsapp" size={18} />
                {profile.whatsapp.display}
              </a>
            </li>
            <li className="inline-flex items-center gap-2.5 text-muted">
              <Icon name="pin" size={18} />
              <T v={profile.location} />
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted sm:px-8">
          &copy; 2026 <T v={profile.name} />. <T v={ui.footer.built} />
        </p>
      </div>
    </footer>
  );
}
