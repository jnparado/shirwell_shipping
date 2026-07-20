"use client";

import { adsenseConfig } from "@/lib/adsense";
import { useAdConsent } from "@/app/components/CookieConsent";
import { useEffect, useRef } from "react";

type AdSenseAdProps = {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical" | "fluid";
  layout?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>> & {
      requestNonPersonalizedAds?: number;
      loaded?: boolean;
    };
  }
}

/**
 * Renders a Google AdSense unit.
 * Reject consent → non-personalized ads; Accept / no choice → personalized.
 */
export default function AdSenseAd({
  slot,
  format = "auto",
  layout,
  className = "",
}: AdSenseAdProps) {
  const adSlot = slot ?? adsenseConfig.bannerSlot;
  const consent = useAdConsent();
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const nonPersonalized = consent === "rejected";

  useEffect(() => {
    if (!adsenseConfig.clientId || !adSlot || pushed.current) return;

    let cancelled = false;
    let attempts = 0;

    const tryPush = () => {
      if (cancelled || pushed.current) return true;

      const ins = insRef.current;
      if (!ins) return false;

      if (ins.getAttribute("data-adsbygoogle-status") || ins.getAttribute("data-ad-status")) {
        pushed.current = true;
        return true;
      }

      // Script tag is in <head>; adsbygoogle is created when it loads
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        return false;
      }

      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.requestNonPersonalizedAds = nonPersonalized ? 1 : 0;
        window.adsbygoogle.push({});
        pushed.current = true;
        return true;
      } catch {
        return false;
      }
    };

    if (tryPush()) return;

    const interval = window.setInterval(() => {
      attempts += 1;
      if (tryPush() || attempts > 40) window.clearInterval(interval);
    }, 250);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [adSlot, nonPersonalized]);

  if (!adsenseConfig.clientId || !adSlot) return null;

  return (
    <div className={`adsense-container ${className}`.trim()}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: 90, width: "100%" }}
        data-ad-client={adsenseConfig.clientId}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { "data-ad-layout": layout } : undefined)}
      />
    </div>
  );
}
