import { MessageCircle, CalendarClock, Check } from "lucide-react";
import { HERO, SITE } from "./content";

export function Hero() {
  return (
    <section id="top" className="bg-atmosphere relative overflow-hidden">
      <div className="mx-auto max-w-content px-5 pb-20 pt-20 sm:pb-28 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400/60" />
            {HERO.badge}
          </span>

          <h1 className="animate-fade-up mt-7 text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl">
            {HERO.titleLead}{" "}
            <span className="font-serif font-normal italic text-accent">
              {HERO.titleAccent}
            </span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            {HERO.subtitle}
          </p>

          <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={2} />
              Message on WhatsApp
            </a>
            <a href={SITE.calendly} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
              <CalendarClock size={18} />
              Book a 30-min call
            </a>
          </div>

          <ul className="mx-auto mt-9 flex max-w-2xl flex-col gap-2.5 text-left sm:grid sm:grid-cols-2">
            {HERO.proofPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-slate-400">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" strokeWidth={2.2} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools strip */}
        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <p className="text-center text-xs uppercase tracking-[0.16em] text-slate-600">
            {HERO.toolsLabel}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {HERO.tools.map((t) => (
              <span
                key={t}
                className="text-sm font-medium text-slate-500 transition hover:text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
