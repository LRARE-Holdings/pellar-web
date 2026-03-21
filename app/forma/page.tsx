import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Forma",
  description:
    "Your studio, online. Website, class booking, payments, and email for fitness and leisure studios. One platform, live in under a week.",
  openGraph: {
    title: "Forma | Your studio, online",
    description:
      "A unified platform for fitness and leisure studios. Website, booking, payments, and email in one place. No more stitching together five different tools.",
    url: "https://pellar.co.uk/forma",
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

export default function FormaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-6">
              Forma
            </p>
            <h1 className="font-outfit font-light text-5xl md:text-7xl lg:text-8xl text-off-white leading-[1.05] tracking-tight max-w-5xl">
              Your studio, online.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 font-dm text-lg md:text-xl text-stone max-w-xl leading-relaxed">
              Website, class booking, payments, and email for fitness and leisure studios.
              One platform, not five disconnected tools. Live in under a week.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-4 font-dm text-sm text-stone/60">
              useforma.co.uk
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
                Studios deserve better than enterprise software priced for chains
                or a patchwork of disconnected widgets.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Forma includes */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              What you get
            </p>
            <h2 className="font-outfit font-light text-3xl md:text-4xl text-off-white mb-20">
              Everything your studio needs. Nothing it doesn&apos;t.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                num: "01",
                title: "Studio website",
                desc: "A purpose-built site with your branding and custom domain. Not a template with a widget bolted on.",
              },
              {
                num: "02",
                title: "Class booking",
                desc: "Native scheduling with capacity controls. Your clients book directly on your site, not through a third party.",
              },
              {
                num: "03",
                title: "Payments",
                desc: "Stripe-powered payments for classes, packs, and memberships. No hidden fees or transaction commissions.",
              },
              {
                num: "04",
                title: "Email",
                desc: "Automated confirmations, reminders, and client communications. No separate email tool needed.",
              },
              {
                num: "05",
                title: "Schedule management",
                desc: "Live schedule with capacity controls. Update once, it shows everywhere.",
              },
              {
                num: "06",
                title: "Analytics",
                desc: "See what is working. Class attendance, revenue, client activity. All in one dashboard.",
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

      {/* How it works */}
      <section className="px-6 py-32 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              How it works
            </p>
            <h2 className="font-outfit font-light text-3xl md:text-4xl text-off-white mb-20">
              Live in under a week.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Set up your studio",
                desc: "Add your branding, classes, and schedule. Connect your Stripe account.",
              },
              {
                step: "02",
                title: "Build your site",
                desc: "Your studio website goes live with booking built in. Custom domain, your brand.",
              },
              {
                step: "03",
                title: "Clients book and pay",
                desc: "Classes, packs, memberships. Payments go straight to your account.",
              },
              {
                step: "04",
                title: "Run your studio",
                desc: "Manage your schedule, track attendance, and grow. Everything in one place.",
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
                What Forma is not
              </p>
              <div className="space-y-4">
                <p className="font-dm text-base text-stone">Not enterprise software.</p>
                <p className="font-dm text-base text-stone">Not a booking widget bolted onto a template.</p>
                <p className="font-dm text-base text-stone">Not another tool that costs more than it should.</p>
                <p className="font-dm text-base text-off-white mt-6">
                  One platform for your entire studio. Starting at &pound;39/month.
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
              Pilates studios. Yoga studios. Fitness facilities. Leisure businesses.
              Studios that want a professional digital presence without the complexity
              or cost of platforms built for chains.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-light text-3xl md:text-5xl text-off-white mb-6">
              Ready to put your studio online?
            </h2>
            <a href="mailto:hello@pellar.co.uk" className="cta-link mt-4">
              <span>hello@pellar.co.uk</span>
              <CtaArrow />
            </a>
            <p className="mt-6">
              <a
                href="https://useforma.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-sm text-stone/60 hover:text-stone transition-colors duration-300"
              >
                Visit useforma.co.uk
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
