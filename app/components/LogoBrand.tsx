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
      className={`flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2 rounded-xl border-2 border-gold-bright bg-[#0a0a0a] px-2 py-1.5 shadow-lg shadow-black/50 sm:gap-3 sm:px-3 sm:py-2 ${className}`}
    >
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-gold-bright sm:h-11 sm:w-11 md:h-12 md:w-12">
        <Image
          src="/logo-icon.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <span
        className={`header-gold-text truncate font-serif text-sm font-extrabold leading-none tracking-wide sm:text-base md:text-lg ${
          compact ? "inline" : "inline"
        }`}
      >
        Shirwell Shipping
      </span>
    </Link>
  );
}
