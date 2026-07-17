"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  Calculator,
  Menu,
  Package,
  Ship,
  User,
  X,
} from "lucide-react";
import LogoBrand from "./LogoBrand";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/track", label: "Track" },
  { href: "/book", label: "Book" },
  { href: "/calculator", label: "Calculator" },
  { href: "/shipments", label: "My Shipments" },
  { href: "/account", label: "Account" },
];

const mobileQuickLinks = [
  { href: "/book", label: "Book a Shipment", icon: Ship },
  { href: "/calculator", label: "Rate Calculator", icon: Calculator },
  { href: "/shipments", label: "My Shipments", icon: Package },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/account", label: "My Account", icon: User },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
        isActive
          ? "bg-gold text-black"
          : "text-gold hover:bg-gold/10"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`${
        isHome
          ? "fixed border-transparent bg-gradient-to-b from-black/90 via-black/70 to-transparent"
          : "sticky border-gold/20 bg-[#0a0a0a]/95 backdrop-blur-md"
      } top-0 left-0 right-0 z-50 border-b`}
    >
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6">
        <LogoBrand compact />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/notifications"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" strokeWidth={1.75} />
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-gold bg-transparent px-4 py-2 text-sm font-bold text-gold transition-colors hover:bg-gold/10"
          >
            Log In
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-gold bg-[#0a0a0a] text-gold transition-colors hover:bg-gold/10 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-5 w-5" strokeWidth={2} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={2} />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0a0a0a] px-3 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  label={link.label}
                  onClick={() => setMenuOpen(false)}
                />
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 border-t border-white/10 pt-4">
            {mobileQuickLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
                >
                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block rounded-xl bg-gold py-3 text-center text-sm font-bold text-black"
              >
                Log In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
