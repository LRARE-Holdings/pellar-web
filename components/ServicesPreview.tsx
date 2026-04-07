import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowLink } from "@/components/ArrowLink";

const services = [
  {
    title: "Web applications",
    description:
      "Full-stack web apps, dashboards, portals, and admin tools. The kind of software your team uses every day.",
  },
  {
    title: "MVPs & new products",
    description:
      "From idea to working product, fast. For founders and businesses testing new concepts without burning months on setup.",
  },
  {
    title: "AI-powered tools",
    description:
      "Note-taking, CRMs, internal copilots, and custom AI builds. Useful intelligence, not novelty.",
  },
  {
    title: "Websites",
    description:
      "Marketing sites, company sites, landing pages. Fast, performant, well-designed. No templates.",
  },
];

export function ServicesPreview() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
            Services
          </p>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg mb-6 max-w-2xl">
            Software that solves real problems.
          </h2>
          <p className="font-satoshi text-lg text-fg-secondary max-w-2xl leading-relaxed mb-20">
            We work with businesses at every stage, from first prototype to production platform.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14 mb-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="border-t border-border pt-6">
                <h3 className="font-satoshi font-medium text-base text-fg mb-3">
                  {service.title}
                </h3>
                <p className="font-satoshi text-sm text-fg-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ArrowLink href="/services">See all services and pricing</ArrowLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
