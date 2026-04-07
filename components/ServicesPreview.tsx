import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowLink } from "@/components/ArrowLink";

const services = [
  {
    title: "Web platforms",
    description:
      "Customer portals, internal dashboards, admin tools. The systems your team and your customers use every day.",
  },
  {
    title: "MVPs and new products",
    description:
      "You bring the idea. We hand back a working product in weeks, ready for real users and real revenue.",
  },
  {
    title: "AI tools",
    description:
      "Note taking, CRMs, copilots, document processors. AI that does a job, plugged into the systems you already run.",
  },
  {
    title: "Websites",
    description:
      "Marketing sites, company sites, landing pages. Designed to a brief, built to last, fast on every device.",
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
            Technology, delivered.
          </h2>
          <p className="font-satoshi text-lg text-fg-secondary max-w-2xl leading-relaxed mb-20">
            We work with businesses at every stage. From a first prototype to a platform that runs your operation.
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
