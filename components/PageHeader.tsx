import { HeroReveal } from "@/components/hero-reveal";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="px-6 pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="max-w-7xl mx-auto w-full">
        <HeroReveal delay={50}>
          <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-8">
            {eyebrow}
          </p>
        </HeroReveal>
        <HeroReveal delay={150}>
          <h1 className="font-satoshi font-bold text-4xl md:text-6xl lg:text-7xl text-fg leading-[1.05] tracking-tight max-w-4xl">
            {title}
          </h1>
        </HeroReveal>
        {intro ? (
          <HeroReveal delay={300}>
            <div className="mt-8 font-satoshi text-lg md:text-xl text-fg-secondary max-w-2xl leading-relaxed">
              {intro}
            </div>
          </HeroReveal>
        ) : null}
      </div>
    </section>
  );
}
