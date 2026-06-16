import { SectionHeading } from "./SectionHeading";
import { PROCESS, PROCESS_HEADING } from "./content";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-content px-5 py-24 lg:px-8">
      <SectionHeading
        overline="Process"
        lead={PROCESS_HEADING.lead}
        accent={PROCESS_HEADING.accent}
      />

      <ol className="mt-14 space-y-px">
        {PROCESS.map((step, i) => (
          <li
            key={step.title}
            className="grid gap-4 border-t border-white/[0.07] py-7 sm:grid-cols-[3rem_1fr] sm:gap-8 lg:grid-cols-[3rem_14rem_1fr]"
          >
            <span className="font-serif text-3xl text-accent/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ember/80">
                {step.duration}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 lg:max-w-2xl">
              {step.description}
            </p>
          </li>
        ))}
        <li className="border-t border-white/[0.07]" />
      </ol>
    </section>
  );
}
