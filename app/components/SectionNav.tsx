import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export default function SectionNav() {
  return (
    <nav className="border-b border-neutral-200 bg-white">
      <ul className="flex items-center gap-6 overflow-x-auto px-4 py-3 sm:justify-center sm:gap-10 sm:py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {links.map((link) => (
          <li key={link.href} className="shrink-0">
            <Link
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-800 transition-colors hover:text-brand-red sm:text-sm sm:tracking-[0.2em]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
