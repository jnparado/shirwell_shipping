import { gtagConfig } from "@/lib/gtag";

/**
 * Google tag (gtag.js) — early in <head> for Tag diagnostics.
 * Allows basic ad serving by default; cookie banner upgrades to personalized
 * (Accept) or keeps non-personalized (Reject).
 */
export default function GoogleTag() {
  if (!gtagConfig.enabled) return null;

  const id = gtagConfig.id;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'granted',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', '${id}');
          `.trim(),
        }}
      />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    </>
  );
}
