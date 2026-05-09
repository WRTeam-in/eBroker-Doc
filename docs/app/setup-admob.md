---
sidebar_position: 11
---

# Setup AdMob

Follow the common Flutter app guide for AdMob account creation, ad-unit setup, and the Android/iOS SDK config:

[Advertisement Setup ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/advertisement/google-admob)

## eBroker-specific notes

After completing the common-doc steps, paste your ad unit IDs into the eBroker admin panel:

1. Admin Panel → **Settings → App Settings → AdMob**.
2. Add **Banner Ad ID** and **Interstitial Ad ID**.
3. Use the toggle to enable/disable ads without rebuilding the app.

eBroker uses three ad-unit types: Banner, Interstitial, and Rewarded — create all three in your AdMob dashboard.

> **Tip:** During development use AdMob test ad IDs to avoid policy violations. Switch to live IDs only for the production build.
