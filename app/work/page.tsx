import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Products Pellar has built and operates. Forma is a studio management platform. Noodle is an AI thought-capture app for iOS.",
  alternates: { canonical: "https://www.pellar.co.uk/work" },
  openGraph: {
    title: "Work | Pellar",
    description:
      "Products Pellar has built and operates. Forma is a studio management platform. Noodle is an AI thought-capture app for iOS.",
    url: "https://www.pellar.co.uk/work",
  },
};

const projects = [
  {
    name: "Forma",
    role: "Built and operated by Pellar",
    url: "https://useforma.co.uk",
    urlLabel: "useforma.co.uk",
    description:
      "A studio management platform for fitness and Pilates studios. Each studio gets its own branded website, online booking, payment processing, customer management, automated email, and analytics, all in one place.",
    demonstrates: [
      "Multi-tenant SaaS architecture",
      "Stripe payments and subscriptions",
      "Calendar engine and booking flows",
      "Automated transactional email",
      "Customer accounts and admin dashboard",
    ],
    tech: "Next.js, TypeScript, Postgres, Stripe, Resend",
  },
  {
    name: "Noodle",
    role: "Built and operated by Pellar",
    url: null,
    urlLabel: null,
    description:
      "An iOS-only thought-capture app. Quick capture from anywhere, AI-assisted clustering of related ideas, and smart resurfacing of notes you would otherwise forget. A consumer product about getting your head clear.",
    demonstrates: [
      "Native iOS development in Swift",
      "On-device and cloud AI integration",
      "Local-first sync architecture",
      "Consumer product and interaction design",
    ],
    tech: "Swift, SwiftUI, CoreData, Anthropic API",
  },
];

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Work"
        title="Products we've built and operate."
        intro={
          <>
            We don&apos;t just talk about building software. These are products we&apos;ve designed, shipped, and continue to run. They&apos;re also the proof that we know how to deliver the same quality for clients.
          </>
        }
      />

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 80}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-border pt-12">
                <div className="md:col-span-2">
                  <span className="font-satoshi text-xs text-sage tracking-[0.15em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-10">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 mb-6">
                    <h2 className="font-satoshi font-bold text-3xl md:text-5xl text-fg leading-tight">
                      {p.name}
                    </h2>
                    <span className="font-satoshi text-xs uppercase tracking-[0.15em] text-fg-muted">
                      {p.role}
                    </span>
                  </div>
                  <p className="font-satoshi text-lg text-fg-secondary leading-relaxed mb-10 max-w-3xl">
                    {p.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-10">
                    <div>
                      <div className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-4">
                        What it demonstrates
                      </div>
                      <div className="divide-y divide-border border-y border-border">
                        {p.demonstrates.map((d) => (
                          <div
                            key={d}
                            className="font-satoshi text-sm text-fg-secondary leading-relaxed py-3"
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-4">
                        Built with
                      </div>
                      <p className="font-satoshi text-sm text-fg-secondary leading-relaxed">
                        {p.tech}
                      </p>
                    </div>
                  </div>

                  {p.url && p.urlLabel && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-link"
                    >
                      <span>{p.urlLabel}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
