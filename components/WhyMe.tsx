import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { WHY, WHY_HEADING } from "./content";

export function WhyMe() {
  return (
    <section className="border-y border-white/[0.05] bg-white/[0.012]">
      <div className="mx-auto max-w-content px-5 py-24 lg:px-8">
        <SectionHeading
          overline="Why work with me"
          lead={WHY_HEADING.lead}
          accent={WHY_HEADING.accent}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item) => (
            <div key={item.title} className="surface surface-hover p-6">
              <div className="chip-icon">
                <Icon name={item.icon} size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
