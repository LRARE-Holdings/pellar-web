import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Receipt",
  description:
    "Proof of document acknowledgement. Clear evidence of delivery, review activity, and acknowledgement. Not e-signature. Not consent capture.",
  openGraph: {
    title: "Receipt | Proof of document acknowledgement",
    description:
      "Clear evidence that documents were actually reviewed, not just sent. Upload a PDF, send a link, get a verifiable record.",
    url: "https://pellar.co.uk/receipt",
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

export default function ReceiptPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-6">
              Receipt
            </p>
            <h1 className="font-outfit font-light text-5xl md:text-7xl lg:text-8xl text-off-white leading-[1.05] tracking-tight max-w-4xl">
              Sent is not seen.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 font-dm text-lg md:text-xl text-stone max-w-xl leading-relaxed">
              Proof of document acknowledgement. Clear evidence of delivery, review activity,
              and acknowledgement for policies, procedures, and client documents.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-4 font-dm text-sm text-stone/60">
              getreceipt.co
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
                Sending an email is not evidence that someone read it. Receipt closes the gap
                between sent and seen.
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
              Four steps. Full clarity.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                step: "01",
                title: "Upload your PDF",
                desc: "Drop in the document you need acknowledged.",
              },
              {
                step: "02",
                title: "Send one share link",
                desc: "One link, one recipient or many. No accounts needed.",
              },
              {
                step: "03",
                title: "Recipient reviews and confirms",
                desc: "They read the document and acknowledge it on their terms.",
              },
              {
                step: "04",
                title: "Export a clean audit trail",
                desc: "Delivery time, scroll depth, time on page, acknowledgement status.",
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

      {/* What it records */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-4">
              What Receipt records
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              "Delivery time",
              "First open",
              "Scroll depth",
              "Time on page",
              "Acknowledgement status",
              "Document hash & version",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 60}>
                <div className="border border-white/5 rounded-sm p-6">
                  <p className="font-dm text-sm text-off-white">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <p className="mt-12 font-dm text-sm text-stone/60 max-w-xl">
              Optionally: IP and user agent.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What it is not */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="font-dm text-sm text-stone/60 uppercase tracking-widest mb-8">
                What Receipt is not
              </p>
              <div className="space-y-4">
                <p className="font-dm text-base text-stone">Not e-signature.</p>
                <p className="font-dm text-base text-stone">Not consent capture.</p>
                <p className="font-dm text-base text-stone">Not AI analysis.</p>
                <p className="font-dm text-base text-off-white mt-6">
                  Receipt records observable events and nothing more.
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
              Legal teams. HR and People Ops. Compliance officers. Regulated firms.
              Anyone who needs to prove a document was actually reviewed, not just sent.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-light text-3xl md:text-5xl text-off-white mb-6">
              Stop guessing. Start knowing.
            </h2>
            <a href="mailto:hello@pellar.co.uk" className="cta-link mt-4">
              <span>hello@pellar.co.uk</span>
              <CtaArrow />
            </a>
            <p className="mt-6">
              <a
                href="https://getreceipt.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-sm text-stone/60 hover:text-stone transition-colors duration-300"
              >
                Visit getreceipt.co
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
