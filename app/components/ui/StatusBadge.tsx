import type { ShipmentStatus } from "@/lib/shipments";

const STATUS_STYLES: Record<ShipmentStatus, string> = {
  Delivered: "bg-success/15 text-success",
  "In Transit": "bg-info/15 text-info",
  "Out for Delivery": "bg-info/15 text-info",
  Processing: "bg-gold/15 text-gold",
  Canceled: "bg-white/10 text-muted",
};

export default function StatusBadge({
  status,
  className = "",
}: {
  status: ShipmentStatus;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[status]} ${className}`}
    >
      {status}
    </span>
  );
}
