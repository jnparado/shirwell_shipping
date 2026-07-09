# Shirwell Shipping — React Native (Android)

Android app for **Shirwell Shipping**, built with **Expo** and **React Native**.

## Features

- Home screen with hero, tracking form, and about section
- **Track Shipment** with live Google Maps (Android)
- Login and Admin screens
- Gold/dark branding matching the website

## Prerequisites

- Node.js 20+
- [Android Studio](https://developer.android.com/studio) with Android SDK
- Google Maps API key with **Maps SDK for Android** enabled

## Setup

```bash
cd mobile
npm install
cp .env.example .env
```

Add your Google Maps key to `.env`:

```bash
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_android_maps_api_key
```

Copy is optional if assets already exist; otherwise copy branding images from the web app:

```bash
cp ../public/logo-icon.png ./assets/logo-icon.png
cp ../public/hero-background.png ./assets/hero-background.png
```

## Run on Android

### Development build (recommended for Google Maps)

```bash
npx expo prebuild --platform android
npm run android
```

### Expo Go (limited — native maps may not work fully)

```bash
npm start
```

Then press `a` for Android emulator, or scan the QR code with Expo Go on a device.

## Build APK / AAB

```bash
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

Release APK: `android/app/build/outputs/apk/release/`

## Project structure

```
mobile/
  app/           Expo Router screens (Home, Track, Login, Admin)
  components/    Header, TrackingMap
  lib/           Site config + live tracking simulation
  constants/     Theme colors
```

## Notes

- Live tracking uses the same route simulation as the website (updates every 5 seconds).
- For production GPS data, connect `lib/tracking.ts` to your backend API.
- The Next.js website remains in the repo root; this `mobile/` folder is the Android app.
