import Image from "next/image";
import Link from "next/link";

type LogoBrandProps = {
  className?: string;
  compact?: boolean;
};

export default function LogoBrand({ className = "", compact = false }: LogoBrandProps) {
  return (
    <Link
      href="/home"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Shirwell Shipping — Fast, Reliable, Worldwide"
    >
      <span
        className={`relative block overflow-hidden rounded-xl bg-white shadow-md shadow-black/40 ring-1 ring-gold/30 ${
          compact
            ? "h-11 w-11 sm:h-12 sm:w-12 md:h-[3.25rem] md:w-[3.25rem]"
            : "h-14 w-14 sm:h-16 sm:w-16"
        }`}
      >
        <Image
          src="/logo.png"
          alt="Shirwell Shipping logo featuring horse, cargo ship, and truck — Fast, Reliable, Worldwide"
          fill
          className="object-contain p-0.5"
          sizes="(max-width: 640px) 44px, 64px"
          priority
        />
      </span>
    </Link>
  );
}
