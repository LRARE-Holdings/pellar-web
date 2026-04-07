import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Productised systems for sales pipelines, referral tracking, AI note taking, AI-driven CRM, and custom AI integration.",
  alternates: { canonical: "https://www.pellar.co.uk/solutions" },
  openGraph: {
    title: "Solutions | Pellar",
    description:
      "Productised systems for sales pipelines, referral tracking, AI note taking, AI-driven CRM, and custom AI integration.",
    url: "https://www.pellar.co.uk/solutions",
  },
};

const solutions = [
  {
    name: "Sales pipeline",
    tagline: "A modern CRM for small sales teams.",
    description:
      "Track every lead from first contact to signed deal. Stage automation, follow-up reminders, and a dashboard your team will open every morning. Built on the same foundations as our internal portal.",
    capabilities: [
      "Lead capture from forms, email, and imports",
      "Pipeline stages with automation",
      "Email and meeting tracking",
      "Activity feed and reporting",
    ],
    price: "From £6,000",
    range: "Typical builds: £6k – £18k",
  },
  {
    name: "Referral tracking",
    tagline: "Close the loop on word-of-mouth growth.",
    description:
      "Capture referrals from customers, partners, and staff. Attribute every new client to the right source, automate reward calculations, and find out which channels pay.",
    capabilities: [
      "Unique referral links and codes",
      "Multi-step attribution",
      "Reward tracking and payout flows",
      "Reports for finance and partners",
    ],
    price: "From £5,000",
    range: "Typical builds: £5k – £14k",
  },
  {
    name: "AI note taking",
    tagline: "Capture meetings. Surface what matters.",
    description:
      "Voice and text capture across meetings, calls, and ideas. AI clusters notes by topic, links related conversations, and brings the right note back when you need it. Built on the same engine as Noodle.",
    capabilities: [
      "Quick capture from web, mobile, and audio",
      "Automatic clustering and tagging",
      "Smart search across history",
      "Resurface and reminder flows",
    ],
    price: "From £7,000",
    range: "Typical builds: £7k – £20k",
  },
  {
    name: "AI-driven CRM",
    tagline: "A relationship manager that pulls its weight.",
    description:
      "A CRM that drafts your outreach, summarises history, and tells you who to call next. Designed to fit how your team already works.",
    capabilities: [
      "AI-drafted emails and follow-ups",
      "Conversation summaries on every contact",
      "Next-action suggestions",
      "Pipeline and reporting included",
    ],
    price: "From £10,000",
    range: "Typical builds: £10k – £30k",
  },
  {
    name: "Custom AI",
    tagline: "AI scoped to your operation, integrated where you work.",
    description:
      "Research agents, document processors, internal copilots, classification engines. We build AI features that plug into your existing systems and solve a specific operational problem.",
    capabilities: [
      "Discovery and feasibility shaping",
      "Model selection and prompt engineering",
      "Integration with your stack",
      "Evaluation and ongoing tuning",
    ],
    price: "Priced by scope",
    range: "Quoted after a free scoping call",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Solutions"
        title="Productised systems for common operational problems."
        intro={
          <>
            Patterns we have shipped before, ready to deliver again. Each one becomes yours: your data, your infrastructure, your roadmap.
          </>
        }
      />

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20 md:space-y-24">
            {solutions.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 60}>
                <article className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-border pt-12">
                  <div className="md:col-span-2">
                    <span className="font-satoshi text-xs text-sage tracking-[0.15em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-fg mb-3 leading-tight">
                      {s.name}
                    </h2>
                    <p className="font-satoshi text-base text-forest mb-5">
                      {s.tagline}
                    </p>
                    <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-8 max-w-xl">
                      {s.description}
                    </p>
                    <div className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-4">
                      Capabilities
                    </div>
                    <div className="divide-y divide-border border-y border-border">
                      {s.capabilities.map((c) => (
                        <div
                          key={c}
                          className="font-satoshi text-sm text-fg-secondary leading-relaxed py-3"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="md:sticky md:top-32">
                      <div className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3">
                        Investment
                      </div>
                      <div className="font-satoshi font-bold text-2xl text-fg mb-2">
                        {s.price}
                      </div>
                      <p className="font-satoshi text-sm text-fg-muted leading-relaxed">
                        {s.range}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
              Why productised
            </p>
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-fg leading-tight">
              We have built it before.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-5 max-w-xl">
              Every solution above is something we have already shipped. We know the edges, the trade-offs, and where the work lives. You get a faster build, a tighter timeline, and a sharper price.
            </p>
            <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-5 max-w-xl">
              Each delivery is a custom build for your business. You own the code. You own the data. We host it for you, or hand it over to your team.
            </p>
            <p className="font-satoshi text-base text-fg-muted leading-relaxed max-w-xl">
              For something larger or more specific, custom AI work is quoted to scope. Tell us what you are trying to do and we will come back with a plan.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="cta-link">
                <span>Discuss your project</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
