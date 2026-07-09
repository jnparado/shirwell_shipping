import type { ConfigContext, ExpoConfig } from "expo/config";
import {
  AndroidConfig,
  type ConfigPlugin,
  withAndroidManifest,
} from "@expo/config-plugins";

/** Allow http:// URLs in WebView during local development (Android emulator). */
const withCleartextTraffic: ConfigPlugin = (config) =>
  withAndroidManifest(config, (config) => {
    const application = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults,
    );
    application.$["android:usesCleartextTraffic"] = "true";
    return config;
  });

export default ({ config }: ConfigContext): ExpoConfig =>
  withCleartextTraffic({
    ...config,
    name: "Shirwell Shipping",
    slug: "shirwell-shipping",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    scheme: "shirwellshipping",
    plugins: ["expo-router"],
    android: {
      package: "com.shirwell.shipping",
      adaptiveIcon: {
        backgroundColor: "#0a0a0a",
        foregroundImage: "./assets/android-icon-foreground.png",
        backgroundImage: "./assets/android-icon-background.png",
      },
    },
    extra: {
      webAppUrl: process.env.EXPO_PUBLIC_WEB_APP_URL ?? "http://10.0.2.2:3000",
    },
  });
