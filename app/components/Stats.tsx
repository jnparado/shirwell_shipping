const stats = [
  { value: "24,586+", label: "Tons Shipped" },
  { value: "10+", label: "Countries" },
  { value: "24+", label: "Vessels" },
  { value: "500+", label: "Happy Clients" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{stat.value}</p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-400 sm:mt-2 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
