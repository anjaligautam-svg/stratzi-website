import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyStratzi } from "@/components/sections/WhyStratzi";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Pillars />
        <WhoWeWorkWith />
        <HowItWorks />
        <WhyStratzi />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
