import { HeroReveal } from "@/components/hero-reveal";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <HeroReveal delay={100}>
          <h1 className="font-instrument text-5xl md:text-7xl lg:text-[5.5rem] text-fg leading-[1.08] tracking-tight max-w-4xl">
            We build software for your business.
          </h1>
        </HeroReveal>

        <HeroReveal delay={350}>
          <p className="mt-8 font-satoshi text-lg md:text-xl text-fg-muted max-w-xl leading-relaxed">
            Web applications, MVPs, and production platforms. Built and maintained by a small, focused team in Newcastle.
          </p>
        </HeroReveal>

        <HeroReveal delay={550}>
          <a
            href="mailto:hello@pellar.co.uk"
            className="cta-link mt-10 inline-flex"
          >
            <span>Get in touch</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </HeroReveal>
      </div>
    </section>
  );
}
