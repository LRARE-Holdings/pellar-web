import { ScrollReveal } from "@/components/scroll-reveal";

const services = [
  {
    title: "Web Applications",
    description:
      "Full-stack web apps, dashboards, portals, and admin tools. The kind of software your team uses every day.",
  },
  {
    title: "MVPs & New Products",
    description:
      "From idea to working product, fast. For founders and businesses testing new concepts without burning months on setup.",
  },
  {
    title: "Booking & Payment Systems",
    description:
      "Scheduling, Stripe integration, and customer management. We built Forma on exactly this foundation.",
  },
  {
    title: "Websites",
    description:
      "Marketing sites, company sites, landing pages. Fast, performant, and well-designed. No templates.",
  },
  {
    title: "Ongoing Development",
    description:
      "Retainer-based feature work, maintenance, and support. For businesses that need a reliable development partner, not a one-off contractor.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg mb-6">
            What we build
          </h2>
          <p className="font-satoshi text-lg text-fg-muted max-w-2xl leading-relaxed mb-20">
            Software that solves real problems. We work with businesses at every stage, from first prototype to production platform.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="border-t border-border pt-6">
                <h3 className="font-satoshi font-medium text-base text-fg mb-3">
                  {service.title}
                </h3>
                <p className="font-satoshi text-sm text-fg-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
