import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowLink } from "@/components/ArrowLink";

const solutions = [
  {
    name: "Sales pipeline",
    summary:
      "A modern CRM and pipeline tracker for small sales teams. Track leads, automate follow-ups, and see deals move through stages without spreadsheets.",
  },
  {
    name: "Referral tracking",
    summary:
      "Capture, attribute, and reward referrals across your customers and partners. Built for service businesses that grow on word of mouth.",
  },
  {
    name: "AI note taking",
    summary:
      "Capture meetings, calls, and ideas. AI clusters and resurfaces what matters, so nothing important gets forgotten.",
  },
  {
    name: "AI-driven CRM",
    summary:
      "A relationship manager that drafts emails, summarises history, and surfaces the next best action. Fits the way your team already works.",
  },
  {
    name: "Custom AI builds",
    summary:
      "Custom AI integrated into your existing systems: research agents, document processors, internal copilots. Scoped to your problem, not a template.",
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
            Productised builds for common problems.
          </h2>
          <p className="font-satoshi text-lg text-fg-secondary max-w-2xl leading-relaxed mb-20">
            Tested patterns we deliver faster because we&apos;ve built them before. Each one becomes yours, hosted on your infrastructure, ready to extend.
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
