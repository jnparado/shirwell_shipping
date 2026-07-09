import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary/90" />
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
          Ship Your Goods Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg">
          Ready to streamline your logistics? Get in touch with Shirwell Shipping
          and experience delivery that never keeps you waiting.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/#contact"
            className="inline-flex w-full items-center justify-center gap-2 bg-accent px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-accent-hover sm:w-auto sm:py-4"
          >
            Get Started
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/track"
            className="inline-flex w-full items-center justify-center gap-2 border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto sm:py-4"
          >
            Track Shipment
          </Link>
        </div>
      </div>
    </section>
  );
}
