import { SectionHeading } from "./SectionHeading";
import { ABOUT } from "./content";

export function About() {
  return (
    <section
      id="about"
      className="border-y border-white/[0.05] bg-white/[0.012]"
    >
      <div className="mx-auto max-w-content px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            overline="About"
            lead={ABOUT.lead}
            accent={ABOUT.accent}
          />
          <div className="space-y-5 text-base leading-relaxed text-slate-400">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
