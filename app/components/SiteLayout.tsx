import AdSenseAd from "./AdSenseAd";
import BottomNav from "./BottomNav";
import CookieConsent from "./CookieConsent";
import Footer from "./Footer";
import Header from "./Header";
import { adsenseConfig } from "@/lib/adsense";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pb-20 lg:pb-0">{children}</div>
      {adsenseConfig.bannerSlot && (
        <section
          aria-label="Advertisement"
          className="border-t border-border bg-surface px-4 py-6"
        >
          <div className="mx-auto max-w-5xl overflow-hidden">
            <AdSenseAd className="min-h-[90px]" slot={adsenseConfig.bannerSlot} />
          </div>
        </section>
      )}
      <Footer />
      <BottomNav />
      <CookieConsent />
    </>
  );
}
