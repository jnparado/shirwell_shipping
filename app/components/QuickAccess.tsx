import Link from "next/link";
import {
  Box,
  FileText,
  Globe,
  MapPin,
  Newspaper,
  Phone,
} from "lucide-react";

const items = [
  { href: "/book", label: "Book Shipment", icon: Box },
  { href: "/calculator", label: "Rate Calculator", icon: FileText },
  { href: "/#contact", label: "Branches", icon: MapPin },
  { href: "/#services", label: "Services", icon: Globe },
  { href: "/#about", label: "News", icon: Newspaper },
  { href: "/#contact", label: "Contact Us", icon: Phone },
];

export default function QuickAccess() {
  return (
    <section className="animate-fade-up-delay-2 pt-8 pb-4">
      <h2 className="text-lg font-semibold text-white">Quick Access</h2>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
        {items.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-surface-elevated px-2 text-center transition-colors hover:bg-[#242424]"
          >
            <Icon className="h-7 w-7 text-gold sm:h-8 sm:w-8" strokeWidth={1.5} />
            <span className="text-[11px] font-medium leading-tight text-white sm:text-xs">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
