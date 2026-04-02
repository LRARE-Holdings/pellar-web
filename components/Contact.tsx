import { ScrollReveal } from "@/components/scroll-reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl lg:text-6xl text-fg mb-8 max-w-3xl">
            Got a project? Let&apos;s talk.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a href="mailto:hello@pellar.co.uk" className="cta-link">
            <span>hello@pellar.co.uk</span>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
