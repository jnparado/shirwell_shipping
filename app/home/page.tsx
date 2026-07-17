import type { Metadata } from "next";
import AdSenseAd from "@/app/components/AdSenseAd";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Stats from "@/app/components/Stats";
import Pricing from "@/app/components/Pricing";
import CTA from "@/app/components/CTA";
import Contact from "@/app/components/Contact";
import { adsenseConfig } from "@/lib/adsense";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Fast Delivery & Logistics`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/home" },
  openGraph: {
    title: `${siteConfig.name} | Fast Delivery & Logistics`,
    description: siteConfig.description,
    url: "/home",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <About />
      <Services />
      {adsenseConfig.enabled && (
        <section
          aria-label="Advertisement"
          className="border-y border-border bg-surface px-4 py-8"
        >
          <div className="mx-auto max-w-5xl overflow-hidden">
            <AdSenseAd
              className="min-h-[250px]"
              slot={adsenseConfig.inlineSlot}
              format="auto"
            />
          </div>
        </section>
      )}
      <Stats />
      <Pricing />
      <CTA />
      <Contact />
    </main>
  );
}
