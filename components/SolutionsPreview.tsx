import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowLink } from "@/components/ArrowLink";

const solutions = [
  {
    name: "Sales pipeline",
    summary:
      "A modern CRM and pipeline tracker for small sales teams. Track every deal, automate follow-ups, replace the spreadsheet.",
  },
  {
    name: "Referral tracking",
    summary:
      "Capture, attribute, and reward referrals across customers and partners. Built for service businesses that grow on word of mouth.",
  },
  {
    name: "AI note taking",
    summary:
      "Capture meetings, calls, and ideas. AI clusters them by topic and brings the right note back when you need it.",
  },
  {
    name: "AI-driven CRM",
    summary:
      "A relationship manager that drafts your emails, summarises history, and tells you who to call next.",
  },
  {
    name: "Custom AI",
    summary:
      "Research agents, document processors, internal copilots. AI scoped to your operation, integrated where you already work.",
  },
];

export function SolutionsPreview() {
  return (
    <section className="px-6 py-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
            Solutions
          </p>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg mb-6 max-w-3xl">
            Productised systems for common operational problems.
          </h2>
          <p className="font-satoshi text-lg text-fg-secondary max-w-2xl leading-relaxed mb-20">
            Patterns we have shipped before, ready to deliver again. Each one becomes yours: your data, your infrastructure, your roadmap.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 mb-16">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 70}>
              <div className="border-t border-border pt-6">
                <h3 className="font-satoshi font-medium text-base text-fg mb-3">
                  {s.name}
                </h3>
                <p className="font-satoshi text-sm text-fg-secondary leading-relaxed">
                  {s.summary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ArrowLink href="/solutions">Explore solutions and pricing</ArrowLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
