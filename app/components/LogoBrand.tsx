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
      className={`flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 rounded-xl border border-gold/60 bg-[#0a0a0a] px-2 py-1.5 sm:gap-2.5 sm:px-3 sm:py-2 ${className}`}
    >
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gold/50 sm:h-9 sm:w-9">
        <Image src="/logo-icon.png" alt="" fill className="object-cover" priority />
      </div>
      <span
        className={`truncate font-serif font-bold leading-none tracking-wide text-gold ${
          compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
        }`}
      >
        Shirwell Shipping
      </span>
    </Link>
  );
}
