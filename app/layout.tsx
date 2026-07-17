import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import AdSenseScript from "./components/AdSenseScript";
import { GoogleTagManagerBody, GoogleTagManagerHead } from "./components/GoogleTagManager";
import JsonLd from "./components/JsonLd";
import SiteLayout from "./components/SiteLayout";
import { adsenseConfig } from "@/lib/adsense";
import { absoluteUrl, siteConfig } from "@/lib/site";
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
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Fast Delivery & Logistics`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "logistics",
  alternates: {
    canonical: "/home",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/home"),
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Fast Delivery & Logistics`,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/logo.png"),
        width: 1024,
        height: 1024,
        alt: `${siteConfig.name} logo`,
      },
      {
        url: absoluteUrl("/hero-ship.png"),
        width: 1536,
        height: 1024,
        alt: "Shirwell Shipping cargo delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Fast Delivery & Logistics`,
    description: siteConfig.description,
    images: [absoluteUrl("/hero-ship.png")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/logo-icon.png", type: "image/png" }],
    apple: [{ url: "/logo-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
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
        <JsonLd />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
