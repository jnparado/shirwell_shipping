# Shirwell Shipping — Android WebView App

Android app for **Shirwell Shipping**, built with **Expo** and **React Native WebView**. It loads the full Next.js website inside a native shell.

## Features

- Full-screen WebView of the Shirwell Shipping website
- Android hardware back button navigates WebView history
- Pull-to-refresh
- Cookie/session support for login and admin flows
- Gold/dark splash and status bar matching the brand

## Prerequisites

- Node.js 20+
- [Android Studio](https://developer.android.com/studio) with Android SDK
- The Next.js website running locally or deployed

## Setup

```bash
cd mobile
npm install --legacy-peer-deps
cp .env.example .env
```

Set the website URL in `.env`:

```bash
# Android emulator → host machine localhost
EXPO_PUBLIC_WEB_APP_URL=http://10.0.2.2:3000

# Physical device on same Wi‑Fi (use your computer's LAN IP)
# EXPO_PUBLIC_WEB_APP_URL=http://192.168.1.10:3000

# Production
# EXPO_PUBLIC_WEB_APP_URL=https://your-domain.com
```

## Run on Android

1. Start the website from the repo root:

```bash
cd ..
npm run dev
```

2. Build and run the Android app:

```bash
cd mobile
npx expo prebuild --platform android
npm run android
```

For day-to-day development after prebuild:

```bash
npm run android
```

## Build APK / AAB

```bash
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

Release APK: `android/app/build/outputs/apk/release/`

## Project structure

```
mobile/
  app/           Expo Router — single WebView screen
  constants/     Web app URL + theme colors
```

## Notes

- **Android emulator** uses `http://10.0.2.2:3000` to reach the dev server on your computer.
- **Physical device** must use your computer's LAN IP, not `localhost`.
- **Production** should use `https://` so cleartext traffic is not required.
- The Next.js website lives in the repo root; this `mobile/` folder is the Android wrapper.
