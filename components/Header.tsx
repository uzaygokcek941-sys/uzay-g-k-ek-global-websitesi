"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, SITE } from "./content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-ink-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-1.5">
          <span className="font-serif text-xl tracking-tight text-white">
            {SITE.name}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent to-ember" />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            <MessageCircle size={16} strokeWidth={2} />
            WhatsApp
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/[0.06] bg-ink-950/95 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              <MessageCircle size={16} strokeWidth={2} />
              Message on WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
