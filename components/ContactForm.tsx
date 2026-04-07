"use client";

import { useState, type FormEvent } from "react";

const PORTAL_BASE =
  process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portal.pellar.co.uk";
const ENDPOINT = `${PORTAL_BASE}/api/contact`;

const interests = [
  { value: "web_app", label: "Web platform" },
  { value: "mvp", label: "MVP / new product" },
  { value: "website", label: "Website" },
  { value: "retainer", label: "Technology partnership" },
  { value: "pipeline", label: "Sales pipeline" },
  { value: "referral", label: "Referral tracking" },
  { value: "ai_notes", label: "AI note taking" },
  { value: "ai_crm", label: "AI-driven CRM" },
  { value: "custom_ai", label: "Custom AI build" },
  { value: "other", label: "Something else" },
];

const budgets = [
  { value: "under_5k", label: "Under £5k" },
  { value: "5k_15k", label: "£5k – £15k" },
  { value: "15k_40k", label: "£15k – £40k" },
  { value: "40k_plus", label: "£40k+" },
  { value: "retainer", label: "Monthly retainer" },
  { value: "unsure", label: "Not sure yet" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    budget: "",
    message: "",
    website: "", // honeypot
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res
          .json()
          .catch(() => ({ error: "Could not send your message" }))) as {
          error?: string;
        };
        throw new Error(data.error || "Could not send your message");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        interest: "",
        budget: "",
        message: "",
        website: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send your message");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border p-10 md:p-14">
        <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
          Message received
        </p>
        <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-fg mb-5 leading-tight">
          Thanks. We will be in touch.
        </h2>
        <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-2 max-w-lg">
          Your message has landed in our inbox. We reply to every enquiry within one working day.
        </p>
        <p className="font-satoshi text-sm text-fg-muted leading-relaxed">
          To reach us directly, email hello@pellar.co.uk.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate>
      {/* Honeypot — visually hidden, off-screen */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Field
          id="name"
          label="Your name"
          required
          value={form.name}
          onChange={(v) => update("name", v)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(v) => update("email", v)}
        />
      </div>

      <Field
        id="company"
        label="Company"
        optional
        value={form.company}
        onChange={(v) => update("company", v)}
      />

      <div className="grid md:grid-cols-2 gap-8">
        <SelectField
          id="interest"
          label="What you need"
          options={interests}
          value={form.interest}
          onChange={(v) => update("interest", v)}
          placeholder="Pick the closest match"
        />
        <SelectField
          id="budget"
          label="Budget range"
          options={budgets}
          value={form.budget}
          onChange={(v) => update("budget", v)}
          placeholder="Optional"
        />
      </div>

      <TextAreaField
        id="message"
        label="What you need"
        required
        value={form.message}
        onChange={(v) => update("message", v)}
        placeholder="A few sentences about the problem, who it is for, and where you are up to."
      />

      {error ? (
        <p className="font-satoshi text-sm text-red-700">{error}</p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="cta-link disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{status === "submitting" ? "Sending…" : "Send message"}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="font-satoshi text-xs text-fg-muted">
          We reply within one working day. Your details stay between us.
        </p>
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
}

function Field({ id, label, value, onChange, type = "text", required, optional }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3"
      >
        {label}
        {optional ? <span className="text-fg-muted normal-case ml-2 tracking-normal">optional</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-0 border-b border-border focus:border-forest font-satoshi text-base text-fg placeholder:text-fg-muted py-3 outline-none transition-colors"
      />
    </div>
  );
}

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

function SelectField({ id, label, value, onChange, options, placeholder }: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent border-0 border-b border-border focus:border-forest font-satoshi text-base text-fg py-3 pr-8 outline-none transition-colors cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-fg-muted"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}

function TextAreaField({ id, label, value, onChange, placeholder, required }: TextAreaFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border focus:border-forest font-satoshi text-base text-fg placeholder:text-fg-muted py-3 outline-none transition-colors resize-none"
      />
    </div>
  );
}
