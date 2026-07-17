import AdSenseAd from "./components/AdSenseAd";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import { adsenseConfig } from "@/lib/adsense";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Marketing sections below the app-style home */}
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
      <Testimonials />
      <Pricing />
      <Clients />
      <CTA />
      <Contact />
    </main>
  );
}
