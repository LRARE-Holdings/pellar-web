import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Noodle",
  description:
    "Thought capture for people who think faster than they can organise. Capture ideas before they disappear.",
  openGraph: {
    title: "Noodle | Think it. Catch it. Keep it.",
    description:
      "Quick capture, AI clustering, and smart resurfacing. For students, creatives, founders, and overthinkers.",
    url: "https://pellar.co.uk/noodle",
  },
};

function CtaArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NoodlePage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-6">
              Noodle
            </p>
            <h1 className="font-outfit font-light text-5xl md:text-7xl lg:text-8xl text-off-white leading-[1.05] tracking-tight max-w-4xl">
              Think it. Catch it. Keep it.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 font-dm text-lg md:text-xl text-stone max-w-xl leading-relaxed">
              Thought capture for people who think faster than they can organise.
              Ideas, thoughts, and fleeting notes caught before they disappear.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core concept */}
      <section className="px-6 py-24 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-instrument italic text-sage text-2xl md:text-3xl leading-relaxed">
                Your best ideas don&apos;t arrive in order. They arrive in the shower,
                on the bus, at 2am. Noodle catches them all.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Noodle does */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              What Noodle does
            </p>
            <h2 className="font-outfit font-light text-3xl md:text-4xl text-off-white mb-20">
              Capture. Cluster. Resurface.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                num: "01",
                title: "Quick capture",
                desc: "Get the thought down in seconds. Text, voice, whatever. No friction, no formatting.",
              },
              {
                num: "02",
                title: "AI clustering",
                desc: "Related thoughts find each other. Noodle spots connections you might have missed.",
              },
              {
                num: "03",
                title: "Smart resurfacing",
                desc: "Forgotten ideas get nudged back to the surface. Rough notes expand into something useful.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <div>
                  <span className="font-dm text-xs text-forest block mb-4">
                    {item.num}
                  </span>
                  <h3 className="font-outfit font-light text-lg text-off-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-dm text-sm text-stone leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 py-24 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              Use cases
            </p>
            <h2 className="font-outfit font-light text-3xl md:text-4xl text-off-white mb-16">
              Ideas arrive anywhere.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              {
                title: "Research and study",
                desc: "Capture fragments from lectures, readings, and conversations. Let Noodle connect them later.",
              },
              {
                title: "Creative projects",
                desc: "Catch the spark before it fades. Song lyrics, plot threads, design ideas, half-formed concepts.",
              },
              {
                title: "Product thinking",
                desc: "Feature ideas, user problems, competitor observations. Scattered thoughts become a clear picture.",
              },
              {
                title: "Daily clarity",
                desc: "Morning brain dumps, meeting takeaways, things you want to remember. All in one place, searchable.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-ink p-10">
                  <h3 className="font-outfit font-light text-lg text-off-white mb-3">
                    {item.title}
                  </h3>
                  <p className="font-dm text-sm text-stone leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it is not */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-8">
                What Noodle is not
              </p>
              <div className="space-y-4">
                <p className="font-dm text-base text-stone">Not a note-taking app.</p>
                <p className="font-dm text-base text-stone">Not a to-do list.</p>
                <p className="font-dm text-base text-stone">Not a second brain with a learning curve.</p>
                <p className="font-dm text-base text-off-white mt-6">
                  Thought capture. Fast in, always there, never lost.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              Who it&apos;s for
            </p>
            <p className="font-dm text-lg text-stone max-w-2xl leading-relaxed">
              Students. Creatives. Founders. Overthinkers. Anyone who has ideas
              faster than they can write them down.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-light text-3xl md:text-5xl text-off-white mb-6">
              Never lose a thought again.
            </h2>
            <a href="mailto:hello@pellar.co.uk" className="cta-link mt-4">
              <span>hello@pellar.co.uk</span>
              <CtaArrow />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
