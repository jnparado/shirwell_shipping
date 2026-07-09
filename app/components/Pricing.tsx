import Link from "next/link";

const plans = [
  {
    name: "Road Freight",
    price: 40,
    load: "40kg load",
    features: ["Warehousing", "Free Packaging", "24/7 Support"],
    featured: false,
  },
  {
    name: "Ocean Freight",
    price: 40,
    load: "70kg load",
    features: ["Warehousing", "Free Packaging", "24/7 Support"],
    featured: true,
  },
  {
    name: "Air Freight",
    price: 40,
    load: "40kg load",
    features: ["Warehousing", "Free Packaging", "24/7 Support"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent sm:text-sm">
            Our Pricing
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Flexible Plans for Every Need
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Like our products, our pricing isn&apos;t one-size-fits-all. We calculate your
            personalized quote by looking at your specific needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-5 transition-all hover:shadow-xl sm:p-8 ${
                plan.featured
                  ? "border-primary bg-primary text-white shadow-lg lg:scale-[1.02]"
                  : "border-border bg-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-sm font-bold uppercase tracking-widest ${
                  plan.featured ? "text-neutral-400" : "text-muted"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold sm:text-5xl">${plan.price}</span>
                <span className={plan.featured ? "text-neutral-400" : "text-muted"}>/shipment</span>
              </div>
              <p className={`mt-2 text-sm ${plan.featured ? "text-neutral-400" : "text-muted"}`}>
                {plan.load}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <svg
                      className={`h-5 w-5 shrink-0 ${plan.featured ? "text-accent" : "text-accent"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.featured ? "text-neutral-200" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-bold transition-colors ${
                  plan.featured
                    ? "bg-accent text-primary hover:bg-accent-hover"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
