import { adsenseConfig } from "@/lib/adsense";
import Script from "next/script";

export default function AdSenseScript() {
  if (!adsenseConfig.enabled) return null;

  return (
    <Script
      id="adsense-script"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseConfig.clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
