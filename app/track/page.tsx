import Link from "next/link";

type TrackPageProps = {
  searchParams: Promise<{ code?: string }>;
};

export const metadata = {
  title: "Track Shipment",
};

export default async function TrackPage({ searchParams }: TrackPageProps) {
  const { code } = await searchParams;

  return (
    <main className="bg-surface px-4 py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-xl sm:px-2 lg:px-0">
        <h1 className="font-serif text-2xl font-bold text-gold sm:text-3xl">Track Your Shipment</h1>
        <p className="mt-2 text-muted">Enter your tracking code to check delivery status.</p>

        <form action="/track" method="get" className="mt-8 space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-foreground">
              Tracking Code
            </label>
            <input
              id="code"
              name="code"
              type="text"
              defaultValue={code ?? ""}
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

        {code && (
          <div className="mt-8 border border-border bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted">Tracking Code</p>
            <p className="mt-1 text-xl font-bold text-foreground">{code}</p>
            <p className="mt-4 text-muted">
              Your shipment is currently in transit. Check back soon for updated delivery status.
            </p>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-muted">
          <Link href="/" className="font-semibold text-gold hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </main>
  );
}
