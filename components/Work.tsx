import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowLink } from "@/components/ArrowLink";

const products = [
  {
    name: "Forma",
    url: "https://useforma.co.uk",
    urlLabel: "useforma.co.uk",
    description:
      "A management platform for fitness and Pilates studios. Website, booking, payments, customer email, and analytics in one place.",
    demonstrates:
      "A full multi-tenant platform with Stripe payments, a scheduling engine, automated customer comms, and operator dashboards.",
  },
  {
    name: "Noodle",
    url: null,
    urlLabel: null,
    description:
      "An iOS thought-capture app. Quick capture, AI-assisted clustering, and smart resurfacing of forgotten ideas.",
    demonstrates:
      "Native iOS in Swift, on-device and cloud AI, and a consumer product the team uses every day.",
  },
];

export function Work() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
            Work
          </p>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg mb-6 max-w-3xl">
            Products we built and run ourselves.
          </h2>
          <p className="font-satoshi text-lg text-fg-secondary max-w-2xl leading-relaxed mb-20">
            Our own products are the proof. We design them, ship them, and operate them. The same people deliver every client project.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 120}>
              <div className="border border-border p-8 md:p-10 h-full flex flex-col">
                <h3 className="font-satoshi font-bold text-2xl md:text-3xl text-fg mb-4">
                  {product.name}
                </h3>
                <p className="font-satoshi text-sm text-fg-secondary leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="font-satoshi text-sm text-fg-muted leading-relaxed mb-8 flex-1">
                  {product.demonstrates}
                </p>
                {product.url && product.urlLabel && (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-satoshi text-sm text-forest hover:text-sage transition-colors duration-300"
                  >
                    <span>{product.urlLabel}</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <ArrowLink href="/work">View all work</ArrowLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
