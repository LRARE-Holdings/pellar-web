import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-32 bg-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg mb-10">
            About Pellar
          </h2>
        </ScrollReveal>
        <div className="max-w-2xl">
          <ScrollReveal delay={100}>
            <p className="font-satoshi text-lg text-fg-secondary leading-relaxed mb-6">
              Pellar is a small, focused software studio based in Newcastle-upon-Tyne. We&apos;ve been building software since 2013.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-satoshi text-lg text-fg-secondary leading-relaxed mb-6">
              We work directly with businesses to build web applications, MVPs, and production platforms. No layers of project managers. No offshore handoffs. One team that designs, builds, and operates what we ship.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="font-satoshi text-lg text-fg-muted leading-relaxed">
              Built in Newcastle. Proud of it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
