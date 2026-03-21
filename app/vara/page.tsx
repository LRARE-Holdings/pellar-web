import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Vara",
  description:
    "AI-native regulatory compliance monitoring for UK firms. Monitors FCA, ICO, HMRC, SRA, and CQC. Coming soon.",
  openGraph: {
    title: "Vara | Regulatory compliance monitoring",
    description:
      "Monitors UK regulatory bodies, interprets policy changes, maps them to your obligations, and generates actionable next steps.",
    url: "https://pellar.co.uk/vara",
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

export default function VaraPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <p className="font-dm text-sm text-stone/60 uppercase tracking-widest">
                Vara
              </p>
              <span className="font-dm text-xs text-sage border border-sage/30 rounded-full px-3 py-1">
                Coming soon
              </span>
            </div>
            <h1 className="font-outfit font-light text-5xl md:text-7xl lg:text-8xl text-off-white leading-[1.05] tracking-tight max-w-5xl">
              Regulation moves. You should too.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 font-dm text-lg md:text-xl text-stone max-w-xl leading-relaxed">
              AI-native regulatory compliance monitoring for UK firms.
              Vara watches the regulators so you don&apos;t have to.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-4 font-dm text-sm text-stone/60">
              getvara.co.uk
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
                Regulated firms get hundreds of regulatory updates per year.
                Most miss things. Vara makes sure they don&apos;t.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              How it works
            </p>
            <h2 className="font-outfit font-light text-3xl md:text-4xl text-off-white mb-20">
              Always-on compliance.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Monitors regulatory sources",
                desc: "FCA, ICO, HMRC, SRA, CQC. Continuous, automatic scanning.",
              },
              {
                step: "02",
                title: "Interprets what changed",
                desc: "AI reads the update and determines who it affects and why.",
              },
              {
                step: "03",
                title: "Maps to your obligations",
                desc: "Changes are matched to your firm's existing compliance framework.",
              },
              {
                step: "04",
                title: "Generates next steps",
                desc: "Draft policy updates, procedure amendments, training briefs, board-ready summaries.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div>
                  <span className="font-dm text-xs text-forest block mb-4">
                    {item.step}
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

      {/* What it is not */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-8">
                What Vara is not
              </p>
              <div className="space-y-4">
                <p className="font-dm text-base text-stone">Not a news feed.</p>
                <p className="font-dm text-base text-stone">Not a consultancy.</p>
                <p className="font-dm text-base text-off-white mt-6">
                  An always-on compliance operating system.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              Who it&apos;s for
            </p>
            <p className="font-dm text-lg text-stone max-w-2xl leading-relaxed">
              FCA-regulated financial advisers. Accountancy practices. Law firms.
              Recruitment agencies. Healthcare providers. Any regulated SME that
              can&apos;t afford a full-time compliance team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-light text-3xl md:text-5xl text-off-white mb-6">
              Want early access?
            </h2>
            <a href="mailto:hello@pellar.co.uk" className="cta-link mt-4">
              <span>hello@pellar.co.uk</span>
              <CtaArrow />
            </a>
            <p className="mt-6">
              <a
                href="https://getvara.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-sm text-stone/60 hover:text-stone transition-colors duration-300"
              >
                Visit getvara.co.uk
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
