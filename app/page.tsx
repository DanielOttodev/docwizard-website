import { Hero } from "@/components/sections/Hero";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { BuildInWord } from "@/components/sections/BuildInWord";
import { Features } from "@/components/sections/Features";
import { BatchSpotlight } from "@/components/sections/BatchSpotlight";
import { VersionControl } from "@/components/sections/VersionControl";
import { ApiSection } from "@/components/sections/ApiSection";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <UseCases />
      <HowItWorks />
      <BuildInWord />
      <Features />
      <VersionControl />
      <ApiSection />
      <Pricing />
      <FinalCta />
    </>
  );
}
