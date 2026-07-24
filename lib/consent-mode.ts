declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function applyGtagConsent(value: "accepted" | "rejected") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  const granted = value === "accepted";
  window.gtag("consent", "update", {
    ad_storage: granted ? "granted" : "denied",
    ad_user_data: granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}
