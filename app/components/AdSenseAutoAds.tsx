"use client";

import { adsenseConfig } from "@/lib/adsense";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>> & {
      requestNonPersonalizedAds?: number;
      loaded?: boolean;
    };
  }
}

/**
 * Enables AdSense Auto ads / page-level ads when turned on in the AdSense console.
 * Manual units still work via AdSenseAd.
 */
export default function AdSenseAutoAds() {
  useEffect(() => {
    if (!adsenseConfig.clientId) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({
        google_ad_client: adsenseConfig.clientId,
        enable_page_level_ads: true,
      });
    } catch {
      /* ignore duplicate / already-enabled */
    }
  }, []);

  return null;
}
