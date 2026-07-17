"use client";

import AppPageHeader from "@/app/components/ui/AppPageHeader";
import AppShell from "@/app/components/ui/AppShell";
import { AppInput, AppSelect } from "@/app/components/ui/AppInput";
import PrimaryButton from "@/app/components/ui/PrimaryButton";
import { MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";

const TYPE_OPTIONS = [
  { value: "sea", label: "Sea Freight" },
  { value: "air", label: "Air Freight" },
  { value: "land", label: "Land Freight" },
];

const RATES: Record<string, number> = {
  sea: 12.5,
  air: 48,
  land: 18,
};

export default function RateCalculatorPage() {
  const [rate, setRate] = useState<number | null>(null);
  const [type, setType] = useState("sea");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const w = Number(weight) || 0;
    const l = Number(length) || 0;
    const wi = Number(width) || 0;
    const h = Number(height) || 0;
    const volumetric = (l * wi * h) / 5000;
    const billable = Math.max(w, volumetric, 1);
    const base = RATES[type] ?? 12.5;
    setRate(Math.round(billable * base * 100) / 100);
  }

  return (
    <AppShell narrow>
      <AppPageHeader title="Rate Calculator" backHref="/" />

      <form onSubmit={handleSubmit} className="animate-fade-up space-y-5">
        <AppSelect
          label="From"
          name="from"
          options={[
            { value: "los-angeles", label: "Los Angeles, USA" },
            { value: "shanghai", label: "Shanghai, China" },
            { value: "tokyo", label: "Tokyo, Japan" },
            { value: "singapore", label: "Singapore" },
          ]}
          icon={<MapPin className="h-5 w-5" strokeWidth={1.75} />}
        />
        <AppSelect
          label="To"
          name="to"
          options={[
            { value: "manila", label: "Manila, Philippines" },
            { value: "cebu", label: "Cebu City, PH" },
            { value: "davao", label: "Davao, PH" },
            { value: "sydney", label: "Sydney, Australia" },
          ]}
          icon={<MapPin className="h-5 w-5" strokeWidth={1.75} />}
        />
        <AppSelect
          label="Shipment Type"
          name="type"
          options={TYPE_OPTIONS}
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <AppInput
          label="Weight (kg)"
          name="weight"
          type="number"
          min="0.1"
          step="0.01"
          placeholder="0.00"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />

        <div>
          <p className="mb-1.5 text-sm font-medium text-muted">Dimensions (cm)</p>
          <div className="grid grid-cols-3 gap-2">
            <AppInput
              name="length"
              type="number"
              min="1"
              placeholder="L"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            />
            <AppInput
              name="width"
              type="number"
              min="1"
              placeholder="W"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              required
            />
            <AppInput
              name="height"
              type="number"
              min="1"
              placeholder="H"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
        </div>

        <PrimaryButton type="submit">Calculate Rate</PrimaryButton>
      </form>

      {rate !== null && (
        <div className="animate-fade-up mt-8 rounded-2xl border border-border bg-surface-elevated p-6 text-center">
          <p className="text-sm text-muted">Estimated Rate</p>
          <p className="mt-2 text-4xl font-bold text-success">${rate.toFixed(2)} USD</p>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Final pricing may vary based on actual weight, dimensions, customs, and
            fuel surcharges at booking.
          </p>
        </div>
      )}
    </AppShell>
  );
}
