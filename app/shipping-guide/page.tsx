import type { Metadata } from "next";
import Link from "next/link";
import AdSenseAd from "@/app/components/AdSenseAd";
import { adsenseConfig } from "@/lib/adsense";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shipping Guide",
  description:
    "Complete Shirwell Shipping guide: how to track packages, book freight, choose sea/air/land shipping, and estimate rates.",
  keywords: [
    "shipping guide",
    "how to ship",
    "track package",
    "Shirwell Shipping",
    "freight guide",
  ],
  alternates: { canonical: "/shipping-guide" },
};

export default function ShippingGuidePage() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-background px-4 py-10 sm:px-6 sm:py-14">
      <article className="mx-auto max-w-3xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Resources</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Shipping Guide
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Everything you need to ship with {siteConfig.name} — from choosing a freight mode to
          tracking your delivery.
        </p>

        <div className="mt-10 space-y-10 text-base leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Choose your shipping mode</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>
                <strong className="text-foreground">Sea freight</strong> — best for larger or
                less time-sensitive cargo; usually the most cost-effective option.
              </li>
              <li>
                <strong className="text-foreground">Air freight</strong> — fastest for urgent
                parcels and high-value goods.
              </li>
              <li>
                <strong className="text-foreground">Land freight</strong> — reliable for regional
                and domestic routes by road or rail.
              </li>
            </ul>
            <p className="mt-3">
              Start a booking on our{" "}
              <Link href="/book" className="font-semibold text-gold hover:underline">
                Book a Shipment
              </Link>{" "}
              page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Estimate your rate</h2>
            <p className="mt-3 text-muted">
              Use the{" "}
              <Link href="/calculator" className="font-semibold text-gold hover:underline">
                Rate Calculator
              </Link>{" "}
              with origin, destination, weight, and dimensions (L × W × H). Estimates include
              base rate, fuel surcharge, and handling fees. Final invoices may differ after
              actual weighing and customs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Pack and label correctly</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>Use sturdy outer packaging suited to the freight mode</li>
              <li>Seal cartons and protect fragile items with adequate cushioning</li>
              <li>Include a clear commercial invoice for international shipments</li>
              <li>Keep prohibited and restricted items off your booking</li>
            </ul>
          </section>

          {adsenseConfig.enabled && (
            <section aria-label="Advertisement" className="overflow-hidden py-2">
              <AdSenseAd className="min-h-[250px]" slot={adsenseConfig.boxAdSlot} format="rectangle" />
            </section>
          )}

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Track your shipment</h2>
            <p className="mt-3 text-muted">
              Enter your tracking code on the{" "}
              <Link href="/track" className="font-semibold text-gold hover:underline">
                Track Shipment
              </Link>{" "}
              page to see live status, timeline events, and map progress. Save the code from
              your booking confirmation email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Need help?</h2>
            <p className="mt-3 text-muted">
              Our support team can help with quotes, delays, and documentation. Visit{" "}
              <Link href="/contact" className="font-semibold text-gold hover:underline">
                Contact Us
              </Link>{" "}
              or email {siteConfig.contactEmail}.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
