import Link from "next/link";
import LogoBrand from "./LogoBrand";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark px-4 pb-8 pt-12 text-muted sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <LogoBrand />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Cost-effective logistic solutions for every business. Domestic, international,
              and e-commerce delivery with complete flexibility.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "Domestic Courier Solutions",
                "International Courier Solutions",
                "Air Courier Solutions",
                "E-Commerce Logistics",
              ].map((item) => (
                <li key={item}>
                  <Link href="/#services" className="transition-colors hover:text-gold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/home", label: "Home" },
                { href: "/track", label: "Track Shipment" },
                { href: "/book", label: "Book a Shipment" },
                { href: "/calculator", label: "Rate Calculator" },
                { href: "/shipments", label: "My Shipments" },
                { href: "/account", label: "My Account" },
                { href: "/login", label: "Login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Reach Out to Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-gold">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\D/g, "")}`}
                  className="hover:text-gold"
                >
                  {siteConfig.contactPhone}
                </a>
              </li>
              <li>
                123 Logistics Way, Suite 100
                <br />
                Shipping City, SC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row">
          <p className="text-center text-sm text-muted/70 sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {["Twitter", "LinkedIn", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-muted/70 transition-colors hover:text-gold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
