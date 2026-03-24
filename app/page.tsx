import { HeroReveal } from "@/components/hero-reveal";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

const secondaryProducts = [
  {
    name: "Receipt",
    href: "/receipt",
    oneLiner: "Proof of document acknowledgement.",
    description:
      "Clear proof of delivery, review activity, and acknowledgement for policies, procedures, and client documents. No e-signature overhead.",
    url: "getreceipt.co",
  },
  {
    name: "Noodle",
    href: "/noodle",
    oneLiner: "Thought capture for fast thinkers.",
    description:
      "Capture ideas, thoughts, and fleeting notes before they disappear. AI helps cluster, resurface, and expand your thinking.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <HeroReveal delay={100}>
            <h1 className="font-outfit font-light text-5xl md:text-7xl lg:text-8xl text-off-white leading-[1.05] tracking-tight max-w-4xl">
              Software your business can rely on.
            </h1>
          </HeroReveal>

          <HeroReveal delay={350}>
            <p className="mt-8 font-dm text-lg md:text-xl text-stone max-w-xl leading-relaxed">
              Pellar Technologies designs, builds, and operates focused software products.
              From Newcastle-upon-Tyne.
            </p>
          </HeroReveal>

        </div>
      </section>

      {/* Forma — Primary Product */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <Link
              href="/forma"
              className="group block bg-ink p-10 md:p-16 transition-all duration-500 hover:bg-white/[0.03] border border-white/5 hover:border-forest/30"
            >
              <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-6">
                Flagship
              </p>
              <h2 className="font-outfit font-light text-3xl md:text-5xl lg:text-6xl text-off-white mb-4">
                Forma
              </h2>
              <p className="font-instrument italic text-sage text-xl md:text-2xl mb-6">
                Your studio, online.
              </p>
              <p className="font-dm text-base md:text-lg text-stone leading-relaxed max-w-2xl mb-10">
                Website, class booking, payments, and email for fitness and leisure studios. One platform, not five disconnected tools.
              </p>
              <div className="flex items-center gap-3">
                <span className="font-dm text-sm text-stone/60">
                  useforma.co.uk
                </span>
                <span className="text-forest group-hover:text-sage transition-colors duration-300 ml-auto">
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Secondary Products */}
      <section className="px-6 py-24 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              Also from Pellar
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {secondaryProducts.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 100}>
                <Link
                  href={product.href}
                  className="group block bg-ink p-10 md:p-14 transition-all duration-500 hover:bg-white/[0.03] border-t-2 border-t-transparent hover:border-t-forest"
                >
                  <h3 className="font-outfit font-light text-2xl md:text-3xl text-off-white mb-4">
                    {product.name}
                  </h3>
                  <p className="font-instrument italic text-sage text-lg mb-4">
                    {product.oneLiner}
                  </p>
                  <p className="font-dm text-sm text-stone leading-relaxed mb-8">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3">
                    {product.url && (
                      <span className="font-dm text-xs text-stone/60">
                        {product.url}
                      </span>
                    )}
                    <span className="text-forest group-hover:text-sage transition-colors duration-300 ml-auto">
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              How we work
            </p>
            <h2 className="font-outfit font-light text-3xl md:text-5xl text-off-white mb-20">
              Three principles.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-16">
            <ScrollReveal delay={0}>
              <div>
                <span className="font-dm text-xs text-stone/40 block mb-4">01</span>
                <h3 className="font-outfit font-light text-xl text-off-white mb-4">
                  Build, don&apos;t describe
                </h3>
                <p className="font-dm text-sm text-stone leading-relaxed">
                  The product is the pitch. We ship working software, not slide decks.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div>
                <span className="font-dm text-xs text-stone/40 block mb-4">02</span>
                <h3 className="font-outfit font-light text-xl text-off-white mb-4">
                  Specific over broad
                </h3>
                <p className="font-dm text-sm text-stone leading-relaxed">
                  Each product solves one problem well. No sprawl, no feature bloat.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="font-dm text-xs text-stone/40 block mb-4">03</span>
                <h3 className="font-outfit font-light text-xl text-off-white mb-4">
                  Own the whole stack
                </h3>
                <p className="font-dm text-sm text-stone leading-relaxed">
                  Design, development, and operations in the same team. One standard throughout.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-light text-3xl md:text-5xl lg:text-6xl text-off-white mb-6">
              Got a problem that needs a better answer?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <a href="mailto:hello@pellar.co.uk" className="cta-link mt-4">
              <span>hello@pellar.co.uk</span>
              <CtaArrow />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
