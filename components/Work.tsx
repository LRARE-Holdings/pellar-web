import { ScrollReveal } from "@/components/scroll-reveal";

const products = [
  {
    name: "Forma",
    url: "https://useforma.co.uk",
    urlLabel: "useforma.co.uk",
    description:
      "Studio management platform for fitness and Pilates studios. Website, booking, payments, email, and analytics in one place.",
    demonstrates:
      "Full platform build with Stripe integration, scheduling engine, automated communications, and multi-tenant architecture.",
  },
  {
    name: "Noodle",
    url: "https://noodleapp.xyz",
    urlLabel: "noodleapp.xyz",
    description:
      "Thought-capture app for iOS and Android. Quick capture, AI-assisted clustering, and smart resurfacing of forgotten ideas.",
    demonstrates:
      "Mobile development with React Native and Expo, AI integration, and consumer product design.",
  },
];

export function Work() {
  return (
    <section id="work" className="px-6 py-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-instrument text-3xl md:text-5xl text-fg mb-6">
            Products we&apos;ve built and operate
          </h2>
          <p className="font-satoshi text-lg text-fg-muted max-w-2xl leading-relaxed mb-20">
            We don&apos;t just talk about building software. These are products we&apos;ve designed, shipped, and continue to run.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 120}>
              <div className="border border-border p-8 md:p-10">
                <h3 className="font-instrument text-2xl md:text-3xl text-fg mb-4">
                  {product.name}
                </h3>
                <p className="font-satoshi text-sm text-fg-secondary leading-relaxed mb-6">
                  {product.description}
                </p>
                <p className="font-satoshi text-sm text-fg-muted leading-relaxed mb-8">
                  {product.demonstrates}
                </p>
                {product.url && (
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
      </div>
    </section>
  );
}
