import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { INDUSTRIES, INDUSTRIES_HEADING } from "./content";

export function Industries() {
  return (
    <section
      id="industries"
      className="border-y border-white/[0.05] bg-white/[0.012]"
    >
      <div className="mx-auto max-w-content px-5 py-24 lg:px-8">
        <SectionHeading
          overline="Industries"
          lead={INDUSTRIES_HEADING.lead}
          accent={INDUSTRIES_HEADING.accent}
        />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
          {INDUSTRIES_HEADING.intro}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="overline">{INDUSTRIES_HEADING.deliverLabel}</span>
          {INDUSTRIES_HEADING.deliverChips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-400">
          {INDUSTRIES_HEADING.closing}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="surface surface-hover flex items-start gap-4 p-5"
            >
              <div className="chip-icon shrink-0">
                <Icon name={ind.icon} size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">{ind.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {ind.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
