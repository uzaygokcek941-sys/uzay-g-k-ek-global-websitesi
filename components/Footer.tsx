import { SITE, FOOTER } from "./content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-950">
      <div className="mx-auto max-w-content px-5 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl text-white">{SITE.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-ember" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {FOOTER.tagline}
            </p>
            <a
              href={SITE.trSite}
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
            >
              Türkçe (TR) <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="sm:text-right">
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-accent hover:underline"
            >
              {SITE.email}
            </a>
            <p className="mt-1 text-sm text-slate-500">{SITE.phoneDisplay}</p>
            <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 sm:justify-end">
              {FOOTER.links.map((l) => (
                <a key={l.label} href={l.href} className="transition hover:text-slate-300">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 text-xs text-slate-600 sm:flex-row">
          <p>{FOOTER.copyright}</p>
          <p>{FOOTER.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
