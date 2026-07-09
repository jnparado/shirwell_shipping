import Hero from "./components/Hero";
import SectionNav from "./components/SectionNav";
import About from "./components/About";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionNav />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <Pricing />
      <Clients />
      <CTA />
      <Contact />
    </main>
  );
}
