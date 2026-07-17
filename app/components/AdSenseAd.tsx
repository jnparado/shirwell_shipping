"use client";

import { adsenseConfig } from "@/lib/adsense";
import { useEffect, useRef } from "react";

type AdSenseAdProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  layout?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export default function AdSenseAd({
  slot,
  format = "auto",
  layout,
  className = "",
}: AdSenseAdProps) {
  const adSlot = slot ?? adsenseConfig.bannerSlot;
  const initialized = useRef(false);

  useEffect(() => {
    if (!adsenseConfig.clientId || !adSlot || initialized.current) return;

    const pushAd = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
        return true;
      } catch {
        return false;
      }
    };

    if (pushAd()) return;

    const interval = window.setInterval(() => {
      if (pushAd()) window.clearInterval(interval);
    }, 400);

    const timeout = window.setTimeout(() => window.clearInterval(interval), 10000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [adSlot]);

  if (!adsenseConfig.clientId || !adSlot) return null;

  return (
    <div className={`adsense-container ${className}`.trim()}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseConfig.clientId}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { "data-ad-layout": layout } : undefined)}
      />
    </div>
  );
}
