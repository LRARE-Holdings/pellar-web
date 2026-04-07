import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web platforms, MVPs, AI tools, websites, and ongoing technology partnerships. Pricing and engagement details for working with Pellar.",
  alternates: { canonical: "https://www.pellar.co.uk/services" },
  openGraph: {
    title: "Services | Pellar",
    description:
      "Web platforms, MVPs, AI tools, websites, and ongoing technology partnerships. Pricing and engagement details for working with Pellar.",
    url: "https://www.pellar.co.uk/services",
  },
};

const services = [
  {
    title: "Web platforms",
    summary:
      "Customer portals, internal dashboards, admin tools. The systems your team and your customers use every day to run the business.",
    includes: [
      "Discovery and architecture",
      "Database design and APIs",
      "UI design and frontend build",
      "Deployment, monitoring, and handover",
    ],
    price: "From £15,000",
    typical: "Typical projects: £15k – £60k",
  },
  {
    title: "MVPs and new products",
    summary:
      "You bring the idea. We hand back a working product in four to eight weeks, hosted, ready for users, and pointed at a roadmap.",
    includes: [
      "Scope and feature shaping",
      "Working product in 4–8 weeks",
      "Hosted, ready for real users",
      "Roadmap for what comes next",
    ],
    price: "From £8,000",
    typical: "Typical MVPs: £8k – £25k",
  },
  {
    title: "Booking and payment systems",
    summary:
      "Scheduling, Stripe integration, customer accounts, automated email. The same engine that runs Forma, adapted to your business.",
    includes: [
      "Stripe payments and subscriptions",
      "Calendar and booking flows",
      "Customer accounts",
      "Email automation",
    ],
    price: "From £12,000",
    typical: "Typical builds: £12k – £40k",
  },
  {
    title: "Websites",
    summary:
      "Marketing sites, company sites, landing pages. Designed to a brief, written to convert, fast on every device.",
    includes: [
      "Copy direction and structure",
      "Custom design and build",
      "CMS if you need it",
      "Performance and SEO baseline",
    ],
    price: "From £4,000",
    typical: "Typical sites: £4k – £12k",
  },
  {
    title: "Technology partnership",
    summary:
      "A monthly retainer for businesses that need a steady technology partner. Continuous feature work, maintenance, and operational support.",
    includes: [
      "Reserved capacity each month",
      "Direct line to the team",
      "Maintenance and monitoring",
      "Feature work as you need it",
    ],
    price: "£700 – £1,200 / month",
    typical: "Scales with hours and scope",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="What we deliver."
        intro={
          <>
            We work with businesses at every stage. From a first prototype to a platform that runs your operation. The same small team owns the work from first call to live system.
          </>
        }
      />

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20 md:space-y-24">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 60}>
                <article className="grid md:grid-cols-12 gap-8 md:gap-12 border-t border-border pt-12">
                  <div className="md:col-span-2">
                    <span className="font-satoshi text-xs text-sage tracking-[0.15em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-6">
                    <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-fg mb-5 leading-tight">
                      {service.title}
                    </h2>
                    <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-8 max-w-xl">
                      {service.summary}
                    </p>
                    <div className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-4">
                      What&apos;s included
                    </div>
                    <div className="divide-y divide-border border-y border-border">
                      {service.includes.map((item) => (
                        <div
                          key={item}
                          className="font-satoshi text-sm text-fg-secondary leading-relaxed py-3"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="md:sticky md:top-32">
                      <div className="font-satoshi text-xs uppercase tracking-[0.15em] text-sage mb-3">
                        Investment
                      </div>
                      <div className="font-satoshi font-bold text-2xl text-fg mb-2">
                        {service.price}
                      </div>
                      <p className="font-satoshi text-sm text-fg-muted leading-relaxed">
                        {service.typical}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-satoshi text-xs tracking-[0.2em] uppercase text-sage mb-6">
              How pricing works
            </p>
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-fg leading-tight">
              Fixed scope. Honest ranges.
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-5 max-w-xl">
              Every engagement starts with a free scoping call. We use it to understand the problem, talk through approaches, and write a one-page proposal with a fixed price and timeline.
            </p>
            <p className="font-satoshi text-base text-fg-secondary leading-relaxed mb-5 max-w-xl">
              Most projects are billed in two or three milestones. Retainers are billed monthly. You get one quote, one timeline, and one team that holds it.
            </p>
            <p className="font-satoshi text-base text-fg-muted leading-relaxed max-w-xl">
              The numbers above are real ranges from work we have shipped. Your project will sit somewhere on that range depending on scope, integrations, and timeline. We will tell you where before you commit.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="cta-link">
                <span>Book a scoping call</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
