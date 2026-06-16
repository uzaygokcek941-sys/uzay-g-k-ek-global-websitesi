import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import {
  SERVICES,
  SERVICES_HEADING,
  PRICING,
  PRICING_NOTE,
  SITE,
} from "./content";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-content px-5 py-24 lg:px-8">
      <SectionHeading
        overline="Services"
        lead={SERVICES_HEADING.lead}
        accent={SERVICES_HEADING.accent}
      />
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
        {SERVICES_HEADING.intro}
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const accentColor = s.adaptable ? "text-ember" : "text-accent";
          return (
            <article
              key={s.title}
              className="surface surface-hover flex flex-col p-6"
            >
              <div
                className={
                  s.adaptable
                    ? "grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-ember/10 text-ember"
                    : "chip-icon"
                }
              >
                <Icon name={s.icon} size={22} />
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.description}
              </p>

              <div className="mt-5 text-lg font-semibold text-white">
                {s.price}
              </div>

              {s.tags.length > 0 ? (
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {s.tags.join(" · ")}
                </p>
              ) : null}

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${accentColor} transition hover:gap-2.5`}
              >
                Learn more
                <ArrowRight size={15} strokeWidth={2} />
              </a>
            </article>
          );
        })}
      </div>

      {/* Pricing strip */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between">
          <p className="overline">{PRICING.overline}</p>
          <p className="text-xs text-slate-500">{PRICING.note}</p>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {PRICING.items.map((p) => (
            <div key={p.label} className="surface p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                {p.label}
              </p>
              <p className="mt-3 font-serif text-4xl text-accent">{p.price}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                {p.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {PRICING_NOTE.badge}
          </span>
          {PRICING_NOTE.text}
        </div>
      </div>
    </section>
  );
}
