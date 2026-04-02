import { ScrollReveal } from "@/components/scroll-reveal";

const principles = [
  {
    num: "01",
    title: "Build, don\u2019t describe",
    description:
      "We ship working software, not slide decks or wireframe PDFs. The product is the deliverable.",
  },
  {
    num: "02",
    title: "Specific over broad",
    description:
      "Every project solves a real problem. No feature bloat, no scope creep for its own sake.",
  },
  {
    num: "03",
    title: "Own the whole stack",
    description:
      "Design, development, and operations. One team, one standard, no handoff gaps.",
  },
];

export function Principles() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-instrument text-3xl md:text-5xl text-fg mb-20">
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
