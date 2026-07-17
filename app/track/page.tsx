import AdSenseAd from "@/app/components/AdSenseAd";
import ShipmentTimeline from "@/app/components/ShipmentTimeline";
import TrackingMap from "@/app/components/TrackingMap";
import TrackingSummaryCard from "@/app/components/TrackingSummaryCard";
import AppPageHeader from "@/app/components/ui/AppPageHeader";
import AppShell from "@/app/components/ui/AppShell";
import PrimaryButton from "@/app/components/ui/PrimaryButton";
import { adsenseConfig } from "@/lib/adsense";
import { getShipmentByCode } from "@/lib/shipments";
import { ScanLine } from "lucide-react";

type TrackPageProps = {
  searchParams: Promise<{ code?: string }>;
};

export const metadata = {
  title: "Track Shipment",
};

export default async function TrackPage({ searchParams }: TrackPageProps) {
  const { code } = await searchParams;
  const trackingCode = code?.trim() ?? "";
  const shipment = trackingCode ? getShipmentByCode(trackingCode) : null;

  return (
    <AppShell narrow>
      <AppPageHeader title="Track Shipment" backHref="/" />

      {!shipment ? (
        <div className="animate-fade-up space-y-5">
          <p className="text-muted">Enter your tracking code to view shipment status.</p>
          <form action="/track" method="get" className="space-y-4">
            <div className="relative">
              <label htmlFor="code" className="mb-1.5 block text-sm font-medium text-muted">
                Tracking Code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                placeholder="e.g. SWS123456789"
                required
                className="w-full rounded-xl border border-border bg-surface-elevated px-4 py-3.5 pr-12 text-foreground placeholder:text-muted/70 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
              <span className="pointer-events-none absolute bottom-3.5 right-3 text-gold">
                <ScanLine className="h-5 w-5" strokeWidth={1.75} />
              </span>
            </div>
            <PrimaryButton type="submit">Track Shipment</PrimaryButton>
          </form>
          <p className="text-center text-sm text-muted">
            Try demo code{" "}
            <a href="/track?code=SWS123456789" className="font-semibold text-gold hover:underline">
              SWS123456789
            </a>
          </p>
        </div>
      ) : (
        <div className="animate-fade-up space-y-5">
          <TrackingSummaryCard shipment={shipment} />
          <ShipmentTimeline events={shipment.timeline} />
          <TrackingMap code={shipment.trackingNumber} />
          <PrimaryButton
            href={`/shipments/${shipment.id === "demo" ? "1" : shipment.id}`}
          >
            View Details
          </PrimaryButton>

          {adsenseConfig.enabled && adsenseConfig.boxAdSlot && (
            <section aria-label="Advertisement" className="overflow-hidden pt-2">
              <AdSenseAd
                className="min-h-[250px]"
                slot={adsenseConfig.boxAdSlot}
                format="rectangle"
              />
            </section>
          )}
        </div>
      )}
    </AppShell>
  );
}
