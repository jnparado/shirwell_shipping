import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import { formatAddress, siteConfig } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for shipping quotes, tracking help, and logistics support.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-background px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl animate-fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Have a question about shipping, need a custom quote, or need help with a tracking
          code? Send us a message and our team will respond as soon as possible.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-8 rounded-2xl border border-border bg-surface-elevated p-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted">Email</h2>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-2 block break-all text-lg text-foreground hover:text-gold"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted">Phone</h2>
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\D/g, "")}`}
                className="mt-2 block text-lg text-foreground hover:text-gold"
              >
                {siteConfig.contactPhone}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted">Address</h2>
              <p className="mt-2 text-lg leading-relaxed text-foreground">{formatAddress()}</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted">
                Business Hours
              </h2>
              <p className="mt-2 text-lg text-foreground">
                Monday – Friday: 8:00 AM – 6:00 PM
                <br />
                Saturday: 9:00 AM – 1:00 PM
              </p>
            </div>
            <p className="text-sm text-muted">
              See our <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>{" "}
              and <Link href="/terms" className="text-gold hover:underline">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
