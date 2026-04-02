import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="font-instrument text-3xl md:text-5xl text-ink mb-10">
            About Pellar
          </h2>
        </ScrollReveal>
        <div className="max-w-2xl">
          <ScrollReveal delay={100}>
            <p className="font-dm text-lg text-ink/80 leading-relaxed mb-6">
              Pellar is a small, focused software studio based in Newcastle-upon-Tyne. We&apos;ve been building software since 2013.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-dm text-lg text-ink/80 leading-relaxed mb-6">
              We work directly with businesses to build web applications, MVPs, and production platforms. No layers of project managers. No offshore handoffs. One team that designs, builds, and operates what we ship.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="font-dm text-lg text-stone leading-relaxed">
              Built in Newcastle. Proud of it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
