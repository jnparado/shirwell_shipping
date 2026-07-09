"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoBrand from "./LogoBrand";

const navLinks = [
  { href: "/#home", label: "Home" },
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
      className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
        isActive
          ? "header-gold-text border border-gold-bright"
          : "header-gold-text border border-transparent hover:border-gold-bright/60"
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
      ? "border-2 border-gold-bright bg-gold-bright text-black shadow-lg shadow-black/40 hover:bg-[#ffe566]"
      : "header-gold-text border-2 border-gold-bright bg-[#141414] shadow-lg shadow-black/40 hover:bg-[#1a1a1a]";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block w-full rounded-xl px-2.5 py-2 text-center font-serif text-[10px] font-extrabold uppercase tracking-wide transition-colors sm:w-auto sm:px-4 sm:py-2.5 sm:text-xs md:inline-block md:px-5 md:text-sm ${styles}`}
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
      className="header-gold-text inline-flex items-center justify-center rounded-lg border-2 border-gold-bright bg-[#141414] p-2 shadow-md md:hidden"
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-gold-bright/50 bg-[#0a0a0a] shadow-lg shadow-black/60">
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
        <nav className="border-t border-gold/20 bg-[#0a0a0a] px-3 py-3 md:hidden">
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
                  className="header-gold-text block rounded-lg px-3 py-2.5 font-serif text-sm font-semibold hover:bg-gold-bright/10"
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
    <header className="sticky top-0 z-50 border-b-2 border-gold-bright/50 bg-[#0a0a0a] shadow-lg shadow-black/60">
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
            className="header-gold-text rounded-xl border-2 border-gold-bright bg-[#141414] px-3 py-2 font-serif text-xs font-extrabold shadow-md transition-colors hover:bg-[#1a1a1a] sm:px-4 sm:text-sm"
          >
            Track Shipment
          </Link>
          <Link
            href="/login"
            className="header-gold-text rounded-xl border-2 border-gold-bright bg-[#141414] px-3 py-2 font-serif text-xs font-extrabold shadow-md transition-colors hover:bg-[#1a1a1a] sm:px-4 sm:text-sm"
          >
            Log In
          </Link>
          <Link
            href="/admin"
            className="rounded-xl border-2 border-gold-bright bg-gold-bright px-3 py-2 font-serif text-xs font-extrabold text-black shadow-md transition-colors hover:bg-[#ffe566] sm:px-4 sm:text-sm"
          >
            Admin
          </Link>
        </div>

        <button
          type="button"
          className="header-gold-text inline-flex items-center justify-center rounded-lg border-2 border-gold-bright bg-[#141414] p-2 lg:hidden"
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
                className="header-gold-text flex-1 rounded-xl border-2 border-gold-bright bg-[#141414] py-2.5 text-center font-serif text-sm font-extrabold"
              >
                Track Shipment
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="header-gold-text flex-1 rounded-xl border-2 border-gold-bright bg-[#141414] py-2.5 text-center font-serif text-sm font-extrabold"
              >
                Log In
              </Link>
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-xl border-2 border-gold-bright bg-gold-bright py-2.5 text-center font-serif text-sm font-extrabold text-black"
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
