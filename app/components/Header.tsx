"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoBrand from "./LogoBrand";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
  { href: "/track", label: "Track" },
];

const homeActions = [
  { href: "/track", label: "Track Shipment", shortLabel: "Track", variant: "outline" as const },
  { href: "/login", label: "Login", shortLabel: "Login", variant: "outline" as const },
  { href: "/admin", label: "Admin", shortLabel: "Admin", variant: "solid" as const },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname();
  const isHashLink = href.startsWith("/#");
  const isActive = isHashLink ? pathname === "/" && href === "/#home" : pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "border border-gold text-gold"
          : "border border-transparent text-gold/75 hover:border-gold/30 hover:text-gold"
      }`}
    >
      {label}
    </Link>
  );
}

function HomeActionLink({
  href,
  label,
  shortLabel,
  variant = "outline",
  onClick,
}: {
  href: string;
  label: string;
  shortLabel: string;
  variant?: "outline" | "solid";
  onClick?: () => void;
}) {
  const styles =
    variant === "solid"
      ? "border-gold bg-gold text-black hover:bg-gold-bright"
      : "border-gold/40 bg-black/55 text-gold hover:border-gold hover:bg-black/70";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block w-full rounded-xl border px-2.5 py-2 text-center font-serif text-[10px] font-semibold uppercase tracking-wide backdrop-blur-md transition-colors sm:w-auto sm:px-4 sm:py-2 sm:text-xs md:inline-block md:px-5 md:text-sm ${styles}`}
    >
      <span className="md:hidden">{shortLabel}</span>
      <span className="hidden md:inline">{label}</span>
    </Link>
  );
}

function MenuToggle({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg border border-gold/40 p-2 text-gold md:hidden"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
    >
      {open ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex min-w-0 items-center justify-between gap-2 px-3 py-2 sm:px-6 sm:py-4">
        <LogoBrand compact />

        <nav className="hidden min-w-0 items-center gap-1.5 md:flex md:gap-3">
          {homeActions.map((action) => (
            <HomeActionLink key={action.href} {...action} />
          ))}
        </nav>

        <MenuToggle open={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-black/85 px-3 py-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-2">
            {homeActions.map((action) => (
              <li key={action.href}>
                <HomeActionLink
                  {...action}
                  onClick={() => setMenuOpen(false)}
                />
              </li>
            ))}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-serif text-sm font-medium text-gold/90 hover:bg-gold/10 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function InnerHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-6 sm:py-3 lg:gap-6">
        <LogoBrand compact />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 sm:gap-3 lg:flex">
          <Link
            href="/track"
            className="rounded-xl border border-gold/40 bg-black/55 px-3 py-2 font-serif text-xs font-semibold text-gold backdrop-blur-sm transition-colors hover:border-gold hover:bg-black/60 sm:px-4 sm:text-sm"
          >
            Track Shipment
          </Link>
          <Link
            href="/login"
            className="rounded-xl border border-gold/40 bg-black/55 px-3 py-2 font-serif text-xs font-semibold text-gold backdrop-blur-sm transition-colors hover:border-gold hover:bg-black/60 sm:px-4 sm:text-sm"
          >
            Log In
          </Link>
          <Link
            href="/admin"
            className="rounded-xl border border-gold bg-gold px-3 py-2 font-serif text-xs font-bold text-black transition-colors hover:bg-gold-bright sm:px-4 sm:text-sm"
          >
            Admin
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gold/30 p-2 text-gold lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#0a0a0a] px-3 py-3 lg:hidden">
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
            <li className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/track"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl border border-gold/40 bg-black/55 py-2.5 text-center font-serif text-sm font-semibold text-gold"
              >
                Track Shipment
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl border border-gold/40 bg-black/55 py-2.5 text-center font-serif text-sm font-semibold text-gold"
              >
                Log In
              </Link>
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl border border-gold bg-gold py-2.5 text-center font-serif text-sm font-bold text-black"
              >
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default function Header() {
  const pathname = usePathname();
  return pathname === "/" ? <HomeHeader /> : <InnerHeader />;
}
