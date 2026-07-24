"use client";

import AppPageHeader from "@/app/components/ui/AppPageHeader";
import AppShell from "@/app/components/ui/AppShell";
import { AppInput, AppTextarea } from "@/app/components/ui/AppInput";
import PrimaryButton from "@/app/components/ui/PrimaryButton";
import InContentAd from "@/app/components/InContentAd";
import { MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

const SHIPMENT_TYPES = ["Sea Freight", "Air Freight", "Land Freight"] as const;

export default function BookShipmentPage() {
  const router = useRouter();
  const [type, setType] = useState<(typeof SHIPMENT_TYPES)[number]>("Sea Freight");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/shipments");
  }

  return (
    <AppShell narrow>
      <AppPageHeader title="Book a Shipment" backHref="/home" />

      <form onSubmit={handleSubmit} className="animate-fade-up space-y-5">
        <div>
          <p className="mb-2 text-sm font-medium text-muted">Shipment Type</p>
          <div className="grid grid-cols-3 gap-2">
            {SHIPMENT_TYPES.map((option) => {
              const active = type === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setType(option)}
                  className={`rounded-xl border px-2 py-2.5 text-center text-xs font-semibold transition-colors sm:text-sm ${
                    active
                      ? "border-gold bg-gold text-black"
                      : "border-border bg-surface-elevated text-foreground hover:bg-[#2a2a2a]"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <AppInput
          label="From"
          name="from"
          placeholder="Origin city / port"
          required
          icon={<MapPin className="h-5 w-5" strokeWidth={1.75} />}
        />
        <AppInput
          label="To"
          name="to"
          placeholder="Destination city / port"
          required
          icon={<MapPin className="h-5 w-5" strokeWidth={1.75} />}
        />
        <AppTextarea
          label="Cargo Details"
          name="cargo"
          placeholder="Description of Goods"
          required
        />
        <AppInput
          label="Weight (kg)"
          name="weight"
          type="number"
          min="0.1"
          step="0.01"
          placeholder="0.00"
          required
        />

        <div>
          <p className="mb-1.5 text-sm font-medium text-muted">Dimensions (cm)</p>
          <div className="grid grid-cols-3 gap-2">
            <AppInput name="length" type="number" min="1" placeholder="L" required />
            <AppInput name="width" type="number" min="1" placeholder="W" required />
            <AppInput name="height" type="number" min="1" placeholder="H" required />
          </div>
        </div>

        <PrimaryButton type="submit">Continue</PrimaryButton>
      </form>

      <InContentAd />
    </AppShell>
  );
}
