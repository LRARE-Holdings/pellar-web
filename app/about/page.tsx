import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Principles } from "@/components/Principles";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pellar is a small, focused software studio based in Newcastle-upon-Tyne. We've been building software since 2013.",
  alternates: { canonical: "https://www.pellar.co.uk/about" },
  openGraph: {
    title: "About | Pellar",
    description:
      "Pellar is a small, focused software studio based in Newcastle-upon-Tyne. We've been building software since 2013.",
    url: "https://www.pellar.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="A small studio. Newcastle. Since 2013."
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
                Pellar is a focused software studio based in Newcastle-upon-Tyne. We work directly with businesses to design, build, and operate the software they need. No layers of project managers. No offshore handoffs. One team, from first call to live product.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="font-satoshi text-lg text-fg-secondary leading-relaxed">
                We&apos;ve been building software since 2013. Over that time we&apos;ve shipped products of our own and worked with founders, agencies, and operations teams across the UK. The thread that runs through all of it is the same: pick a real problem, ship something that works, then keep it working.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-satoshi text-lg text-fg-muted leading-relaxed">
                Built in Newcastle. Proud of it.
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
