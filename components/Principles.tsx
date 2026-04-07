import { ScrollReveal } from "@/components/scroll-reveal";

const principles = [
  {
    num: "01",
    title: "We ship working systems",
    description:
      "Every engagement ends with a live product. Slide decks and wireframe PDFs are not the deliverable.",
  },
  {
    num: "02",
    title: "We pick a real problem",
    description:
      "Each project answers a question your business is already asking. We cut feature bloat at the proposal, not at launch.",
  },
  {
    num: "03",
    title: "We own the whole stack",
    description:
      "Design, build, integration, hosting, and operation. One team carries the work from first call to live system.",
  },
];

export function Principles() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg mb-20">
            How we work
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-16">
          {principles.map((p, i) => (
            <ScrollReveal key={p.num} delay={i * 100}>
              <div>
                <span className="font-satoshi text-xs text-sage block mb-4">
                  {p.num}
                </span>
                <h3 className="font-satoshi font-medium text-base text-fg mb-4">
                  {p.title}
                </h3>
                <p className="font-satoshi text-sm text-fg-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
