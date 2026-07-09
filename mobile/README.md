# Shirwell Shipping — Android WebView App

Android app for **Shirwell Shipping**, built with **Expo** and **React Native WebView**. It loads the full Next.js website inside a native shell.

## Features

- Full-screen WebView of the Shirwell Shipping website
- Google AdSense ads from the website (shown inside the WebView)
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

Ads use **Google AdSense** on the website. Configure `NEXT_PUBLIC_ADSENSE_CLIENT_ID` and `NEXT_PUBLIC_ADSENSE_SLOT` in the repo root `.env.local` — they appear automatically in the Android WebView.

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

### If you see “No Android connected device found”

Expo needs a **running emulator** or a **USB-connected phone** with debugging enabled.

**1. Set Android SDK env vars** (add to `~/.zshrc`, then `source ~/.zshrc`):

```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export PATH="$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$PATH"
```

**2. Start an emulator** (pick one):

- **Android Studio** → Device Manager → ▶ next to `Medium_Phone_API_36.1`
- **Terminal:**
  ```bash
  emulator -avd Medium_Phone_API_36.1
  ```

Wait until the home screen appears, then verify:

```bash
adb devices
# should show: emulator-5554   device
```

**3. Run the app again:**

```bash
cd mobile
npm run android
```

**Physical device instead:** enable Developer options → USB debugging, plug in via USB, accept the debug prompt, then `adb devices` should list your phone.

## Build APK / AAB

```bash
npx expo prebuild --platform android
cd android && ./gradlew assembleRelease
```

Release APK: `android/app/build/outputs/apk/release/`

## Project structure

```
mobile/
  app/           Expo Router — WebView screen
  constants/     Web app URL + theme colors
```

## Notes

- **Android emulator** uses `http://10.0.2.2:3000` to reach the dev server on your computer.
- **Physical device** must use your computer's LAN IP, not `localhost`.
- **Production** should use `https://` so cleartext traffic is not required.
- The Next.js website lives in the repo root; this `mobile/` folder is the Android wrapper.
