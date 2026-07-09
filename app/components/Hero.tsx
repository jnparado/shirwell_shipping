import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen min-h-[100dvh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.png"
          alt="Colorful shipping containers at a logistics port"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-24 sm:gap-10 sm:px-6 sm:pb-20 sm:pt-28 md:pt-32 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="min-w-0">
          <span className="mb-4 block h-[3px] w-12 bg-brand-red sm:mb-5 sm:w-16" aria-hidden="true" />
          <h1 className="text-3xl font-bold leading-[1.15] text-white sm:max-w-md sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Fast Delivery Service
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white sm:mt-6 sm:text-base md:text-[1.05rem]">
            We are committed to provide cost effective Logistic Solutions for every
            business. With a timed delivery that offers complete flexibility, Shirwell
            ensures that you never have to wait.
          </p>
          <Link
            href="#about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-normal text-white transition-opacity hover:opacity-80 sm:mt-10 sm:text-base"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div
          id="track"
          className="mx-auto w-full max-w-md border border-white/25 bg-white/10 p-5 backdrop-blur-md sm:p-8 lg:ml-auto lg:max-w-none"
        >
          <p className="text-[15px] font-normal text-white">Enter Tracking Code</p>
          <form action="/track" method="get" className="mt-5">
            <label htmlFor="tracking-code" className="sr-only">
              Tracking code
            </label>
            <input
              id="tracking-code"
              name="code"
              type="text"
              placeholder="Tracking Code"
              required
              className="w-full border border-white/20 bg-white/20 px-4 py-4 text-white placeholder:text-white/60 backdrop-blur-sm focus:border-white/40 focus:outline-none"
            />
            <button
              type="submit"
              className="mt-5 w-full border border-gold bg-gold py-4 font-serif text-sm font-bold uppercase tracking-[0.15em] text-black backdrop-blur-sm transition-colors hover:bg-gold-bright"
            >
              Track Shipment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
