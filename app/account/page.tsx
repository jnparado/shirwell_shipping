import AppPageHeader from "@/app/components/ui/AppPageHeader";
import AppShell from "@/app/components/ui/AppShell";
import { signOutAction } from "@/app/login/actions";
import { getCurrentAccount } from "@/lib/supabase/account";
import {
  ChevronRight,
  CreditCard,
  HelpCircle,
  History,
  LogOut,
  MapPin,
  Pencil,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const MENU_ITEMS = [
  { href: "/account", label: "Personal Information", icon: User },
  { href: "/account", label: "Shipping Addresses", icon: MapPin },
  { href: "/account", label: "Payment Methods", icon: CreditCard },
  { href: "/shipments", label: "Shipment History", icon: History },
  { href: "/#contact", label: "Support", icon: HelpCircle },
  { href: "/account", label: "Settings", icon: Settings },
];

export const metadata = {
  title: "My Account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const account = await getCurrentAccount();

  if (!account) {
    redirect("/login?next=/account");
  }

  return (
    <AppShell narrow>
      <AppPageHeader title="My Account" backHref="/home" />

      <div className="animate-fade-up space-y-6">
        <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold text-xl font-bold text-black">
            {account.initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-lg font-semibold text-foreground">{account.name}</p>
                <p className="mt-1 text-sm text-muted">{account.email}</p>
                {account.phone ? (
                  <p className="mt-0.5 text-sm text-muted">{account.phone}</p>
                ) : (
                  <p className="mt-0.5 text-sm text-muted/70">No phone on file</p>
                )}
                <p className="mt-2 inline-flex rounded-md bg-gold/15 px-2 py-0.5 text-xs font-semibold capitalize text-gold">
                  {account.role}
                </p>
              </div>
              <button
                type="button"
                className="rounded-lg p-2 text-gold transition-colors hover:bg-gold/10"
                aria-label="Edit profile"
              >
                <Pencil className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>

        <ul className="overflow-hidden rounded-2xl border border-border bg-surface-elevated">
          {MENU_ITEMS.map(({ href, label, icon: Icon }, index) => (
            <li key={label}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-4 transition-colors hover:bg-[#242424] ${
                  index < MENU_ITEMS.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.75} />
                <span className="flex-1 font-medium text-foreground">{label}</span>
                <ChevronRight className="h-5 w-5 text-muted" strokeWidth={1.75} />
              </Link>
            </li>
          ))}
        </ul>

        <form action={signOutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-4 text-brand-red transition-colors hover:bg-brand-red/15"
          >
            <LogOut className="h-5 w-5" strokeWidth={1.75} />
            <span className="font-semibold">Log Out</span>
          </button>
        </form>
      </div>
    </AppShell>
  );
}
