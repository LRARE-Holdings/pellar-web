import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Principles } from "@/components/Principles";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pellar Technologies is a UK technology partner delivering web platforms, AI tools, and operational systems for businesses. Building since 2013.",
  alternates: { canonical: "https://www.pellar.co.uk/about" },
  openGraph: {
    title: "About | Pellar",
    description:
      "Pellar Technologies is a UK technology partner delivering web platforms, AI tools, and operational systems for businesses. Building since 2013.",
    url: "https://www.pellar.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="A small team. Real systems. Since 2013."
      />

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <ScrollReveal>
              <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
                The team
              </p>
              <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-fg leading-tight">
                Built by the people who ship it.
              </h2>
            </ScrollReveal>
          </div>
          <div className="md:col-span-7 space-y-6">
            <ScrollReveal delay={100}>
              <p className="font-satoshi text-lg text-fg-secondary leading-relaxed">
                Pellar Technologies is a UK technology partner. We work with businesses to design, build, and run the systems they need to operate. One team carries the work from first call to live product. There are no project manager layers and no offshore handoffs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="font-satoshi text-lg text-fg-secondary leading-relaxed">
                We have been delivering technology since 2013. Over that time we have built products of our own and shipped systems for founders, agencies, and operations teams across the UK. Every project follows the same line: pick a real problem, ship something that works, then keep it working.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="bg-surface border-t border-border">
        <Principles />
      </div>

      <Contact />
    </main>
  );
}
