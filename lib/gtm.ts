const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "";

export const gtmConfig = {
  id: gtmId,
  enabled: Boolean(gtmId),
};
