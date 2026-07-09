import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="grid lg:grid-cols-2">
      <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px]">
        <Image
          src="/about-truck-branded.png"
          alt="Shirwell Shipping delivery truck with company logo on the side door"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center bg-brand-red px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <span className="mb-4 block h-1 w-12 bg-white sm:mb-6 sm:w-14" aria-hidden="true" />
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">About Us</p>
        <h2 className="mt-4 max-w-xl text-xl font-bold leading-snug text-white sm:mt-5 sm:text-2xl lg:text-3xl">
          Founded in 2012, we belong to a distinguished class of logistic companies with a
          clear defined market path.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 sm:mt-6 sm:text-base lg:text-[1.05rem]">
          With scores of local branches and a robust global network, we provide domestic
          intra and inter-state express delivery services. Our footprints are also clearly
          visible in the areas of freight forwarding and e-commerce logistics.
        </p>
      </div>
    </section>
  );
}
