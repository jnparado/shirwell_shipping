import { ADMOB_ENABLED } from "@/constants/admob";
import { useEffect, useState, type ReactNode } from "react";
import mobileAds from "react-native-google-mobile-ads";

type Props = {
  children: ReactNode;
};

export function AdMobProvider({ children }: Props) {
  const [ready, setReady] = useState(!ADMOB_ENABLED);

  useEffect(() => {
    if (!ADMOB_ENABLED) return;

    mobileAds()
      .initialize()
      .then(() => setReady(true))
      .catch(() => setReady(true));
  }, []);

  if (!ready) return null;

  return children;
}
