import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  return (
    <section className="px-6 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-8">
            Get in touch
          </p>
          <h2 className="font-satoshi font-bold text-4xl md:text-6xl lg:text-7xl text-fg mb-10 max-w-3xl leading-[1.05]">
            Got a project? Let&apos;s talk.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="font-satoshi text-lg text-fg-secondary max-w-2xl leading-relaxed mb-10">
            Tell us a little about what you&apos;re building or trying to fix. We reply to every enquiry within one working day.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
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
            <a
              href="mailto:hello@pellar.co.uk"
              className="font-satoshi text-sm text-fg-muted hover:text-fg transition-colors"
            >
              or email hello@pellar.co.uk
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
