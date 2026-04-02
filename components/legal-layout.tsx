import { ScrollReveal } from "@/components/scroll-reveal";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <section className="min-h-[50vh] flex flex-col justify-end px-6 pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <p className="font-dm text-sm text-fg-muted uppercase tracking-widest mb-6">
              Legal
            </p>
            <h1 className="font-instrument text-4xl md:text-6xl text-fg leading-[1.05] tracking-tight max-w-3xl">
              {title}
            </h1>
            <p className="mt-6 font-dm text-sm text-fg-muted">
              Last updated: {lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl legal-prose">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
