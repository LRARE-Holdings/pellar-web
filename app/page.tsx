import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { SolutionsPreview } from "@/components/SolutionsPreview";
import { Work } from "@/components/Work";
import { Principles } from "@/components/Principles";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <SolutionsPreview />
      <Work />
      <Principles />
      <Contact />
    </main>
  );
}
