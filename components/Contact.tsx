"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, CalendarClock, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SITE, FORM, CONTACT_HEADING } from "./content";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "The fastest route — a reply within a few hours",
    href: SITE.whatsapp,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: `${SITE.phoneDisplay} · ${SITE.hours}`,
    href: SITE.phoneHref,
    external: false,
  },
  {
    icon: CalendarClock,
    label: "Discovery Call",
    value: "30 minutes, free, pick a time from the calendar",
    href: SITE.calendly,
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    external: false,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields
    if (data.get("website")) return;

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const budget = String(data.get("budget") || "");
    const details = String(data.get("details") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      "",
      "Project details:",
      details,
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `New project enquiry — ${name || "website form"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-content px-5 py-24 lg:px-8">
      <SectionHeading
        overline="Contact"
        lead={CONTACT_HEADING.lead}
        accent={CONTACT_HEADING.accent}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* Channels */}
        <div className="space-y-4">
          {channels.map((c) => {
            const CIcon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="surface surface-hover flex items-center gap-4 p-5"
              >
                <div className="chip-icon shrink-0">
                  <CIcon size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <p className="font-semibold text-white">{c.label}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{c.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="surface p-6 sm:p-8">
          {/* honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Company / Organization" name="company" />
            <SelectField label="Service you're interested in" name="service" options={FORM.services} />
          </div>

          <div className="mt-4">
            <SelectField label="Budget range" name="budget" options={FORM.budgets} />
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm text-slate-400">
              Project details<span className="text-ember">*</span>
            </label>
            <textarea
              name="details"
              required
              rows={4}
              className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-accent/50 focus:bg-white/[0.05]"
              placeholder="Tell me what you're trying to solve…"
            />
          </div>

          <button type="submit" className="btn-primary mt-6 w-full">
            Send message
          </button>

          {sent ? (
            <p className="mt-4 text-center text-sm text-emerald-300">
              Opening your email app… If nothing happens, write to {SITE.email}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-slate-400">
        {label}
        {required ? <span className="text-ember">*</span> : null}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-accent/50 focus:bg-white/[0.05]"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-slate-400">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition focus:border-accent/50 focus:bg-white/[0.05]"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-900 text-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
