import { HeroReveal } from "@/components/hero-reveal";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <HeroReveal delay={50}>
          <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-8">
            Software studio · Newcastle
          </p>
        </HeroReveal>

        <HeroReveal delay={150}>
          <h1 className="font-satoshi font-bold text-5xl md:text-7xl lg:text-[5.5rem] text-fg leading-[1.05] tracking-tight max-w-5xl">
            We build software for your business.
          </h1>
        </HeroReveal>

        <HeroReveal delay={350}>
          <p className="mt-8 font-satoshi text-lg md:text-xl text-fg-secondary max-w-2xl leading-relaxed">
            Web applications, MVPs, AI-powered tools, and production platforms. Built and maintained by a small, focused team in Newcastle.
          </p>
        </HeroReveal>

        <HeroReveal delay={550}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <Link href="/contact" className="cta-link">
              <span>Start a project</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="font-satoshi text-sm text-fg-muted hover:text-fg transition-colors"
            >
              See what we build →
            </Link>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}
