const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "";
const bannerSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER ?? "";
const boxAdSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOX_AD ?? bannerSlot;
const inlineSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE ?? boxAdSlot;

export const adsenseConfig = {
  clientId,
  /** Footer / site-wide horizontal banner */
  bannerSlot,
  /** Rectangle / in-content ad units */
  boxAdSlot,
  /** Homepage mid-content (defaults to box ad slot) */
  inlineSlot,
  /** Script + meta load when publisher id is set (needed for AdSense site verification) */
  scriptEnabled: Boolean(clientId),
  /** Ad units require both client + at least one slot */
  enabled: Boolean(clientId && (bannerSlot || boxAdSlot)),
  /** ads.txt publisher id (pub-xxxxxxxx) */
  publisherId: clientId ? clientId.replace(/^ca-pub-/, "pub-") : "",
};
