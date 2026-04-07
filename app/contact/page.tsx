import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We reply to every enquiry within one working day.",
  alternates: { canonical: "https://www.pellar.co.uk/contact" },
  openGraph: {
    title: "Contact | Pellar",
    description:
      "Tell us about your project. We reply to every enquiry within one working day.",
    url: "https://www.pellar.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you need."
        intro={
          <>
            A few sentences is enough to start the conversation. We come back with questions, ideas, and a sensible next step.
          </>
        }
      />

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-4">
                Email
              </p>
              <a
                href="mailto:hello@pellar.co.uk"
                className="font-satoshi text-lg text-forest hover:text-sage transition-colors"
              >
                hello@pellar.co.uk
              </a>
            </div>
            <div>
              <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-4">
                Where we work
              </p>
              <p className="font-satoshi text-base text-fg-secondary leading-relaxed">
                Across the UK, remote-first. We meet on calls, on site when it helps, and we keep delivery moving in between.
              </p>
            </div>
            <div>
              <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-4">
                What happens next
              </p>
              <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-3">
                One of us reads your message the same day. If your project is a fit, we book a free 30-minute scoping call.
              </p>
              <p className="font-satoshi text-base text-fg-secondary leading-relaxed">
                After the call you get a written summary, an honest opinion on the approach, and a fixed price if you want to move forward.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
