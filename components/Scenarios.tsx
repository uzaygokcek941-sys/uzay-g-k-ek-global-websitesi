import { SectionHeading } from "./SectionHeading";
import { SCENARIOS, SCENARIOS_HEADING } from "./content";

export function Scenarios() {
  return (
    <section id="scenarios" className="mx-auto max-w-content px-5 py-24 lg:px-8">
      <SectionHeading
        overline="Scenarios"
        lead={SCENARIOS_HEADING.lead}
        accent={SCENARIOS_HEADING.accent}
      />
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
        Real problems by sector, and the typical impact of solving them.
      </p>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
        {SCENARIOS.map((s) => (
          <article
            key={s.persona + s.title}
            className="surface flex w-[88%] shrink-0 snap-start flex-col p-7 sm:w-[440px]"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ember">
                {s.persona}
              </span>
              {s.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent-soft"
                >
                  {b}
                </span>
              ))}
            </div>

            <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
              {s.title}
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-400">
              <p>
                <span className="font-semibold text-slate-300">Problem ▸ </span>
                {s.problem}
              </p>
              <p>
                <span className="font-semibold text-accent-soft">Solution ▸ </span>
                {s.solution}
              </p>
            </div>

            <div className="mt-auto pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Typical gain
              </p>
              <p className="mt-1.5 font-serif text-4xl text-accent">{s.metric}</p>
              <p className="mt-1 text-xs text-slate-500">{s.metricLabel}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-600">← scroll to see more →</p>
    </section>
  );
}
