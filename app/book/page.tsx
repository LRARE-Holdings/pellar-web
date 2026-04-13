import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BookingWidget } from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Pick a time for a free 30-minute scoping call. We will talk through your problem, give you an honest opinion, and outline sensible next steps.",
  alternates: { canonical: "https://www.pellar.co.uk/book" },
  openGraph: {
    title: "Book a call | Pellar",
    description:
      "Pick a time for a free 30-minute scoping call. We will talk through your problem, give you an honest opinion, and outline sensible next steps.",
    url: "https://www.pellar.co.uk/book",
  },
};

export default function BookPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Book a call"
        title="Pick a time that works."
        intro={
          <>
            A free 30-minute scoping call. We talk through your problem, give
            you an honest opinion on the approach, and outline sensible next
            steps. No pitch deck, no pressure.
          </>
        }
      />

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <BookingWidget />
        </div>
      </section>
    </main>
  );
}
