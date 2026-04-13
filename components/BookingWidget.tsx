"use client";

import { useState, useEffect, useCallback, type FormEvent } from "react";

const PORTAL_BASE =
  process.env.NEXT_PUBLIC_PORTAL_URL ?? "https://portal.pellar.co.uk";
const SLOTS_ENDPOINT = `${PORTAL_BASE}/api/booking/slots`;
const RESERVE_ENDPOINT = `${PORTAL_BASE}/api/booking/reserve`;

/* ------------------------------------------------------------------ */
/*  Shared constants                                                   */
/* ------------------------------------------------------------------ */

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

const meetingTypes = [
  { value: "in_person", label: "In person (Newcastle)" },
  { value: "google_meet", label: "Google Meet (video call)" },
];

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

/* ------------------------------------------------------------------ */
/*  Date helpers                                                       */
/* ------------------------------------------------------------------ */

function toDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function isWeekday(d: Date): boolean {
  const dow = d.getDay();
  return dow !== 0 && dow !== 6;
}

function getNext30WeekDays(): Date[] {
  const days: Date[] = [];
  const today = new Date();
  const cursor = new Date(today);
  cursor.setDate(cursor.getDate() + 1); // start from tomorrow

  let count = 0;
  while (count < 30) {
    if (isWeekday(cursor)) {
      days.push(new Date(cursor));
      count++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${DAY_NAMES[(d.getDay() + 6) % 7]} ${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;
}

function formatTime(time: string): string {
  const [h, m] = time.split(":");
  const hour = parseInt(h, 10);
  const suffix = hour >= 12 ? "pm" : "am";
  const display = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${display}:${m}${suffix}`;
}

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Slot {
  time: string; // "HH:MM"
  available: boolean;
}

interface ApiSlot {
  start: string; // ISO datetime
  end: string;
}

/** Convert API response slots (ISO datetimes) into the widget format */
function apiSlotsToSlots(apiSlots: ApiSlot[]): Slot[] {
  return apiSlots.map((s) => {
    const d = new Date(s.start);
    const hh = String(d.getUTCHours()).padStart(2, "0");
    const mm = String(d.getUTCMinutes()).padStart(2, "0");
    return { time: `${hh}:${mm}`, available: true };
  });
}

type Step = 1 | 2 | 3 | 4;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

interface BookingForm {
  name: string;
  email: string;
  company: string;
  meeting_type: string;
  interest: string;
  message: string;
  website: string; // honeypot
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function BookingWidget() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    company: "",
    meeting_type: "google_meet",
    interest: "",
    message: "",
    website: "",
  });

  const weekdays = getNext30WeekDays();

  /* ---------------------------------------------------------------- */
  /*  Fetch slots when a date is selected                              */
  /* ---------------------------------------------------------------- */

  const fetchSlots = useCallback(async (date: string) => {
    setLoadingSlots(true);
    setSlotsError(null);
    setSlots([]);

    try {
      const res = await fetch(`${SLOTS_ENDPOINT}?date=${date}`);
      if (!res.ok) {
        throw new Error("Could not load available times");
      }
      const data = (await res.json()) as { slots: ApiSlot[] };
      setSlots(apiSlotsToSlots(data.slots ?? []));
    } catch {
      setSlotsError("Could not load available times. Please try again.");
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchSlots(selectedDate);
    }
  }, [selectedDate, fetchSlots]);

  /* ---------------------------------------------------------------- */
  /*  Form helpers                                                     */
  /* ---------------------------------------------------------------- */

  function update<K extends keyof BookingForm>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function goBack() {
    if (step === 2) {
      setSelectedTime(null);
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  }

  function selectDate(dateStr: string) {
    setSelectedDate(dateStr);
    setSelectedTime(null);
    setStep(2);
  }

  function selectTime(time: string) {
    setSelectedTime(time);
    setStep(3);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitStatus("submitting");
    setSubmitError(null);

    try {
      // Build ISO slot_start from date + time (UTC)
      const slotStart = `${selectedDate}T${selectedTime}:00.000Z`;

      const res = await fetch(RESERVE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          service_interest: form.interest,
          meeting_type: form.meeting_type,
          slot_start: slotStart,
          website: form.website,
        }),
      });

      if (!res.ok) {
        const data = (await res
          .json()
          .catch(() => ({ error: "Could not book your call" }))) as {
          error?: string;
        };
        throw new Error(data.error || "Could not book your call");
      }

      setSubmitStatus("success");
      setStep(4);
    } catch (err) {
      setSubmitStatus("error");
      setSubmitError(
        err instanceof Error ? err.message : "Could not book your call",
      );
    }
  }

  /* ---------------------------------------------------------------- */
  /*  Summary bar                                                      */
  /* ---------------------------------------------------------------- */

  function SummaryBar() {
    if (!selectedDate) return null;

    return (
      <div className="flex items-center gap-3 mb-10 pb-6 border-b border-border">
        {step > 1 ? (
          <button
            type="button"
            onClick={goBack}
            className="font-satoshi text-sm text-forest hover:text-sage transition-colors mr-2"
            aria-label="Go back"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 4l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : null}
        <p className="font-satoshi text-sm text-fg-secondary">
          {formatDateShort(selectedDate)}
          {selectedTime ? (
            <span className="text-fg font-medium">
              {" "}
              at {formatTime(selectedTime)}
            </span>
          ) : null}
        </p>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Step 1 — Calendar                                                */
  /* ---------------------------------------------------------------- */

  function CalendarStep() {
    // Group days by month
    const months = new Map<string, Date[]>();
    for (const d of weekdays) {
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      const arr = months.get(key) ?? [];
      arr.push(d);
      months.set(key, arr);
    }

    return (
      <div>
        <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-6">
          Pick a date
        </p>
        {Array.from(months.entries()).map(([key, days]) => {
          const monthLabel = `${MONTH_NAMES[days[0].getMonth()]} ${days[0].getFullYear()}`;
          return (
            <div key={key} className="mb-10">
              <p className="font-satoshi text-sm font-medium text-fg mb-4">
                {monthLabel}
              </p>
              <div className="grid grid-cols-5 sm:grid-cols-7 gap-2">
                {days.map((d) => {
                  const dateStr = toDateString(d);
                  const dayOfWeek = DAY_NAMES[(d.getDay() + 6) % 7];
                  return (
                    <button
                      key={dateStr}
                      type="button"
                      onClick={() => selectDate(dateStr)}
                      className="flex flex-col items-center gap-0.5 py-3 px-1 border border-border hover:border-forest hover:bg-forest/5 transition-colors cursor-pointer"
                    >
                      <span className="font-satoshi text-[10px] uppercase tracking-[0.1em] text-fg-muted">
                        {dayOfWeek}
                      </span>
                      <span className="font-satoshi text-base text-fg">
                        {d.getDate()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Step 2 — Time slots                                              */
  /* ---------------------------------------------------------------- */

  function TimeSlotsStep() {
    if (loadingSlots) {
      return (
        <div>
          <SummaryBar />
          <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-6">
            Pick a time
          </p>
          <p className="font-satoshi text-sm text-fg-muted py-8">
            Loading available times...
          </p>
        </div>
      );
    }

    if (slotsError) {
      return (
        <div>
          <SummaryBar />
          <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-6">
            Pick a time
          </p>
          <p className="font-satoshi text-sm text-red-700 py-4">
            {slotsError}
          </p>
          <button
            type="button"
            onClick={() => selectedDate && fetchSlots(selectedDate)}
            className="cta-link text-base"
          >
            <span>Try again</span>
          </button>
        </div>
      );
    }

    const available = slots.filter((s) => s.available);

    if (available.length === 0) {
      return (
        <div>
          <SummaryBar />
          <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-6">
            Pick a time
          </p>
          <p className="font-satoshi text-sm text-fg-secondary py-8">
            No times available on this date. Please pick another day.
          </p>
        </div>
      );
    }

    const morning = available.filter((s) => {
      const hour = parseInt(s.time.split(":")[0], 10);
      return hour < 12;
    });
    const afternoon = available.filter((s) => {
      const hour = parseInt(s.time.split(":")[0], 10);
      return hour >= 12;
    });

    function SlotGroup({
      label,
      items,
    }: {
      label: string;
      items: Slot[];
    }) {
      if (items.length === 0) return null;
      return (
        <div className="mb-8">
          <p className="font-satoshi text-xs text-fg-muted uppercase tracking-[0.1em] mb-3">
            {label}
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <button
                key={s.time}
                type="button"
                onClick={() => selectTime(s.time)}
                className="font-satoshi text-sm text-fg px-4 py-2 border border-border hover:border-forest hover:bg-forest/5 transition-colors cursor-pointer"
              >
                {formatTime(s.time)}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div>
        <SummaryBar />
        <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-6">
          Pick a time
        </p>
        <SlotGroup label="Morning" items={morning} />
        <SlotGroup label="Afternoon" items={afternoon} />
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Step 3 — Details form                                            */
  /* ---------------------------------------------------------------- */

  function DetailsStep() {
    return (
      <div>
        <SummaryBar />
        <p className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-8">
          Your details
        </p>

        <form onSubmit={onSubmit} className="space-y-10" noValidate>
          {/* Honeypot */}
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
              id="booking-name"
              label="Your name"
              required
              value={form.name}
              onChange={(v) => update("name", v)}
            />
            <Field
              id="booking-email"
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={(v) => update("email", v)}
            />
          </div>

          <Field
            id="booking-company"
            label="Company"
            optional
            value={form.company}
            onChange={(v) => update("company", v)}
          />

          {/* Meeting type — radio buttons */}
          <fieldset>
            <legend className="block font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-4">
              Meeting type
            </legend>
            <div className="flex flex-col sm:flex-row gap-4">
              {meetingTypes.map((t) => (
                <label
                  key={t.value}
                  className={`flex items-center gap-3 font-satoshi text-sm cursor-pointer px-4 py-3 border transition-colors ${
                    form.meeting_type === t.value
                      ? "border-forest text-fg bg-forest/5"
                      : "border-border text-fg-secondary hover:border-forest/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="meeting_type"
                    value={t.value}
                    checked={form.meeting_type === t.value}
                    onChange={(e) => update("meeting_type", e.target.value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      form.meeting_type === t.value
                        ? "border-forest"
                        : "border-stone"
                    }`}
                  >
                    {form.meeting_type === t.value ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    ) : null}
                  </span>
                  {t.label}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Service interest */}
          <SelectField
            id="booking-interest"
            label="What you need"
            options={interests}
            value={form.interest}
            onChange={(v) => update("interest", v)}
            placeholder="Pick the closest match"
          />

          {/* Message */}
          <TextAreaField
            id="booking-message"
            label="Anything you want us to know"
            optional
            value={form.message}
            onChange={(v) => update("message", v)}
            placeholder="A sentence or two on the problem, so we can prepare."
          />

          {submitError ? (
            <p className="font-satoshi text-sm text-red-700">{submitError}</p>
          ) : null}

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 pt-2">
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="cta-link disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {submitStatus === "submitting"
                  ? "Booking..."
                  : "Confirm booking"}
              </span>
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
              30 minutes. Free. No obligation.
            </p>
          </div>
        </form>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Step 4 — Confirmation                                            */
  /* ---------------------------------------------------------------- */

  function ConfirmationStep() {
    const typeLabel =
      meetingTypes.find((t) => t.value === form.meeting_type)?.label ??
      form.meeting_type;

    return (
      <div className="border border-border p-10 md:p-14">
        <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
          Confirmed
        </p>
        <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-fg mb-5 leading-tight">
          You are booked in.
        </h2>
        <div className="space-y-4 mb-8">
          <div>
            <p className="font-satoshi text-xs uppercase tracking-[0.1em] text-fg-muted mb-1">
              Date
            </p>
            <p className="font-satoshi text-base text-fg">
              {selectedDate ? formatDateShort(selectedDate) : ""}
            </p>
          </div>
          <div>
            <p className="font-satoshi text-xs uppercase tracking-[0.1em] text-fg-muted mb-1">
              Time
            </p>
            <p className="font-satoshi text-base text-fg">
              {selectedTime ? formatTime(selectedTime) : ""}
            </p>
          </div>
          <div>
            <p className="font-satoshi text-xs uppercase tracking-[0.1em] text-fg-muted mb-1">
              Format
            </p>
            <p className="font-satoshi text-base text-fg">{typeLabel}</p>
          </div>
        </div>
        <p className="font-satoshi text-sm text-fg-secondary leading-relaxed mb-2">
          A calendar invite is on its way to {form.email}. If you need to
          reschedule, reply to the invite or email hello@pellar.co.uk.
        </p>
        <p className="font-satoshi text-sm text-fg-muted leading-relaxed">
          We will review your details beforehand so we can make the most of the
          30 minutes.
        </p>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <div>
      {step === 1 ? <CalendarStep /> : null}
      {step === 2 ? <TimeSlotsStep /> : null}
      {step === 3 ? <DetailsStep /> : null}
      {step === 4 ? <ConfirmationStep /> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared field components                                            */
/* ------------------------------------------------------------------ */

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  optional?: boolean;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  optional,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3"
      >
        {label}
        {optional ? (
          <span className="text-fg-muted normal-case ml-2 tracking-normal">
            optional
          </span>
        ) : null}
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

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: SelectFieldProps) {
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
  optional?: boolean;
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  required,
  optional,
}: TextAreaFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3"
      >
        {label}
        {optional ? (
          <span className="text-fg-muted normal-case ml-2 tracking-normal">
            optional
          </span>
        ) : null}
      </label>
      <textarea
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border focus:border-forest font-satoshi text-base text-fg placeholder:text-fg-muted py-3 outline-none transition-colors resize-none"
      />
    </div>
  );
}
