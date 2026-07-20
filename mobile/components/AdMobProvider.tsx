import { ADMOB_ENABLED } from "@/constants/admob";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import mobileAds, { AdsConsent } from "react-native-google-mobile-ads";

type Props = {
  children: ReactNode;
};

const AdMobReadyContext = createContext(false);

/** True when UMP allows requesting ads and the Mobile Ads SDK has initialized. */
export function useAdMobReady() {
  return useContext(AdMobReadyContext);
}

/**
 * Initializes Google Mobile Ads after UMP consent (EEA / regulated regions).
 * Ads load only when `canRequestAds` is true.
 */
export function AdMobProvider({ children }: Props) {
  const [adsReady, setAdsReady] = useState(!ADMOB_ENABLED);
  const [shellReady, setShellReady] = useState(!ADMOB_ENABLED);

  useEffect(() => {
    if (!ADMOB_ENABLED) return;

    let cancelled = false;

    async function prepareAds() {
      let canRequestAds = true;

      try {
        const consent = await AdsConsent.gatherConsent();
        canRequestAds = consent.canRequestAds;
      } catch {
        canRequestAds = true;
      }

      if (cancelled) return;

      if (canRequestAds) {
        try {
          await mobileAds().initialize();
        } catch {
          /* ignore init errors — banner will fail soft */
        }
      }

      if (!cancelled) {
        setAdsReady(canRequestAds);
        setShellReady(true);
      }
    }

    void prepareAds();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!shellReady) return null;

  return (
    <AdMobReadyContext.Provider value={adsReady}>{children}</AdMobReadyContext.Provider>
  );
}
