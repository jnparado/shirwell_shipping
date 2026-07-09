import Link from "next/link";
import LogoBrand from "./LogoBrand";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary-dark px-4 pb-8 pt-12 text-neutral-300 sm:px-6 sm:pt-16">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <LogoBrand />
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Cost-effective logistic solutions for every business. Domestic, international,
              and e-commerce delivery with complete flexibility.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "Domestic Courier Solutions",
                "International Courier Solutions",
                "Air Courier Solutions",
                "E-Commerce Logistics",
              ].map((item) => (
                <li key={item}>
                  <Link href="/#services" className="text-neutral-400 transition-colors hover:text-accent">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/#services", label: "Services" },
                { href: "/#pricing", label: "Pricing" },
                { href: "/#contact", label: "Contact" },
                { href: "/track", label: "Track Shipment" },
                { href: "/login", label: "Login" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Reach Out to Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-neutral-400 hover:text-accent">
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contactPhone.replace(/\D/g, "")}`} className="text-neutral-400 hover:text-accent">
                  {siteConfig.contactPhone}
                </a>
              </li>
              <li className="text-neutral-400">
                123 Logistics Way, Suite 100
                <br />
                Shipping City, SC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:mt-12 sm:flex-row">
          <p className="text-center text-sm text-neutral-500 sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {["Twitter", "LinkedIn", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-neutral-500 transition-colors hover:text-accent"
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
