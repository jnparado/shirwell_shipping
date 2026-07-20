/** Production defaults so ads work even if Vercel env vars are missing. */
const DEFAULT_CLIENT_ID = "ca-pub-2495432679632375";
const DEFAULT_SLOT = "4465041934";

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim() || DEFAULT_CLIENT_ID;
const bannerSlot =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_BANNER?.trim() || DEFAULT_SLOT;
const boxAdSlot =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOX_AD?.trim() || bannerSlot;
const inlineSlot =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE?.trim() || boxAdSlot;

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
