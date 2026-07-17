import AdSenseAd from "./components/AdSenseAd";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import { adsenseConfig } from "@/lib/adsense";

export default function HomePage() {
  return (
    <main>
      {/* Design sheet Screen 1 — Home landing */}
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
