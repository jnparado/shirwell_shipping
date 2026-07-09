import TrackingMap from "@/app/components/TrackingMap";
import Link from "next/link";

type TrackPageProps = {
  searchParams: Promise<{ code?: string }>;
};

export const metadata = {
  title: "Track Shipment",
};

export default async function TrackPage({ searchParams }: TrackPageProps) {
  const { code } = await searchParams;
  const trackingCode = code?.trim() ?? "";

  return (
    <main className="bg-surface px-4 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl sm:px-2 lg:px-0">
        <h1 className="font-serif text-2xl font-bold text-gold sm:text-3xl">Track Your Shipment</h1>
        <p className="mt-2 text-muted">Enter your tracking code to view live location on the map.</p>

        <form action="/track" method="get" className="mt-8 space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-foreground">
              Tracking Code
            </label>
            <input
              id="code"
              name="code"
              type="text"
              defaultValue={trackingCode}
              placeholder="Enter tracking code"
              required
              className="mt-1.5 w-full border border-border bg-white px-4 py-3.5 text-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
            />
          </div>
          <button
            type="submit"
            className="w-full border border-gold bg-gold py-3.5 font-serif text-sm font-bold uppercase tracking-wide text-black hover:bg-gold-bright"
          >
            Track Shipment
          </button>
        </form>

        {trackingCode && <TrackingMap code={trackingCode} />}

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/" className="font-semibold text-gold hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
