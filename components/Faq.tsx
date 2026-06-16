"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS, FAQ_HEADING } from "./content";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-content px-5 py-24 lg:px-8">
      <p className="overline mb-4">FAQ</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {FAQ_HEADING}
      </h2>

      <div className="mx-auto mt-12 max-w-3xl">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-white/[0.07]">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-white">
                  {item.q}
                </span>
                <span className="shrink-0 text-accent">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-slate-400">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
