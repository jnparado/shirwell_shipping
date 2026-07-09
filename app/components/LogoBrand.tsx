import Image from "next/image";
import Link from "next/link";

type LogoBrandProps = {
  className?: string;
  compact?: boolean;
};

export default function LogoBrand({ className = "", compact = false }: LogoBrandProps) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 rounded-xl border border-gold/40 bg-black/55 px-2 py-1.5 backdrop-blur-md sm:gap-3 sm:px-3 sm:py-2 ${className}`}
    >
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-gold sm:h-11 sm:w-11 md:h-12 md:w-12">
        <Image
          src="/logo-icon.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <span
        className={`truncate font-serif leading-none text-gold ${
          compact ? "hidden text-sm sm:inline md:text-lg" : "text-sm sm:text-base md:text-lg"
        }`}
      >
        Shirwell Shipping
      </span>
    </Link>
  );
}
