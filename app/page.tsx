import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Principles } from "@/components/Principles";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <Principles />
      <About />
      <Contact />
    </main>
  );
}
