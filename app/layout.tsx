import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import AdSenseScript from "./components/AdSenseScript";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "./components/GoogleTagManager";
import SiteLayout from "./components/SiteLayout";
import { adsenseConfig } from "@/lib/adsense";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Fast Delivery & Logistics`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    `${siteConfig.name} provides cost-effective logistic solutions for every business. Domestic, international, and e-commerce delivery with complete flexibility.`,
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  ...(adsenseConfig.enabled
    ? { other: { "google-adsense-account": adsenseConfig.clientId } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable} antialiased`}>
      <body>
        <GoogleTagManagerHead />
        <GoogleTagManagerBody />
        <AdSenseScript />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
