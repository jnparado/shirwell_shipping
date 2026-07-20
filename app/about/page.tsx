import type { Metadata } from "next";
import Link from "next/link";
import { formatAddress, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — worldwide shipping, freight forwarding, and logistics solutions since 2019.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-background px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-3xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">About Us</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Shirwell Shipping
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Fast, reliable, worldwide shipping and logistics for businesses and individuals.
        </p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            Founded in 2019, {siteConfig.name} provides cost-effective logistic solutions with
            timed delivery and complete flexibility. We support domestic, international, and
            e-commerce shipping through sea freight, air freight, and land freight options.
          </p>
          <p>
            Our platform lets you track shipments in real time, estimate rates, book cargo, and
            manage your account online or through our mobile app. We partner with a growing
            network of hubs and carriers so your goods keep moving.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-foreground">What we offer</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted">
            <li>Live shipment tracking with route visibility</li>
            <li>Sea, air, and land freight booking tools</li>
            <li>Instant rate calculator for planning</li>
            <li>Dedicated customer support for shipping questions</li>
            <li>Solutions for e-commerce fulfillment and parcel delivery</li>
          </ul>

          <h2 className="pt-4 text-xl font-semibold text-foreground">Our commitment</h2>
          <p>
            We are committed to transparent communication, careful handling, and dependable
            transit times. Whether you are shipping a single parcel or managing regular freight,
            Shirwell aims to keep your supply chain simple.
          </p>

          <h2 className="pt-4 text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Email:{" "}
            <a className="text-gold hover:underline" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <br />
            Phone: {siteConfig.contactPhone}
            <br />
            Address: {formatAddress()}
          </p>
          <p>
            <Link href="/contact" className="font-semibold text-gold hover:underline">
              Contact us →
            </Link>{" "}
            ·{" "}
            <Link href="/privacy" className="font-semibold text-gold hover:underline">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="font-semibold text-gold hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
