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
      className={`flex min-w-0 max-w-[calc(100%-3rem)] items-center gap-2.5 ${className}`}
    >
      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full sm:h-10 sm:w-10">
        <Image src="/logo-icon.png" alt="" fill className="object-cover" priority />
      </div>
      <span
        className={`truncate font-bold leading-none tracking-wide text-gold ${
          compact ? "text-sm sm:text-base" : "text-base sm:text-lg"
        }`}
      >
        Shirwell Shipping
      </span>
    </Link>
  );
}
