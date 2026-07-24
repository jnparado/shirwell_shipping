import { gtagConfig } from "@/lib/gtag";

/**
 * Google tag (gtag.js) — must sit early in <head> for Tag diagnostics.
 * Consent Mode defaults to denied until the cookie banner choice is applied.
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
  ad_storage: 'denied',
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
