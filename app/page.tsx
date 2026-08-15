import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { BatchSpotlight } from "@/components/sections/BatchSpotlight";
import { ApiSection } from "@/components/sections/ApiSection";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Home() {
  return (
    <>
    <GoogleTagManager gtmId="G-6LJJNDV979" />
      <Hero />
      <HowItWorks />
      <Features />
      <BatchSpotlight />
      <ApiSection />
      <Pricing />
      <FinalCta />
    </>
  );
}
